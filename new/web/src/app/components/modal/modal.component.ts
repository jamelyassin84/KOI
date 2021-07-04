import { Component, ContentChild, Input, TemplateRef } from '@angular/core'

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { Subject } from 'rxjs'
import { DataService } from 'src/app/data.service'

@Component({
	selector: 'Modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements ModalComponent {
	closeResult = ''

	@Input() size: any
	@Input() title: String = ''
	@Input() btnSize: String = ''
	@Input() btnTitle: String = ''
	@Input() btnClass: String = ''
	@Input() template: any
	@Input() data: any = null

	constructor(private modalService: NgbModal, private service: DataService) {}

	open(content: any) {
		this.service.setData(this.data)
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: this.size }).result.then(
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

export interface ModalComponent {
	size: any
	title: String
	btnSize: String
	btnTitle: String
	btnClass: String
	template: any
}
