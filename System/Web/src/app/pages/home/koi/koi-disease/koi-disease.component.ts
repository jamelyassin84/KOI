import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { DataService } from 'src/app/data.service'

@Component({
	selector: 'KoiTank',
	templateUrl: './koi-disease.component.html',
	styleUrls: ['./koi-disease.component.scss'],
})
export class KoiDiseaseComponent implements OnInit {
	constructor(private service: DataService, private firestore: AngularFirestore) {}

	type: any = ''

	ngOnInit(): void {
		this.service.getData().subscribe((data) => {
			this.type = data
			this.getdisease()
		})
	}

	diseases: any = []

	async getdisease() {
		this.diseases = []
		this.firestore
			.collection('disease', (ref) => ref.where('koi', '==', this.type))
			.get()
			.subscribe((kois) => {
				kois.forEach((koi: any) => {
					this.diseases.push(koi.data())
				})
			})
	}
}
