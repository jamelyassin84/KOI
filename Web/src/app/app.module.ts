import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { KoisComponent } from './Pages/home/kois/kois.component';
import { KoisAddComponent } from './Pages/home/add/kois-add/kois-add.component';
import { FoodAddComponent } from './Pages/home/add/food-add/food-add.component';
import { DiseaseAddComponent } from './Pages/home/add/disease-add/disease-add.component';
import { ContainerAddComponent } from './Pages/home/add/container-add/container-add.component';
import { KoisViewComponent } from './Pages/home/views/kois-view/kois-view.component';
import { KoiViewComponent } from './Pages/home/views/koi-view/koi-view.component';
import { FoodViewComponent } from './Pages/home/views/food-view/food-view.component';
import { DiseaseViewComponent } from './Pages/home/views/disease-view/disease-view.component';
import { ContainerViewComponent } from './Pages/home/views/container-view/container-view.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KoisComponent,
    KoisAddComponent,
    FoodAddComponent,
    DiseaseAddComponent,
    ContainerAddComponent,
    KoisViewComponent,
    KoiViewComponent,
    FoodViewComponent,
    DiseaseViewComponent,
    ContainerViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
