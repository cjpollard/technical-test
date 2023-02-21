import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrawlComponent } from './components/crawl/crawl.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent
}, {
  path: 'intro',
  component: CrawlComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
