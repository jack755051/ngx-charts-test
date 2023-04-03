import { Injectable } from '@angular/core';
import { HistoryTestTimeResponse } from 'src/app/interface/echarts';

@Injectable({
  providedIn: 'root',
})
export class EchartsService {
  private usedNumbers = new Set<number>();

  constructor() {}

  //random
  randomHistoryTestTimeResponse(
    dataTime: number,
    data: HistoryTestTimeResponse[]
  ) {
    //make a loop function
    for (let i = 0; i < dataTime; i++) {
      // make new minutes
      const getMinutesData = this.randomMinutesFunction();
      // make new time
      // use toLocaleDateString format date
      const getDateData = this.randomDateFunction().toLocaleDateString(
        'zh-TW',
        {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }
      );
      // .replace(/\//g, '-');

      const getTestNumber = this.randomTestNumberFunction();

      const newData: HistoryTestTimeResponse = {
        date: getDateData,
        minutes: getMinutesData,
        topToggle: getTestNumber,
      };

      data.push(newData);
    }
    console.log('隨機歷次測驗時間', data);
  }

  //random minutes function
  randomMinutesFunction() {
    //製作隨機數字
    const randomNumber = Math.round(Math.random() * 150);
    // console.log('randomNumber', randomNumber);
    return randomNumber;
  }

  //random Date function
  randomDateFunction() {
    const startDate = new Date('1988/01/02').getTime();
    const endDate = new Date('2023/03/30').getTime();

    const randomTime = startDate + Math.random() * (endDate - startDate);
    return new Date(randomTime);
  }

  randomTestNumberFunction() {
    // const randomNumber = Math.round(Math.random() * 20);
    // const randomNumberType = 'E-book' + randomNumber;

    // return randomNumberType;
    let randomNumber: number;

    do {
      randomNumber = Math.floor(Math.random() * 20) + 1;
    } while (this.usedNumbers.has(randomNumber));

    this.usedNumbers.add(randomNumber);

    const randomNumberType = 'E-book' + randomNumber;

    return randomNumberType;
  }

  seriesDataArrFunction(
    seriesDataArr: number[][],
    minutesArr: number[],
    arrLength: number
  ) {
    seriesDataArr = minutesArr.map((value) => {
      const innerArr = new Array(arrLength).fill(0);
      innerArr[minutesArr.indexOf(value)] = value;
      return innerArr;
    });
  }

  generateRandomArray(typeNumber: number, timeNumber: number) {
    const array: number[][] = [];

    for (let i = 0; i < typeNumber; i++) {
      const innerArray: number[] = [];
      for (let j = 0; j < timeNumber; j++) {
        innerArray.push(Math.floor(Math.random() * 51));
      }
      array.push(innerArray);
    }

    console.log('方陣', array);
    return array;
  }
}
