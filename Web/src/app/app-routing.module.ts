import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component'
import { LoginBoxedComponent } from './DemoPages/UserPages/login-boxed/login-boxed.component'

import { HomeComponent } from './views/home/home.component'
import { FoodComponent } from './views/food/food.component'
import { DiseaseComponent } from './views/disease/disease.component'
import { ContainersComponent } from './views/containers/containers.component'

const routes: Routes = [
	{ path: '', component: LoginBoxedComponent },

	{
		path: 'home',
		component: BaseLayoutComponent,
		children: [
			{ path: 'kois', component: HomeComponent, data: { extraParameter: 'dashboardsMenu' } },
			{ path: 'diseases', component: DiseaseComponent, data: { extraParameter: 'diseaseMenu' } },
			{ path: 'food', component: FoodComponent, data: { extraParameter: 'foodMenu' } },
			{ path: 'containers', component: ContainersComponent, data: { extraParameter: 'containersMenu' } },
		],
	},
	{ path: '**', redirectTo: '' },
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
