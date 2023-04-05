export interface Echarts {}

export interface HistoryTestTimeResponse {
  date: any;
  minutes: number;
  topToggle: string;
}

export interface top5LineChartTimeResponse {
  topToggle: string;
  data: number[];
}
// 前5分類閱讀統計
// export interface top5StatisticsResponse {
//   name: string;
//   data: number;
// }
export interface top5StatisticsResponseItem {
  name: string;
  data: number;
}

export interface top5StatisticsResponse {
  item: top5StatisticsResponseItem[];
  topToggle: string;
}

export interface questionnaireAnalysisResponse {
  value: number;
  name: string;
}

export interface questionnaireAnalysisngFor {
  value: number;
  name: string;
  rate: string;
}

export interface historyTestGradeResponse {
  averageGrade: number;
  Grade: number;
  date: string;
}

export interface top5WrongrateResponse {
  name: number;
  data: number;
}
