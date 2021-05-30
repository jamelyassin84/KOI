import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-food',
	templateUrl: './food.component.html',
	styleUrls: ['./food.component.sass', './food.scss'],
})
export class FoodComponent implements OnInit {
	constructor(private modalService: NgbModal) {}

	ngOnInit() {}

	closeResult: string

	open(content) {
		this.modalService
			.open(content, {
				size: 'lg',
			})
			.result.then(
				(result) => {
					this.closeResult = `Closed with: ${result}`
				},
				(reason) => {
					this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
				}
			)
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC'
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop'
		} else {
			return `with: ${reason}`
		}
	}
}
