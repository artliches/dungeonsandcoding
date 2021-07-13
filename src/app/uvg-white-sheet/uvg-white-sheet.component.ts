import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uvg-white-sheet',
  templateUrl: './uvg-white-sheet.component.html',
  styleUrls: ['./uvg-white-sheet.component.scss']
})
export class UvgWhiteSheetComponent implements OnInit {
  // tslint:disable: max-line-length


  constructor() { }

  classDescrptions = [
    {
      className: 'deft',
      description: 'deft characters rely on superior technique and skill'
    },
    {
      className: 'strong',
      description: 'strong characters rely on combat skills and physique'
    },
    {
      className: 'wise',
      description: 'wise characters perform miracles through arcane negotiations with powerful forces in their environment'
    }
  ];

  nonCoreStats = [
    {
      statName: 'hit points',
      description: 'how much punishment your meat-suit can take'
    },
    {
      statName: 'armor class',
      description: 'how hard you are to hit'
    },
    {
      statName: 'saving throw',
      description: 'how trained or lucky you are in bad situations'
    },
    {
      statName: 'attack value',
      description: 'how well you can hurt others'
    },
  ];

  stats = [
    {
      statName: 'strength',
      descrption: 'physical power'
    },
    {
      statName: 'endurance',
      descrption: 'physical resilience and  well-being'
    },
    {
      statName: 'agility',
      descrption: '+1 init. AGL 13+ / +2 init. AGL 16+'
    },
    {
      statName: 'karisma',
      descrption: 'divine favor, fortune, and luck'
    },
    {
      statName: 'aura',
      descrption: 'mental resilience and well-being'
    },
    {
      statName: 'thought',
      descrption: '+1 lang. THO 13+ / +2 lang. THO 16+'
    },
  ];

  advancement = [
    {
      class: 'deft',
      lvl: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      xp: [0, 1500, 3000, 6000, 12000, 24000, 48000, 96000, 192000, 384000],
      hd: ['1', '2', '2+1', '3', '3+1', '4', '4+1', '5', '5+1', '6'],
      av: [10, 11, 11, 12, 12, 13, 13, 14, 14, 15],
      st: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      sl: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4],
      gr: [2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
      ra: ['-', 1, 1, 2, 2, 3, 3, 4, 4, 5],
    },
    {
      class: 'strong',
      lvl: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      xp: [0, 2000, 4000, 8000, 16000, 32000, 64000, 128000, 256000, 512000],
      hd: ['1+1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      av: [11, 11, 12, 13, 13, 14, 15, 15, 16, 17],
      st: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      sl: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4],
      gr: [2, 2, 2, 3, 3, 3, 4, 4, 4, 5],
      ra: ['-', 1, 1, 2, 2, 3, 3, 4, 4, 5],

    },
    {
      class: 'wise',
      lvl: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      xp: [0, 2500, 5000, 10000, 20000, 40000, 80000, 160000, 320000, 640000],
      hd: ['1+1', '2', '2+1', '3', '4', '4+1', '5', '6', '6+1', '7'],
      av: [10, 11, 11, 11, 12, 12, 12, 13, 13, 13],
      st: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      sl: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
      gr: [2, 2, 2, 3, 3, 3, 4, 4, 4, 5],
      ra: ['-', 1, 1, 2, 2, 3, 3, 4, 4, 5],
    }
  ];

  classFeatures = [
    {
      class: 'deft',
      vocation:
        `<div>
        &emsp;&emsp;When properly equipped, and when rolling for a task or an attack that is in line with the vocation, the deft always use a positive double roll. For this reason, deft characters don\'t mark the the vocation group next to a specific attribute.
        </div>
        <div>
        &emsp;&emsp;Additionaly, when they try to do damage from an advantageous position in combat, deft characters may switch this double positive roll benefit for double damage, if their vocation is relevant to the situation.
        </div>
        <div>
        &emsp;&emsp;A combat oriented vocation gets +1 to damage and AC from an off-hand weapon, while non-combat oriented vocations may save to turn a successful task roll into a critical success, once per session.
        </div>`,
      attunements:
        `<div>
        &emsp; &emsp;Must be a teacher, an item, a pet, or a place. Each slot has two attunements, with only one active at a time. Switching takes a day spent in practice.
        </div>
        <div>
        &emsp; &emsp;Once per day, active attunements can auto succeed on a hard task, while allowing a regular roll on a <em>nigh</em> impossible task.
        </div>
        `,
      'equipment restrictions':
      `<div>
      &emsp; &emsp;Shields and armor heavier than studded leather blocks slots and double damage options. Non-attuned two handed weapons recieve -2 AV.
      </div>
      `
    },
    {
      class: 'strong',
      vocation: 'When properly equipped, and when rolling for a task or an attack that is in line withthe vocation, they always use a positive double roll. For this reason, deft characters don\'t mark the the vocation group next to a specific attribute. Additionaly, when they try to do damage from an advantageous position in combat, deft characters may switch this double positive roll benefit for double damage, if their vocation is relevant to the situation. A combat oriented vocation gets +1 to damage and AC from an off-hand weapon, while non-combat oriented vocations may save to turn a successful task roll into a critical success, once per session.',
    },
    {
      class: 'wise',
      vocation: 'When properly equipped, and when rolling for a task or an attack that is in line withthe vocation, they always use a positive double roll. For this reason, deft characters don\'t mark the the vocation group next to a specific attribute. Additionaly, when they try to do damage from an advantageous position in combat, deft characters may switch this double positive roll benefit for double damage, if their vocation is relevant to the situation. A combat oriented vocation gets +1 to damage and AC from an off-hand weapon, while non-combat oriented vocations may save to turn a successful task roll into a critical success, once per session.',
    }
  ];

  classSpecials = [
    {
      class: 'deft',
      slots: [1, 2, 3, 4]
    },
    {
      class: 'strong',
      'special combat actions': [
        'Spend a full action to protect an adjacent character by absorbing all attacks until their next turn. Each enemy saves agains this effect.',
        'After a hit, push an opponent backwards ten feet and move into the space formerly occupied by the opponent. The target saves. Target’s movement can trigger free attacks from someone else.',
        'When fighting big opponents, roll AGL to cling and climb and gain double combat advantage while hanging on. New AGL rolls may be required.',
        'Work up a battle frenzy (1 round of concentration) for +2 AV and damage, but also −3 AC. Other slotted abilities are blocked. After combat, save or attack closest target.',
        'Tactically bestow a +4 AV bonus on an ally, once per battle for a single attack made right away or later in that fight. This requires a related small verbal action.',
        'Take a small verbal action and encourage friends within a 15 feet radius to give +1 AV and +1 ST, or invert this ability for −1 AV and ST to enemies.',
        'Forsake move and make a one-handed melee attack and a one-handed ranged attack in the same round with suitable weapons.',
        'Parry and wait instead of attacking to get +2 AC. Gain double combat advantage in the next round against an enemy they have parried. Parrying again will gain triple combat advantage. If damaged while parrying, save or lose the effect.',
      ]
    },
    {
      class: 'wise',
      slots: [1, 2, 3, 4, 5]
    }
  ];

  inventory = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  extraInventory = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  ngOnInit() {
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
