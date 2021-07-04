import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireStorage } from '@angular/fire/storage'
import { Alert, Fire } from 'src/app/pages/components/alert/Alert'

@Component({
	selector: 'AddKoi',
	templateUrl: './add-koi.component.html',
	styleUrls: ['./add-koi.component.scss'],
})
export class AddKoiComponent implements OnInit {
	constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {}
	ngOnInit(): void {}

	koi: any = {
		type: '',
		color: '',
		pattern: '',
		images: [],
	}

	trigger() {
		document.getElementById('file-input')?.click()
	}

	srcs: any = []
	readURL(event: any) {
		if (event.target.files && event.target.files[0]) {
			this.srcs = []
			Object.keys(event.target.files).forEach((i: any) => {
				this.koi.images.push(event.target.files[i])
				const reader = new FileReader()
				reader.readAsDataURL(event.target.files[i])
				reader.onload = (event) => {
					this.srcs.push((<FileReader>event.target).result)
				}
			})
		}
	}

	add() {
		for (let key in this.koi) {
			if (this.koi[key] === '') {
				Alert('Error', 'One or more fields should not be empty', 'error')
				return
			}
		}
		Fire(`Are you sure you want to ${this.koi.type}`, 'this will add koi', 'info', async () => {
			for (let index = 0; index <= this.koi.images.length - 1; index++) {
				let file = await this.storage.ref('koi/' + this.koi.images[index].name).put(this.koi.images[index])
				let photo_url = await file.ref.getDownloadURL()
				this.koi.images.splice(index, 1, photo_url)
			}
			this.koi['created_at'] = Date.now()
			this.firestore
				.collection('kois')
				.add(this.koi)
				.then(() => {
					Alert('Success Saved', `${this.koi.type} has been added`, 'success')
				})
				.catch(() => {
					Alert('Error', 'Something went wrong. Try Again', 'error')
				})
		})
	}
}
