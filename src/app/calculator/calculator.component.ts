import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  number1 = 0;
  number2 = 0;
  selectedOperation = '';
  result = 0;
  /* This array is used to store the history data  */
  history: Array<any> = [];


  calculate() {
    switch (this.selectedOperation) {
      case 'add':
        this.result = this.number1 + this.number2;
        break;
      case 'subtract':
        this.result = this.number1 - this.number2;
        break;
      case 'multiply':
        this.result = this.number1 * this.number2;
        break;
      case 'divide':
        this.result = this.number1 / this.number2;
        break;
      default:
        break;
    }

    /*I create an object that I'm going to add to the array */
    const entry = {
      time: new Date(),
      operation: this.selectedOperation,
      result: this.result
    };

    this.history.push(entry);
  }

  /*This method is used to delete the selected operation */
  removeEntry(entry:any) {
    const index = this.history.indexOf(entry);
    if (index !== -1) {
      this.history.splice(index, 1);
    }
  }
}
