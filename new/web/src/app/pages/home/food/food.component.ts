import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
	selector: 'app-food',
	templateUrl: './food.component.html',
	styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
	constructor(private firestore: AngularFirestore) {}

	foods: any = []

	ngOnInit(): void {
		this.getKois()
	}

	async getKois() {
		this.foods = []
		this.firestore
			.collection('food')
			.get()
			.subscribe((kois) => {
				kois.forEach((koi: any) => {
					this.foods.push(koi.data())
				})
			})
	}
}
