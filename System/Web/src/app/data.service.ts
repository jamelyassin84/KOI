import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class DataService {
	constructor() {}

	private data = new Subject<any>()

	setData(data: any) {
		setTimeout(() => {
			if (data !== null) {
				this.data.next(data)
			}
		}, 200)
	}

	getData() {
		return this.data.asObservable()
	}
}
