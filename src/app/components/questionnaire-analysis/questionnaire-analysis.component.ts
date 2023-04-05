import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import {
  questionnaireAnalysisResponse,
  questionnaireAnalysisngFor,
} from 'src/app/interface/echarts';

@Component({
  selector: 'app-questionnaire-analysis',
  templateUrl: './questionnaire-analysis.component.html',
  styleUrls: ['./questionnaire-analysis.component.css'],
})
export class QuestionnaireAnalysisComponent implements OnInit {
  options: EChartsOption = {};

  constructor() {}
  ngOnInit(): void {
    this.mapFunction();
    this.seriesArrFunction();
    //將所有資料帶入series
    this.makeOption();
  }

  seriesDataArr: any[] = [];
  seriesArr: any[] = [];
  nameArr: string[] = [];
  rateArr: number[] = [];
  valueArr: number[] = [];

  ngForArr: questionnaireAnalysisngFor[] = [];

  sum: number = 0;
  //response
  response: questionnaireAnalysisResponse[] = [
    { value: 6, name: 'A選項' },
    { value: 18, name: 'B選項' },
    { value: 32, name: 'C選項' },
    { value: 24, name: 'D選項' },
  ];

  sumCount(numberArr: number[]) {
    const sum = numberArr.reduce((total, current) => total + current, 0);

    this.sum = sum;
    console.log('總數', this.sum);
  }

  mapFunction() {
    this.seriesDataArr = this.response.map((item) => item);
    console.log(this.seriesDataArr);
    this.nameArr = this.response.map((item) => item.name);
    this.valueArr = this.response.map((item) => item.value);

    this.sumCount(this.valueArr);

    this.ngForArr = this.response.map((item) => ({
      ...item,
      rate: ((item.value / this.sum) * 100).toFixed(1) + '%',
    }));
    console.log('this.ngForArr', this.ngForArr);
  }

  seriesArrFunction() {
    this.seriesArr.push({
      type: 'pie',
      data: this.seriesDataArr,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    });
    console.log(this.seriesArr);
  }

  makeOption() {
    this.options = {
      // title: {
      //   text: '問卷分析圓餅圖',
      // },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: this.seriesArr,
    };
  }
}
