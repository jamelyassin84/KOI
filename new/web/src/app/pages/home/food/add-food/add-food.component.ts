import { AngularFirestore } from '@angular/fire/firestore'
import { Component, OnInit } from '@angular/core'
import { Alert, Fire } from 'src/app/pages/components/alert/Alert'

@Component({
	selector: 'Food',
	templateUrl: './add-food.component.html',
	styleUrls: ['./add-food.component.scss'],
})
export class AddFoodComponent implements OnInit {
	constructor(private firestore: AngularFirestore) {}

	ngOnInit(): void {
		this.getKois()
	}

	kois: any = []
	async getKois() {
		this.kois = []
		this.firestore
			.collection('kois')
			.get()
			.subscribe((kois: any) => {
				kois.forEach((koi: any) => {
					this.kois.push(koi.data())
				})
			})
	}

	food: any = {
		koi: '',
		food: '',
		description: '',
		effects: '',
	}

	add() {
		console.log(this.food)
		for (let key in this.food) {
			if (this.food[key] === '') {
				Alert('Error', 'One or more fields should not be empty', 'error')
				return
			}
		}
		Fire(`Are you sure you want to add ${this.food.food}?`, '', 'info', async () => {
			this.firestore
				.collection('food')
				.add(this.food)
				.then(() => {
					Alert('Successfully Saved', `${this.food.food} has been added`, 'success')
				})
				.catch(() => {
					Alert('Error', 'Something went wrong. Try Again', 'error')
				})
		})
	}

	changeKoi(event: any) {
		this.food.koi = event.target.value
	}
}
