import { AngularFirestore } from '@angular/fire/firestore'
import { Component, OnInit } from '@angular/core'
import { Alert, Fire } from 'src/app/pages/components/alert/Alert'

@Component({
	selector: 'Disease',
	templateUrl: './add-disease.component.html',
	styleUrls: ['./add-disease.component.scss'],
})
export class AddDiseaseComponent implements OnInit {
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

	disease: any = {
		koi: '',
		disease: '',
		cure: '',
	}

	add() {
		console.log(this.disease)
		for (let key in this.disease) {
			if (this.disease[key] === '') {
				Alert('Error', 'One or more fields should not be empty', 'error')
				return
			}
		}
		Fire(`Are you sure you want to add ${this.disease.disease}?`, '', 'info', async () => {
			this.firestore
				.collection('disease')
				.add(this.disease)
				.then(() => {
					Alert('Successfully Saved', `${this.disease.disease} has been added`, 'success')
				})
				.catch(() => {
					Alert('Error', 'Something went wrong. Try Again', 'error')
				})
		})
	}

	changeKoi(event: any) {
		this.disease.koi = event.target.value
	}
}
