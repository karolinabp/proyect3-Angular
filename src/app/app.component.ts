import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'ExosAngular';

  currentDateTime: Date | undefined;

  /**I decided to write the date in the main component AppComponent, to write the following code once */
  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  private updateDateTime() {
    this.currentDateTime = new Date();
  }

}
