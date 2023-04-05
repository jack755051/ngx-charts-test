import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { historyTestGradeResponse } from 'src/app/interface/echarts';

@Component({
  selector: 'app-history-test-grade',
  templateUrl: './history-test-grade.component.html',
  styleUrls: ['./history-test-grade.component.css'],
})
export class HistoryTestGradeComponent implements OnInit {
  options: EChartsOption = {};

  seriesArr: any[] = [];
  topToggleArr: string[] = [];
  dateArr: string[] = [];
  myGrade: number[] = [];
  averageGrade: number[] = [];
  GradeArr: number[][] = [];

  constructor() {}
  ngOnInit(): void {
    //製作所有map函式
    this.mapFunction();
    this.seriesArrFunction();
    //將所有資料帶入series
    this.makeOption();
  }

  //response
  response: historyTestGradeResponse[] = [
    { averageGrade: 21, Grade: 18, date: '2021/01/08' },
    { averageGrade: 30, Grade: 50, date: '2005/03/20' },
    { averageGrade: 31, Grade: 75, date: '2007/01/25' },
    { averageGrade: 14, Grade: 36, date: '2013/04/26' },
    { averageGrade: 94, Grade: 73, date: '1997/04/23' },
    { averageGrade: 12, Grade: 92, date: '2019/12/02' },
    { averageGrade: 51, Grade: 71, date: '2007/01/21' },
    { averageGrade: 12, Grade: 60, date: '2016/02/10' },
    { averageGrade: 15, Grade: 90, date: '2019/05/10' },
    { averageGrade: 95, Grade: 42, date: '1994/05/22' },
  ];

  mapFunction() {
    this.dateArr = this.response.map((item) => item.date);
    this.myGrade = this.response.map((item) => item.Grade);
    this.topToggleArr = ['我的成績', '平均分數'];

    this.averageGrade = this.response.map((item) => item.averageGrade);
  }

  seriesArrFunction() {
    this.GradeArr.push(this.myGrade, this.averageGrade);

    for (let i = 0; i < this.GradeArr.length; i++) {
      this.seriesArr.push({
        name: this.topToggleArr[i],
        type: 'line',
        data: this.GradeArr[i],
        // markLine: {},
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
        },
      });
    }

    console.log('series資料', this.seriesArr);
  }

  makeOption() {
    this.options = {
      title: {
        text: '歷次測驗成績',
      },
      legend: {
        data: this.topToggleArr,
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: this.dateArr,
      },
      yAxis: {
        min: 0,
        max: 100,
        interval: 10,
        axisLabel: {
          formatter: '{value} 分',
        },
      },
      series: this.seriesArr,
    };
  }
}
