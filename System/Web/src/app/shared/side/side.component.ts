import { Component, OnInit } from '@angular/core'
import { SideBarNav } from './Sidebar'

@Component({
	selector: 'side',
	templateUrl: './side.component.html',
	styleUrls: ['./side.component.scss'],
})
export class SideComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	navs = SideBarNav || []
}
