import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-omni-title',
  templateUrl: './omni-title.component.html',
  styleUrls: ['./omni-title.component.scss']
})
export class OmniTitleComponent {

  @Input() title: string;
  @Input() descrip: string;
  constructor() { }

}
