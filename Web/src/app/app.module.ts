import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { AddComponent } from './pages/home/kois/add/add.component';
import { ViewComponent } from './pages/home/kois/view/view.component';
import { ShowComponent } from './pages/home/kois/show/show.component';
import { NavbarComponent } from './components/navs/navbar/navbar.component';
import { SidebarComponent } from './components/navs/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddComponent,
    ViewComponent,
    ShowComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
