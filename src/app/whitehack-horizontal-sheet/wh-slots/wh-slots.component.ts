import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wh-slots',
  templateUrl: './wh-slots.component.html',
  styleUrls: ['./wh-slots.component.scss']
})
export class WhSlotsComponent implements OnInit {
  @Input() jobName: string;
  slots = [
    {
      class: 'deft',
      slots: [1, 2, 3, 4]
    },
    {
      class: 'strong',
      slots: [1, 2, 3, 4],
      // 'special combat actions': [
      //   '&emsp;<strong>BULWARK.</strong> Spend a full action to protect an adjacent character by absorbing all attacks until their next turn. Each enemy saves against this effect.',
      //   '&emsp;<strong>BULLRUSH.</strong> After a hit, push an opponent backwards ten feet and move into the space formerly occupied by the opponent. The target saves. Target’s movement can trigger free attacks from someone else.',
      //   '&emsp;<strong>CLAMBER.</strong> When fighting big opponents, roll DEX to cling and climb and gain double combat advantage while hanging on. New DEX rolls may be required.',
      //   '&emsp;<strong>BERZERK.</strong> Work up a battle frenzy (1 round of concentration) for +2 AV and damage, but also −3 AC. Other slotted abilities are blocked. After combat, save or attack closest target.',
      //   '&emsp;<strong>COMMAND.</strong> Tactically bestow a +4 AV bonus on an ally, once per battle for a single attack made right away or later in that fight. This requires a related small verbal action.',
      //   '&emsp;<strong>RALLY.</strong> Take a small verbal action and encourage friends within a 15 feet radius to give +1 AV and +1 ST, or invert this ability for −1 AV and ST to enemies.',
      //   '&emsp;<strong>FLURRY.</strong> Forsake move and make a one-handed melee attack and a one-handed ranged attack in the same round with suitable weapons.',
      //   '&emsp;<strong>PARRY.</strong> Parry and wait instead of attacking to get +2 AC. Gain double combat advantage in the next round against an enemy they have parried. Parrying again will gain triple combat advantage. If damaged while parrying, save or lose the effect.',
        // '&emsp;<strong>Spray.</strong> With a full auto weapon, you can make a regular area atttack. Your attack counts against all involved ACs, dealing base dmg. to all that you hit. If you wnat to exclude someone, a success must exceed that person\'s AC by at least 4 or you hit them anyways.',
      // ]
    },
    {
      class: 'wise',
      slots: [1, 2, 3, 4, 5]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getObjSansClass(className: string, objArray: any) {
    const objTable = {...objArray.find(obj => obj.class === className)};
    delete objTable.class;

    return objTable;
  }

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

}
