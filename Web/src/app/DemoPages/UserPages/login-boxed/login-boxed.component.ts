import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Alert, Fire } from 'src/app/Alerts/Alert'
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
	selector: 'app-login-boxed',
	templateUrl: './login-boxed.component.html',
	styles: [],
})
export class LoginBoxedComponent implements OnInit {
	constructor(private router: Router, private auth: AngularFireAuth) {}

	ngOnInit() {}

	email: ''
	password: ''

	login() {
		if (this.email === undefined || this.password === undefined) {
			Alert('Validation Error', 'One or more fields should not be empty', 'error')
			return
		}
		this.auth
			.signInWithEmailAndPassword(this.email, this.password)
			.then(() => {
				Alert('Welcome Back!', 'CM Magbanua', 'success')
			})
			.catch((error) => {
				for (let key in error) {
					Alert('Authentication Failed', error[key], 'error')
				}
			})
	}
}
