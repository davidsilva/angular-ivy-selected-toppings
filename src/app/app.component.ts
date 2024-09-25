import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public toppings: string[] = [];
  public requests = '';

  setSelectedToppings(selectedToppings) {
    console.log('called setSelectedToppings', selectedToppings);
    this.toppings = selectedToppings;
  }
}
