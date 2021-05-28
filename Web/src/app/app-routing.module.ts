import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AddComponent } from './pages/home/kois/add/add.component';
import { ViewComponent } from './pages/home/kois/view/view.component';
import { ShowComponent } from './pages/home/kois/show/show.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
