import firebase from 'firebase/app'
import 'firebase/firestore'

export const firebaseConfig = {
	apiKey: 'AIzaSyCa47stVnKLfQ3VqdUaqT4QQpAVNHZgz00',
	authDomain: 'koi-app-bdaff.firebaseapp.com',
	projectId: 'koi-app-bdaff',
	storageBucket: 'koi-app-bdaff.appspot.com',
	messagingSenderId: '784705715598',
	appId: '1:784705715598:web:1d3d6e0e6cfbf128ebb8df',
	measurementId: 'G-HSJ5SKYNSV',
}

export function collection(collection: any) {
	return firebase.firestore().collection(collection)
}

export function auth() {
	return firebase.auth()
}
