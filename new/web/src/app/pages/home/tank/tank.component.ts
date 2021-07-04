import { AngularFirestore } from '@angular/fire/firestore'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-tank',
	templateUrl: './tank.component.html',
	styleUrls: ['./tank.component.scss'],
})
export class TankComponent implements OnInit {
	constructor(private firestore: AngularFirestore) {}

	tanks: any = []

	ngOnInit(): void {
		this.getKois()
	}

	async getKois() {
		this.tanks = []
		this.firestore
			.collection('tank')
			.get()
			.subscribe((kois) => {
				kois.forEach((koi: any) => {
					this.tanks.push(koi.data())
				})
			})
	}
}
