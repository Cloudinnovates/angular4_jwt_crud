import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

import { AuthGuard } from '../core/auth-guard.service';

const routes: Routes = [
  { 
    path: '', 
    component: PagesComponent,
    canActivate: [AuthGuard],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
