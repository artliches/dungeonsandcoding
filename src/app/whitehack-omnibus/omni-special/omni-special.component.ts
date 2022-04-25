import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-omni-special',
  templateUrl: './omni-special.component.html',
  styleUrls: ['./omni-special.component.scss']
})
export class OmniSpecialComponent implements OnInit {
  @Input() horz: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
