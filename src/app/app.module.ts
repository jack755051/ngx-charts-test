import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { Top5LineChartComponent } from './components/top5-line-chart/top5-line-chart.component';
import { HistoryTestTimeComponent } from './components/history-test-time/history-test-time.component';
import { Top5StatisticsComponent } from './components/top5-statistics/top5-statistics.component';

@NgModule({
  declarations: [AppComponent, Top5LineChartComponent, HistoryTestTimeComponent, Top5StatisticsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
