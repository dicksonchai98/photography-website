// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBvVnSc-7LT4wQOkiTryaFC5ti3TF9ocSc',
  authDomain: 'photography-website-yvo8p.firebaseapp.com',
  projectId: 'photography-website-yvo8p',
  storageBucket: 'photography-website-yvo8p.appspot.com',
  messagingSenderId: '577139682009',
  appId: '1:577139682009:web:f9b352860e92ddbea0ecc8'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
