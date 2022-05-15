import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomesqueletonComponent } from './homesqueleton/homesqueleton.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes =[
  {
    path: '', children: [
      { path: 'home', component: HomesqueletonComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }



]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  
    
  ]
})
export class RoutingHomeModule { }
