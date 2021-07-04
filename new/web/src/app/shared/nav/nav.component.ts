import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Alert, Fire } from 'src/app/pages/components/alert/Alert'

@Component({
	selector: 'Navbar',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}

	logout() {
		Fire('Are you sure you want to log-out', 'this will log you out', 'info', () => {
			localStorage.clear()
			this.router.navigate([''])
			Alert('Thank You', 'Thanks for your time admin', 'success')
		})
	}
}
