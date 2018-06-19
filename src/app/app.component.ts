import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedfeature = 'recipe';

ngOnInit() {
firebase.initializeApp({
  apiKey: 'AIzaSyDxHwLWNep3Sdr4egrpHJca23HKQUOEP28',
  authDomain: 'ng-recipe-book-1ef04.firebaseapp.com'
});
}

  onNavigate(feature: string) {
this.loadedfeature = feature;
  }
}
