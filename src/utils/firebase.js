// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA7AZ-_GzNwiBJik6RQLciM8AypbHDVNC4",
	authDomain: "netflixgpt-dd153.firebaseapp.com",
	projectId: "netflixgpt-dd153",
	storageBucket: "netflixgpt-dd153.appspot.com",
	messagingSenderId: "371831152232",
	appId: "1:371831152232:web:7ca6257e77c576f7ab65dd",
	measurementId: "G-4WC5ZFL3RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth()
