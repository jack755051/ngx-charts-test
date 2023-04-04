import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Top5LineChartComponent } from './components/top5-line-chart/top5-line-chart.component';
import { HistoryTestTimeComponent } from './components/history-test-time/history-test-time.component';
import { Top5StatisticsComponent } from './components/top5-statistics/top5-statistics.component';

const routes: Routes = [
  { path: 'top5LineChart', component: Top5LineChartComponent },
  { path: 'historyTestTime', component: HistoryTestTimeComponent },
  { path: 'top5Statisics', component: Top5StatisticsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
