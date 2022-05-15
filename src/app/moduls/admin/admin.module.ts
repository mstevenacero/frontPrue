import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud/crud.component';
import { TableUserComponent } from './table-user/table-user.component';
import { SqueletonComponent } from './squeleton/squeleton.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutinAdminModule } from './routin-admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    CrudComponent,
    TableUserComponent,
    SqueletonComponent,
    PostComponent 
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RoutinAdminModule,
    FormsModule,
    AngularFileUploaderModule 
   
  ]
})
export class AdminModule { }
