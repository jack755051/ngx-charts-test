import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { top5WrongrateResponse } from 'src/app/interface/echarts';

@Component({
  selector: 'app-top5-wrongrate',
  templateUrl: './top5-wrongrate.component.html',
  styleUrls: ['./top5-wrongrate.component.css'],
})
export class Top5WrongrateComponent implements OnInit {
  options: EChartsOption = {};
  wrongRateArr: number[] = [];
  nameArr: string[] = [];
  seriesArr: any[] = [];

  constructor() {}
  ngOnInit(): void {
    this.mapFunction();
    this.seriesArrFunction();
    //將所有資料帶入series
    this.makeOption();
  }

  //response
  response: top5WrongrateResponse[] = [
    { name: 6, data: 79 },
    { name: 12, data: 90 },
    { name: 5, data: 86 },
    { name: 23, data: 69 },
    { name: 38, data: 65 },
  ];

  mapFunction() {
    this.wrongRateArr = this.response.map((item) => item.data);
    this.nameArr = this.response.map((item) => '第' + item.name + '題');
  }

  seriesArrFunction() {
    this.seriesArr.push({
      name: this.nameArr,
      type: 'bar',
      data: this.wrongRateArr,
    });

    console.log('series資料', this.seriesArr);
  }

  makeOption() {
    this.options = {
      title: {
        text: '錯誤率最高5題',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
        },
      },
      xAxis: {
        type: 'category',
        data: this.nameArr,
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
          formatter: '{value}%',
        },
      },
      series: this.seriesArr,
    };
  }
}
