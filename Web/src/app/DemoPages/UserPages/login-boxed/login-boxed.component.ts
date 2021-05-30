import { Component, OnInit } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import firebase from 'firebase/app'
@Component({
	selector: 'app-login-boxed',
	templateUrl: './login-boxed.component.html',
	styles: [],
})
export class LoginBoxedComponent implements OnInit {
	constructor(private auth: AngularFireAuth, private router: Router) {}

	ngOnInit() {}

	email
	password

	login() {
		if (this.email === undefined || this.password === undefined) {
			alert('One or more fields should not be empty')
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
					alert(error[key])
					return
				}
			})
	}
}
