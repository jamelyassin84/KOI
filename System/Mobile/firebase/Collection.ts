import firebase from 'firebase'

export function collection(collection: any) {
	return firebase.firestore().collection(collection)
}
