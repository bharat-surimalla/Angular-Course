import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCnbANujwkMP4dXtOCdQRjAtkT7M_7ZFe8',
      authDomain: 'udemy-http-1aa12.firebaseapp.com',
    });
  }
}
