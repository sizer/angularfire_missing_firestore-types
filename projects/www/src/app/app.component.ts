import { Component } from '@angular/core';
import { FieldValue } from '@firebase/firestore-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'www';

  constructor() {
    FieldValue.arrayUnion(['hoge'])
  }
}
