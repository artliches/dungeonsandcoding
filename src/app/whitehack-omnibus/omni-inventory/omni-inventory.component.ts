import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-omni-inventory',
  templateUrl: './omni-inventory.component.html',
  styleUrls: ['./omni-inventory.component.scss']
})
export class OmniInventoryComponent implements OnInit {
  @Input() horz: boolean;
  inventory = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  extraInventory = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  constructor() { }

  ngOnInit(): void {
  }

}
