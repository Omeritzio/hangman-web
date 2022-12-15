import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYm5VDUEz5WHYQ8HQzjGon_kLVUItdFZ8",
  authDomain: "hangman-game-2891b.firebaseapp.com",
  projectId: "hangman-game-2891b",
  storageBucket: "hangman-game-2891b.appspot.com",
  messagingSenderId: "521603116980",
  appId: "1:521603116980:web:9c9a976562c6b13f580ce1",
  measurementId: "G-YDVEXS31CC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  title = 'hangman';
  isButtonVisible = true;


}
