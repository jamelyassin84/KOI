import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { DataService } from 'src/app/data.service'

@Component({
	selector: 'TankOfKoi',
	templateUrl: './koi-tank.component.html',
	styleUrls: ['./koi-tank.component.scss'],
})
export class KoiTankComponent implements OnInit {
	constructor(private service: DataService, private firestore: AngularFirestore) {}

	type: any = ''

	ngOnInit(): void {
		this.service.getData().subscribe((data) => {
			this.type = data
			this.gettank()
		})
	}

	tanks: any = []

	async gettank() {
		this.tanks = []
		this.firestore
			.collection('tank', (ref) => ref.where('koi', '==', this.type))
			.get()
			.subscribe((kois) => {
				kois.forEach((koi: any) => {
					this.tanks.push(koi.data())
				})
			})
	}
}
