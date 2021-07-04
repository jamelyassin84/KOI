import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { LoginComponent } from './pages/login/login.component'
import { HomeComponent } from './pages/home/home.component'
import { KoiComponent } from './pages/home/koi/koi.component'
import { FoodComponent } from './pages/home/food/food.component'
import { DiseaseComponent } from './pages/home/disease/disease.component'
import { TankComponent } from './pages/home/tank/tank.component'
import { NavComponent } from './shared/nav/nav.component'
import { SideComponent } from './shared/side/side.component'
import { FootComponent } from './shared/foot/foot.component'

import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { AddKoiComponent } from './pages/home/koi/add-koi/add-koi.component';
import { AddFoodComponent } from './pages/home/food/add-food/add-food.component';
import { AddDiseaseComponent } from './pages/home/disease/add-disease/add-disease.component';
import { AddTankComponent } from './pages/home/tank/add-tank/add-tank.component'

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		KoiComponent,
		FoodComponent,
		DiseaseComponent,
		TankComponent,
		NavComponent,
		SideComponent,
		FootComponent,
  ModalComponent,
  AddKoiComponent,
  AddFoodComponent,
  AddDiseaseComponent,
  AddTankComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireStorageModule,
		FormsModule,
		ReactiveFormsModule,
  NgbModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
