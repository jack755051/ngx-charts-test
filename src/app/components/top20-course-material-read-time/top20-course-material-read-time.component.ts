import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { EchartsService } from '../../service/charts/echarts.service';
import { HistoryTestTimeResponse } from 'src/app/interface/echarts';

@Component({
  selector: 'app-top20-course-material-read-time',
  templateUrl: './top20-course-material-read-time.component.html',
  styleUrls: ['./top20-course-material-read-time.component.css'],
})
export class Top20CourseMaterialReadTimeComponent implements OnInit {
  data: HistoryTestTimeResponse[] = [];
  dataTime: number = 20;
  options: EChartsOption = {};

  DateArr: string[] = [];
  minutesArr: number[] = [];
  topToggleArr: string[] = [];

  seriesArr: any[] = [];
  seriesDataArr: number[][] = [];

  constructor(private echartsService: EchartsService) {}

  ngOnInit(): void {
    this.echartsService.randomHistoryTestTimeResponse(this.dataTime, this.data);

    //將responsemap入個別的array
    this.mapFunction();
    //製作圖表資料
    this.seriesArrFunction();
    //最終匯出圖表結果函式
    this.makeOption();
  }

  //response
  response: HistoryTestTimeResponse[] = [
    {
      date: '2021/01/08',
      minutes: 135,
      topToggle: 'E-book10',
    },
    {
      date: '2005/03/20',
      minutes: 107,
      topToggle: 'E-book4',
    },
    {
      date: '2007/01/25',
      minutes: 9,
      topToggle: 'E-book3',
    },
    {
      date: '2013/04/26',
      minutes: 17,
      topToggle: 'E-book8',
    },
    {
      date: '1997/04/23',
      minutes: 120,
      topToggle: 'E-book15',
    },
    {
      date: '2019/12/02',
      minutes: 117,
      topToggle: 'E-book1',
    },
    {
      date: '2007/01/21',
      minutes: 16,
      topToggle: 'E-book20',
    },
    {
      date: '2016/02/10',
      minutes: 52,
      topToggle: 'E-book12',
    },
    {
      date: '2019/05/10',
      minutes: 58,
      topToggle: 'E-book9',
    },
    {
      date: '1994/05/22',
      minutes: 101,
      topToggle: 'E-book6',
    },
    {
      date: '2010/08/11',
      minutes: 124,
      topToggle: 'E-book18',
    },
    {
      date: '2009/03/24',
      minutes: 111,
      topToggle: 'E-book14',
    },
    {
      date: '2004/09/21',
      minutes: 100,
      topToggle: 'E-book5',
    },
    {
      date: '2021/01/24',
      minutes: 17,
      topToggle: 'E-book7',
    },
    {
      date: '2017/08/03',
      minutes: 75,
      topToggle: 'E-book11',
    },
    {
      date: '1997/11/02',
      minutes: 132,
      topToggle: 'E-book13',
    },
    {
      date: '2010/09/11',
      minutes: 94,
      topToggle: 'E-book17',
    },
    {
      date: '2015/09/03',
      minutes: 54,
      topToggle: 'E-book16',
    },
    {
      date: '2003/07/08',
      minutes: 118,
      topToggle: 'E-book2',
    },
    {
      date: '2009/02/06',
      minutes: 2,
      topToggle: 'E-book19',
    },
  ];

  mapFunction() {
    this.DateArr = this.response.map((item) => item.date);
    console.log('提取 隨機歷次測驗時間 日期', this.DateArr);

    this.minutesArr = this.response.map((item) => item.minutes);
    // console.log('提取 隨機歷次測驗時間 分鐘數', this.minutesArr);

    this.topToggleArr = this.response.map((item) => item.topToggle);
    // console.log('提取 隨機歷次測驗時間 種類', this.topToggleArr);
  }

  seriesArrFunction() {
    for (let i = 0; i < this.minutesArr.length; i++) {
      const row = new Array(this.minutesArr.length).fill(0);
      row[i] = this.minutesArr[i];
      this.seriesDataArr.push(row);
    }

    console.log('series資料this.seriesDataArr', this.seriesDataArr);

    for (let i = 0; i < this.dataTime; i++) {
      this.seriesArr.push({
        name: this.topToggleArr[i],
        type: 'bar',
        stack: 'x',
        data: this.seriesDataArr[i],
      });
    }

    this.seriesArr.push({
      name: 'Temperature',
      type: 'line',
      data: this.minutesArr,
    });

    console.log('series資料', this.seriesArr);
  }

  makeOption() {
    this.options = {
      title: {
        text: '前20筆教材閱讀時間統計',
      },
      legend: {
        data: this.topToggleArr,
      },
      xAxis: {
        type: 'category',
        data: this.topToggleArr,
      },
      yAxis: {
        min: 0,
        max: 150,
        interval: 30,
        axisLabel: {
          formatter: '{value} 分鐘',
        },
      },
      tooltip: {},
      series: this.seriesArr,
      emphasis: {
        focus: 'series',
      },
    };
  }
}
