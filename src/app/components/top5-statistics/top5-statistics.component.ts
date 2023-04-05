import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { top5StatisticsResponse } from 'src/app/interface/echarts';

@Component({
  selector: 'app-top5-statistics',
  templateUrl: './top5-statistics.component.html',
  styleUrls: ['./top5-statistics.component.css'],
})
export class Top5StatisticsComponent implements OnInit {
  options: EChartsOption = {};
  //response
  response: top5StatisticsResponse = {
    item: [
      { name: '分類1', data: 23 },
      { name: '分類2', data: 7 },
      { name: '分類3', data: 44 },
      { name: '分類4', data: 10 },
      { name: '分類5', data: 26 },
    ],
    topToggle: 'Allocated Budget',
  };

  // radar data array
  indicator: any[] = [];
  // top legend array
  legend: string[] = [];

  dataArr: number[] = [];
  //push into finals series
  seriesArr: any[] = [];
  radarData: any[] = [];

  constructor() {}

  ngOnInit(): void {
    //將responsemap入個別的array
    this.mapFunction();
    //製作圖表資料
    this.seriesArrFunction();
    //最終匯出圖表結果函式
    this.makeOption();
  }

  mapFunction() {
    this.legend.push(this.response.topToggle);
    console.log('mapResult', this.legend);

    this.dataArr = this.response.item.map((item) => item.data);
    console.log('mapResult', this.dataArr);

    this.indicator = this.response.item.map((item) => ({
      name: item.name,
      max: 50,
    }));
    console.log('mapResult', this.indicator);
  }

  seriesArrFunction() {
    this.radarData.push({
      value: this.dataArr,
      name: 'Allocated Budget',
    });
    console.log('adarData', this.radarData);

    this.seriesArr.push({
      name: 'Budget vs spending',
      type: 'radar',
      data: this.radarData,
      areaStyle: {},
    });

    console.log('series資料', this.seriesArr);
  }

  makeOption() {
    this.options = {
      title: {
        text: '前5分類閱讀統計',
      },
      legend: {
        data: this.legend,
      },
      areaStyle: {},
      radar: {
        indicator: this.indicator,
      },
      series: this.seriesArr,
    };
  }
}
