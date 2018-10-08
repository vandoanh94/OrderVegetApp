import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
		apiKey: "AIzaSyBJ8mzzk1ujuH_No0yWu3BqrJNkc7aO1bI",
		authDomain: "ordervegetapp.firebaseapp.com",
		databaseURL: "https://ordervegetapp.firebaseio.com",
		projectId: "ordervegetapp",
		storageBucket: "ordervegetapp.appspot.com",
		messagingSenderId: "92761907523"
	}
};
