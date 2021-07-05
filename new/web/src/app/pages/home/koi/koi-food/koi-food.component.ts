import { AngularFirestore } from '@angular/fire/firestore'
import { Component, OnInit } from '@angular/core'
import { DataService } from 'src/app/data.service'
import { Alert } from 'src/app/pages/components/alert/Alert'

@Component({
	selector: 'KoiFood',
	templateUrl: './koi-food.component.html',
	styleUrls: ['./koi-food.component.scss'],
})
export class KoiFoodComponent implements OnInit {
	constructor(private service: DataService, private firestore: AngularFirestore) {}

	type: any = ''

	ngOnInit(): void {
		this.service.getData().subscribe((data) => {
			this.type = data
			this.getFood()
		})
	}

	foods: any = []

	async getFood() {
		this.foods = []
		this.firestore
			.collection('food', (ref) => ref.where('koi', '==', this.type))
			.get()
			.subscribe((kois) => {
				kois.forEach((koi: any) => {
					this.foods.push(koi.data())
				})
			})
	}
}
