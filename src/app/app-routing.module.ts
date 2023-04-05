import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Top5LineChartComponent } from './components/top5-line-chart/top5-line-chart.component';
import { HistoryTestTimeComponent } from './components/history-test-time/history-test-time.component';
import { Top5StatisticsComponent } from './components/top5-statistics/top5-statistics.component';
import { Top20CourseMaterialReadTimeComponent } from './components/top20-course-material-read-time/top20-course-material-read-time.component';
import { HistoryTestGradeComponent } from './components/history-test-grade/history-test-grade.component';
import { Top5WrongrateComponent } from './components/top5-wrongrate/top5-wrongrate.component';
import { QuestionnaireAnalysisComponent } from './components/questionnaire-analysis/questionnaire-analysis.component';

const routes: Routes = [
  { path: 'top5LineChart', component: Top5LineChartComponent },
  { path: 'historyTestTime', component: HistoryTestTimeComponent },
  { path: 'top5Statisics', component: Top5StatisticsComponent },
  {
    path: 'top20CourseMaterialReadTime',
    component: Top20CourseMaterialReadTimeComponent,
  },
  { path: 'historyTestGrade', component: HistoryTestGradeComponent },
  { path: 'top5Wrongrate', component: Top5WrongrateComponent },
  { path: 'questionnaireAnalysis', component: QuestionnaireAnalysisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
