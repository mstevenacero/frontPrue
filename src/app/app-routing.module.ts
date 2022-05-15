import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'information', pathMatch: 'full' },

  {
    path: 'user',
    loadChildren: () => import('./moduls/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./moduls/home/home.module').then(m => m.HomeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
