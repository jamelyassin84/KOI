import { AngularFirestore } from '@angular/fire/firestore'
import { Component, OnInit } from '@angular/core'
import { Alert, Fire } from '../../components/alert/Alert'

@Component({
	selector: 'app-koi',
	templateUrl: './koi.component.html',
	styleUrls: ['./koi.component.scss'],
})
export class KoiComponent implements OnInit {
	constructor(private firestore: AngularFirestore) {}

	kois: any = []
	koiIDs: any = []

	ngOnInit(): void {
		this.getKois()
	}

	async getKois() {
		this.kois = []
		this.koiIDs = []
		this.firestore
			.collection('kois')
			.get()
			.subscribe((kois) => {
				kois.forEach((koi: any) => {
					this.kois.push(koi.data())
					this.koiIDs.push(koi.id)
				})
			})
	}

	deleteData(id: string, name: string) {
		Fire('Are you sure you want to remove this koi', `${name} will be removed from list`, 'info', () => {
			this.firestore
				.collection('kois')
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
