import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee 1.0';
  panelOpenState = false;
  clientHeight: number;

  constructor() {
    this.clientHeight = window.innerHeight; 
 }
}

