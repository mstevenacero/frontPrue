import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomesqueletonComponent } from './homesqueleton/homesqueleton.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RoutingHomeModule } from './routing-home.module';




@NgModule({
  declarations: [

    HomesqueletonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RoutingHomeModule
   
  ]
})
export class HomeModule { }
