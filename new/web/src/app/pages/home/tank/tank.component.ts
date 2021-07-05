import { AngularFirestore } from '@angular/fire/firestore'
import { Component, OnInit } from '@angular/core'
import { Alert, Fire } from '../../components/alert/Alert'

@Component({
	selector: 'app-tank',
	templateUrl: './tank.component.html',
	styleUrls: ['./tank.component.scss'],
})
export class TankComponent implements OnInit {
	constructor(private firestore: AngularFirestore) {}

	tanks: any = []
	IDs: any = []

	ngOnInit(): void {
		this.getKois()
	}

	async getKois() {
		this.tanks = []
		this.IDs = []
		this.firestore
			.collection('tank')
			.get()
			.subscribe((kois) => {
				kois.forEach((koi: any) => {
					this.tanks.push(koi.data())
					this.IDs.push(koi.id)
				})
			})
	}

	deleteData(id: string, name: string) {
		Fire('Are you sure you want to remove this data?', `${name} will be removed from list`, 'info', () => {
			this.firestore
				.collection('tank')
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
}
