import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  private selectedToppings: string[] = [];
  public toppings = [
    'Pepperoni',
    'Mushrooms',
    'Onions',
    'Sausage',
    'Bacon',
    'Extra cheese',
    'Black olives',
    'Green peppers',
  ];

  @Output() toppingsChange = new EventEmitter<string[]>();

  public checkValue(event: Event) {
    console.log('called checkValue', event);
    const checkbox: HTMLInputElement | null = event.target as HTMLInputElement;
    if (checkbox) {
      if (checkbox.checked) {
        this.selectedToppings.push(checkbox.value);
      } else {
        const index = this.selectedToppings.indexOf(checkbox.value);
        this.selectedToppings.splice(index, 1);
      }
    }
    console.log('this.selectedToppings', this.selectedToppings);
    this.toppingsChange.emit(this.selectedToppings);
  }
}
