import Swal from 'sweetalert2'

export function Fire(title: any, text: any, type: any, callback: Function) {
	Swal.fire({
		title: title,
		text: text,
		icon: type,
		showCancelButton: true,
		confirmButtonText: 'Yes',
		cancelButtonText: 'Cancel',
	}).then((result) => {
		if (result.value) {
			return callback()
		}
	})
}

export function Alert(title: any, text: any, type: any) {
	Swal.fire(title, text, type)
}
