import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cy-combat',
  templateUrl: './cy-combat.component.html',
  styleUrls: ['./cy-combat.component.scss']
})
export class CyCombatComponent implements OnInit {
  @Input() left: boolean;
  @Input() right: boolean;
  @Input() bottom: boolean;
  @Input() horz: boolean;
  @Input() slasher: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
