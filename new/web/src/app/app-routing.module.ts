import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from './pages/login/login.component'
import { HomeComponent } from './pages/home/home.component'
import { KoiComponent } from './pages/home/koi/koi.component'
import { FoodComponent } from './pages/home/food/food.component'
import { DiseaseComponent } from './pages/home/disease/disease.component'
import { TankComponent } from './pages/home/tank/tank.component'

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{ path: 'kois', component: KoiComponent },
			{ path: 'foods', component: FoodComponent },
			{ path: 'diseases', component: DiseaseComponent },
			{ path: 'tanks', component: TankComponent },
		],
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
