import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  printUVGSheet = false;
  fatigue = ['grumpy', 'disadvan.', '1/2 speed', 'half-life', 'coma', 'death?'];
  level = [
    '0xp',
    '300xp',
    '750xp',
    '1500xp',
    '3000xp',
    '6000xp',
    '12500xp',
    '25000xp',
    '50000xp',
    '99999xp',
  ];
  heroics = new Array(9);
  inventory = new Array(20);

  printUVG() {
    this.printUVGSheet = true;
    window.print();
  }
}
