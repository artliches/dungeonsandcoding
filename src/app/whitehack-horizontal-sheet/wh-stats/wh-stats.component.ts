import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wh-stats',
  templateUrl: './wh-stats.component.html',
  styleUrls: ['./wh-stats.component.scss']
})
export class WhStatsComponent implements OnInit {
  @Input() jobName: string;

  constructor() { }

  ngOnInit(): void {
  }

  stats = [
    {
      statName: 'hit points',
      description: ['instant death at -10HP'],
      strongDesc: ['+1 HP. CON 13+', '+1 HP. CON 16+']
    },
    {
      statName: 'attack value',
      description: ['roll at (crit) or under'],
      strongDesc: ['+1 AV. STR 13+', '+1 dmg. STR 16+']
    },
    {
      statName: 'armor class',
      description: ['how hard you are to hit']
    },
    {
      statName: 'saving throw',
      description: ['survive a bad situation'],
      strongDesc: ['+1 poison & death', '+4 special melee attacks'],
      wiseDesc: ['+2 magick & mind']
    },
    {
      statName: 'initiative',
      description: ['+1 init. DEX 13+', '+2 init. DEX 16+'],
    }
  ];

}
