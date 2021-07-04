import { AngularFirestore } from '@angular/fire/firestore'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-disease',
	templateUrl: './disease.component.html',
	styleUrls: ['./disease.component.scss'],
})
export class DiseaseComponent implements OnInit {
	constructor(private firestore: AngularFirestore) {}

	diseases: any = []

	ngOnInit(): void {
		this.getKois()
	}

	async getKois() {
		this.diseases = []
		this.firestore
			.collection('disease')
			.get()
			.subscribe((kois) => {
				kois.forEach((koi: any) => {
					this.diseases.push(koi.data())
				})
			})
	}
}
