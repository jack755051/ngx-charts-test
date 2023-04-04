import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { top5LineChartTimeResponse } from 'src/app/interface/echarts';
import { EchartsService } from 'src/app/service/charts/echarts.service';

@Component({
  selector: 'app-top5-line-chart',
  templateUrl: './top5-line-chart.component.html',
  styleUrls: ['./top5-line-chart.component.css'],
})
export class Top5LineChartComponent implements OnInit {
  dataTime: number = 5;

  options: EChartsOption = {};
  timesArr: number[] = [];

  topToggleArr: string[] = [];
  dataArr: number[][] = [];

  legned: string[] = []

  seriesArr: any[] = [];
  seriesDataArr: number[][] = [];

  //response
  response: top5LineChartTimeResponse[] = [
    { topToggle: 'E-book3', data: [44, 8, 13, 1, 7, 47, 8, 7, 27, 12, 0, 42] },
    {
      topToggle: 'E-book11',
      data: [15, 5, 46, 35, 2, 43, 7, 23, 32, 18, 8, 21],
    },
    {
      topToggle: 'E-book18',
      data: [16, 29, 3, 16, 46, 17, 28, 45, 8, 28, 9, 43],
    },
    {
      topToggle: 'E-book1',
      data: [19, 25, 46, 27, 22, 19, 29, 13, 38, 10, 44, 30],
    },
    {
      topToggle: 'E-book10',
      data: [14, 23, 27, 44, 3, 46, 30, 46, 34, 18, 3, 46],
    },
  ];

  //X axis data - month
  xaxis: string[] = [
    'Jun',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  constructor(private echartsService: EchartsService) { }

  ngOnInit() {
    this.mapFunction();
    this.seriesArrFunction();
    //將所有資料帶入series
    this.makeOption();
    //隨機製作方陣
    this.echartsService.generateRandomArray(5, 12);
  }

  mapFunction() {
    this.topToggleArr = this.response.map((item) => item.topToggle);
    console.log('提取 隨機歷次測驗時間 種類', this.topToggleArr);

    this.legned = this.topToggleArr

    this.dataArr = this.response.map((item) => item.data);
    console.log('提取 隨機歷次測驗時間 方陣', this.dataArr);
  }

  //seriesArr
  seriesArrFunction() {
    // this.seriesDataArr = this.timesArr.map((value) => {
    //   const innerArr = new Array(10).fill(0);
    //   innerArr[this.timesArr.indexOf(value)] = value;
    //   return innerArr;
    // });

    console.log('series資料this.seriesDataArr', this.seriesDataArr);

    for (let i = 0; i < this.dataTime; i++) {
      this.seriesArr.push({
        name: this.topToggleArr[i],
        type: 'bar',
        // stack: 'x',
        data: this.dataArr[i],
      });
    }
    console.log('series資料', this.seriesArr);
  }

  makeOption() {
    this.options = {
      title: {
        text: '前5教材閱讀次數統計',
      },
      legend: {
        // data: this.topToggleArr,
        data: this.legned
      },
      tooltip: {
        trigger: 'axis',
      },
      showBackground: true,
      emphasis: {
        focus: 'series',
      },
      xAxis: {
        type: 'category',
        data: this.xaxis,
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 50,
        interval: 10,
        axisLabel: {
          formatter: '{value} 次',
        },
      },
      series: this.seriesArr,
    };
  }
}
