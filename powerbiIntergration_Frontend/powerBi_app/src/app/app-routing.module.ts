import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmbededComponent } from './components/embeded/embeded.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IframeComponent } from './components/iframe/iframe.component';

const routes: Routes = [{
  path: '', component:HomeComponent },

 { path: 'embeded', component:EmbededComponent },
 { path: 'iframe', component:IframeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
