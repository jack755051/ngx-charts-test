import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { HistoryTestTimeResponse } from 'src/app/interface/echarts';
import { EchartsService } from '../../service/charts/echarts.service';

@Component({
  selector: 'app-history-test-time',
  templateUrl: './history-test-time.component.html',
  styleUrls: ['./history-test-time.component.css'],
})
export class HistoryTestTimeComponent implements OnInit {
  data: HistoryTestTimeResponse[] = [];
  dataTime: number = 10;

  DateArr: string[] = [];
  minutesArr: number[] = [];
  topToggleArr: string[] = [];

  seriesArr: any[] = [];
  seriesDataArr: number[][] = [];
  options: EChartsOption = {};

  constructor(private echartsService: EchartsService) {}

  ngOnInit() {
    // this.echartsService.randomHistoryTestTimeResponse(this.dataTime, this.data);

    // this.DateArr = this.data.map((item) => item.date);
    // console.log(
    //   '提取 隨機歷次測驗時間 日期',
    //   this.DateArr,
    //   typeof this.DateArr[0]
    // );

    // this.minutesArr = this.data.map((item) => item.minutes);
    // console.log('提取 隨機歷次測驗時間 分鐘數', this.minutesArr);

    // this.topToggleArr = this.data.map((item) => item.topToggle);
    // console.log('提取 隨機歷次測驗時間 種類', this.topToggleArr);

    //製作所有map函式
    this.mapFunction();
    this.seriesArrFunction();
    //將所有資料帶入series
    this.makeOption();
  }

  //response
  response: HistoryTestTimeResponse[] = [
    { date: '2005/04/18', minutes: 19, topToggle: 'E-book3' },
    { date: '2021/02/02', minutes: 93, topToggle: 'E-book11' },
    { date: '2007/12/27', minutes: 148, topToggle: 'E-book18' },
    { date: '2015/08/08', minutes: 81, topToggle: 'E-book1' },
    { date: '2021/12/09', minutes: 63, topToggle: 'E-book10' },
    { date: '2001/08/06', minutes: 64, topToggle: 'E-book2' },
    { date: '2000/11/14', minutes: 91, topToggle: 'E-book5' },
    { date: '1998/11/05', minutes: 110, topToggle: 'E-book15' },
    { date: '2008/02/25', minutes: 20, topToggle: 'E-book7' },
    { date: '1995/04/14', minutes: 36, topToggle: 'E-book13' },
  ];

  mapFunction() {
    this.DateArr = this.response.map((item) => item.date);
    console.log('提取 隨機歷次測驗時間 日期', this.DateArr);

    this.minutesArr = this.response.map((item) => item.minutes);
    console.log('提取 隨機歷次測驗時間 分鐘數', this.minutesArr);

    this.topToggleArr = this.response.map((item) => item.topToggle);
    console.log('提取 隨機歷次測驗時間 種類', this.topToggleArr);
  }

  //seriesArr
  seriesArrFunction() {
    this.seriesDataArr = this.minutesArr.map((value) => {
      const innerArr = new Array(this.dataTime).fill(0);
      innerArr[this.minutesArr.indexOf(value)] = value;
      return innerArr;
    });

    console.log('series資料this.seriesDataArr', this.seriesDataArr);

    for (let i = 0; i < this.dataTime; i++) {
      this.seriesArr.push({
        name: this.topToggleArr[i],
        type: 'bar',
        stack: 'x',
        data: this.seriesDataArr[i],
      });
    }
    console.log('series資料', this.seriesArr);
  }

  makeOption() {
    this.options = {
      title: {
        text: '歷次測驗時間',
      },
      legend: {
        data: this.topToggleArr,
      },
      xAxis: {
        type: 'category',
        data: this.DateArr,
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 150,
        interval: 30,
        axisLabel: {
          formatter: '{value} 分鐘',
        },
      },
      series: this.seriesArr,
    };
  }
}
