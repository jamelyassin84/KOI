import { AngularFirestore } from '@angular/fire/firestore'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-koi',
	templateUrl: './koi.component.html',
	styleUrls: ['./koi.component.scss'],
})
export class KoiComponent implements OnInit {
	constructor(private firestore: AngularFirestore) {}

	kois: any = []

	ngOnInit(): void {
		this.getKois()
	}

	async getKois() {
		this.kois = []
		this.firestore
			.collection('kois')
			.get()
			.subscribe((kois) => {
				kois.forEach((koi: any) => {
					this.kois.push(koi.data())
				})
			})
	}
}
