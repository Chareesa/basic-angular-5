import { Component } from '@angular/core';

//Component Decorator, specify different properties that help define structore of component
@Component({
  selector: 'app-root',
  //where html template is located
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//logic for angular application
export class AppComponent {
  title = 'app';
}
