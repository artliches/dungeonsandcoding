import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cy-equip',
  templateUrl: './cy-equip.component.html',
  styleUrls: ['./cy-equip.component.scss']
})
export class CyEquipComponent implements OnInit {
  @Input() horz: boolean;
  @Input() gearModification: string;
  gearSetup = `
    <div>/// You begin with <strong>2d6×10¤</strong> on an <em>anonymous credstick</em>, some <strong
    >cheap clothes</strong>, and a <strong>Retinal Com Device (RCD)</strong> and roll on page 39.</div>
  `;
  gearLines = Array(22).fill('');
  constructor() { }

  ngOnInit(): void {
    this.gearSetup = this.gearSetup + this.gearModification;
  }

}
