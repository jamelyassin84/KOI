import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Alert, Fire } from '../../components/alert/Alert'

@Component({
	selector: 'app-food',
	templateUrl: './food.component.html',
	styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
	constructor(private firestore: AngularFirestore) {}

	foods: any = []
	IDs: any = []

	ngOnInit(): void {
		this.getKois()
	}

	async getKois() {
		this.foods = []
		this.IDs = []
		this.firestore
			.collection('food')
			.get()
			.subscribe((kois) => {
				kois.forEach((koi: any) => {
					this.foods.push(koi.data())
					this.IDs.push(koi.id)
				})
			})
	}

	deleteData(id: string, name: string) {
		Fire('Are you sure you want to remove this data?', `${name} will be removed from list`, 'info', () => {
			this.firestore
				.collection('food')
				.doc(id)
				.delete()
				.then(() => {
					Alert('Thank You', 'Thanks for your time admin', 'success')
					this.getKois()
				})
				.catch(() => {
					Alert('Error', 'Something went wrong. Try Again', 'error')
				})
		})
	}

	editable: any = {}
	edit(id: any) {
		this.editable[id] == true ? (this.editable[id] = false) : (this.editable[id] = true)
	}

	update(data: any, id: any) {
		this.firestore
			.collection('food')
			.doc(id)
			.update(data)
			.then(() => {
				Alert('Data has been updated', 'Koi data has been successfully updated', 'success')
				this.getKois()
			})
			.catch(() => {
				Alert('Error', 'Something went wrong. Try again', 'error')
			})
	}
}
