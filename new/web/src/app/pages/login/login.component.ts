import { Component, OnInit } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import firebase from 'firebase'
import { Alert } from '../components/alert/Alert'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	constructor(private auth: AngularFireAuth, private router: Router) {}

	ngOnInit(): void {}

	email: any = ''
	password: any = ''

	login() {
		if (this.email === '' || this.password === '') {
			Alert('Error', 'One or more fields should not be empty', 'error')
			return
		}
		firebase
			.auth()
			.signInWithEmailAndPassword(this.email, this.password)
			.then(() => {
				this.router.navigate(['/home/kois'])
			})
			.catch((error) => {
				for (let key in error) {
					Alert('Error', error[key], 'error')
					return
				}
			})
	}
}
