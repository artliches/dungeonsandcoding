import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-omni-stats',
  templateUrl: './omni-stats.component.html',
  styleUrls: ['./omni-stats.component.scss']
})
export class OmniStatsComponent {
  @Input() horz: boolean;
  @Input() jobName: string;

  stats = [
    {
      statName: 'hit points',
      description: ['instant death at -10HP'],
      strongDesc: ['<strong>CON 13+</strong>: +1 HP.', '<strong>CON 16+</strong>: +1 HP.']
    },
    {
      statName: 'attack value',
      description: ['roll at (crit) or under'],
      strongDesc: ['<strong>STR 13+</strong>: +1 AV.', '<strong>STR 16+</strong>: +1 dmg.']
    },
    {
      statName: 'armor class',
      description: ['how hard it is to hit you']
    },
    {
      statName: 'saving throw',
      description: ['survive a bad situation'],
      strongDesc: ['+1 poison & death', '+4 special melee attacks'],
      wiseDesc: ['+2 magick & mind']
    },
    {
      statName: 'initiative mod',
      description: [`<strong>DEX 13+</strong>:<div>+1 init. & +5MV</div>`, `<strong>DEX 16+</strong>:<div>+2 init. & +10MV</div>`],
    },
    {
      statName: 'movement',
      description: ['travel distance in feet every 10sec'],
    },
  ];

  constructor() { }

}
