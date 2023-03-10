import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApiService } from './services/api.service';
import { PlanetComponent } from './components/planet/planet.component';
import { CrawlComponent } from './components/crawl/crawl.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlanetComponent,
    CrawlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
