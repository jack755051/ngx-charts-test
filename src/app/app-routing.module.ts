import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Top5LineChartComponent } from './components/top5-line-chart/top5-line-chart.component';
import { HistoryTestTimeComponent } from './components/history-test-time/history-test-time.component';

const routes: Routes = [
  { path: 'top5LineChart', component: Top5LineChartComponent },
  { path: 'historyTestTime', component: HistoryTestTimeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
