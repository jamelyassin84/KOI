import { AngularFirestore } from '@angular/fire/firestore'
import { Component, OnInit } from '@angular/core'
import { Alert, Fire } from 'src/app/pages/components/alert/Alert'

@Component({
	selector: 'Tank',
	templateUrl: './add-tank.component.html',
	styleUrls: ['./add-tank.component.scss'],
})
export class AddTankComponent implements OnInit {
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

	tank: any = {
		koi: '',
		with: '',
		same: '',
	}

	add() {
		console.log(this.tank)
		for (let key in this.tank) {
			if (this.tank[key] === '') {
				Alert('Error', 'One or more fields should not be empty', 'error')
				return
			}
		}
		Fire(`Are you sure you want to add tank for ${this.tank.koi}?`, '', 'info', async () => {
			this.firestore
				.collection('tank')
				.add(this.tank)
				.then(() => {
					Alert('Successfully Saved', `tank for ${this.tank.koi} has been added`, 'success')
				})
				.catch(() => {
					Alert('Error', 'Something went wrong. Try Again', 'error')
				})
		})
	}

	changeKoi(event: any) {
		this.tank.koi = event.target.value
	}
}
