import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  counter: number = 0;

  updateCounter(newValue: number) {
    this.counter = newValue;
  }

}
