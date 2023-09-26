import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPowerBiModule } from 'ngx-powerbi';
import { HttpClientModule } from '@angular/common/http';
import { IframeComponent } from './components/iframe/iframe.component';
import { EmbededComponent } from './components/embeded/embeded.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    IframeComponent,
    EmbededComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    NgxPowerBiModule,HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
