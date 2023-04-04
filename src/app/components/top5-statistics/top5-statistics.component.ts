import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { EchartsService } from 'src/app/service/charts/echarts.service';

@Component({
  selector: 'app-top5-statistics',
  templateUrl: './top5-statistics.component.html',
  styleUrls: ['./top5-statistics.component.css']
})
export class Top5StatisticsComponent implements OnInit {
  options: EChartsOption = {}
  //response
  response: any[] = [
    { name: '分類1', data: 23 },
    { name: '分類2', data: 7 },
    { name: '分類3', data: 44 },
    { name: '分類4', data: 10 },
    { name: '分類5', data: 26 }
  ]

  indicator: any[] = []
  legned: string[] = []
  dataArr: number[] = [];
  //push into finals series
  seriesArr: any
  radarData: any[] = [];

  constructor() {

  }

  ngOnInit(): void {
    //將responsemap入個別的array
    this.mapFunction()
    //製作圖表資料
    this.seriesArrFunction()
    //最終匯出圖表結果函式
    this.makeOption()
  }

  mapFunction() {
    this.dataArr = this.response.map((item) => item.data);
    console.log('提取', this.dataArr);

    this.indicator = this.response.map((item) => item.name);
    console.log('提取2', this.indicator);

  }

  seriesArrFunction() {
    this.radarData.push({
      value: this.dataArr,
      name: 'Allocated Budget'
    })
    console.log('adarData', this.radarData);




    this.seriesArr.push({
      name: 'Budget vs spending',
      type: 'radar',
      data: this.radarData
    })

    console.log('series資料', this.seriesArr);
  }

  makeOption() {
    this.options = {
      title: {
        text: '前5分類閱讀統計'
      },
      legend: {
        data: this.legned
      },
      radar: {
        indicator: this.indicator
      },
      series: this.seriesArr
    }
  }
}
