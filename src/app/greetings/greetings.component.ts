import { Component } from '@angular/core';


@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent {
  name = '';
  selectedFont = 'Arial';
  fontSize = 16;
  selectedAlignment = 'left';
  value = '';


  getAlignment() {
    return this.selectedAlignment;
  }
}
