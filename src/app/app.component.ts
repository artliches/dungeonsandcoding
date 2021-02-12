import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  printUVGSheet = false;
  showUVGBlackRules = false;

  printUVG() {
    this.printUVGSheet = true;
    window.print();
  }
}
