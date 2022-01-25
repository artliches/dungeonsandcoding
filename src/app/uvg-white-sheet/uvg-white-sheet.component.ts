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
      description: 'rely on superior technique and skill'
    },
    {
      className: 'strong',
      description: 'rely on combat skills and physique'
    },
    {
      className: 'wise',
      description: 'perform miracles through arcane negotiations'
    }
  ];

  nonCoreStats = [
    {
      statName: 'hit points',
      description: 'how much punishment your meat-suit can take',
      strongDesc: '+1 HP. CON 13+ / +1 HP. CON 16+'
    },
    {
      statName: 'armor class',
      description: 'how hard you are to hit'
    },
    {
      statName: 'saving throw',
      description: 'how trained or lucky you are in bad situations',
      strongDesc: '+1 poison & death / +4 special melee attacks',
      wiseDesc: '+2 magick & mind'
    },
    {
      statName: 'attack value',
      description: 'how well you can hurt others',
      strongDesc: '+1 AV. STR 13+ / +1 dmg. STR 16+'
    },
  ];

  stats = [
    {
      statName: 'strength',
      descrption: 'physical power'
    },
    {
      statName: 'constitution',
      descrption: 'physical resilience and  well-being'
    },
    {
      statName: 'dexterity',
      descrption: '+1 init. DEX 13+ / +2 init. DEX 16+'
    },
    {
      statName: 'karisma',
      descrption: 'divine favor, fortune, and luck'
    },
    {
      statName: 'wisdom',
      descrption: 'mental resilience and well-being'
    },
    {
      statName: 'intelligence',
      descrption: '+1 lang. INT 13+ / +2 lang. INT 16+'
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
      keyword: `
        <div>
        &emsp;&emsp;If you deliver a killing blow in a memorable battle, you may loot a keyword from the enemy, to be called upon for tricks, special attack, or abilities in one of the following <em>categories</em>, decided at the time of looting:
          <ul>
            <li>
              <strong>Memorable enemy.</strong> If the keyword relates to an action, may take +2 for one round to either AC, AV, ST, HP, an attribute, damage, healing, MV, quality or initiative.
            </li>

            <li>
              <strong>Substance.</strong> You extract a rare and potent substance (poison, acid, something flammable, etc.). Must be placed in inventory and counts toward encumbrance.
            </li>

            <li>
              <strong>Supernatural.</strong> The killing transfers a non-violent supernatural ability that the monster has.
            </li>
          </ul>
          &emsp;&emsp;Can only hold one at a time, getting a new one when a new monster is killed. Can be used # of times equal to level.
        </div>`,

        'killing momentum':
        `<div>
        &emsp;&emsp;Putting an enemy at zero or negative HP allows an additional attack against an adjacent enemy.
        </div>`,

        'free attacks':
        `<div>
        Can make a number of free attacks equal to level
        </div>`,
    },
    {
      class: 'wise',
      miracles: `
        <div>
        &emsp;&emsp;Each slot has two miracles permenantly tied to it (except for the level 1 slot), with only one active at a time. Switching which one is active takes a day of preparation.
        </div>
        <div>
        &emsp;&emsp;Miracles are given descriptive or evocative <strong>wording</strong>. The wording, vocation, and desired effect are used to triangulate the <strong>cost</strong> in HP: the player states what the miracle should do and the Referee suggests the costs. Costs may be lowered with drawbacks and ingredients, or increased if the effect is further from the wording, the vocation, and what can be acheived without magick.
        </div>
        <div>
        &emsp;&emsp;If your level exceeds the HP cost, can slot scrolls with a successful trained Intelligence roll, and can reproduce its static effect once per day at <strong>zero</strong> HP cost.
        </div>
      `,

      'supernatural regeneration': `&emsp;&emsp;Recover from HP loss at twice the normal rate, but
      cannot receive healing from other means.`,

      'magick item': `&emsp;&emsp;At level 3, a magick item may be slotted in second slot instead of miracles. This creates a floating HP bonus equal to level, which is removed if the item is broken.`,

      'equipment restriction': `&emsp;&emsp;Shields or armor heavier than leather incurs +2 HP to costs before doubling. Two-handed weapons receive -2 AV unless slotted.`
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
        '&emsp;<strong>Bulwark.</strong> Spend a full action to protect an adjacent character by absorbing all attacks until their next turn. Each enemy saves against this effect.',
        '&emsp;<strong>Bullrush.</strong> After a hit, push an opponent backwards ten feet and move into the space formerly occupied by the opponent. The target saves. Target’s movement can trigger free attacks from someone else.',
        '&emsp;<strong>Clamber.</strong> When fighting big opponents, roll DEX to cling and climb and gain double combat advantage while hanging on. New DEX rolls may be required.',
        '&emsp;<strong>Berzerk.</strong> Work up a battle frenzy (1 round of concentration) for +2 AV and damage, but also −3 AC. Other slotted abilities are blocked. After combat, save or attack closest target.',
        '&emsp;<strong>Command.</strong> Tactically bestow a +4 AV bonus on an ally, once per battle for a single attack made right away or later in that fight. This requires a related small verbal action.',
        '&emsp;<strong>Rally.</strong> Take a small verbal action and encourage friends within a 15 feet radius to give +1 AV and +1 ST, or invert this ability for −1 AV and ST to enemies.',
        '&emsp;<strong>Flurry.</strong> Forsake move and make a one-handed melee attack and a one-handed ranged attack in the same round with suitable weapons.',
        '&emsp;<strong>Outplay.</strong> Parry and wait instead of attacking to get +2 AC. Gain double combat advantage in the next round against an enemy they have parried. Parrying again will gain triple combat advantage. If damaged while parrying, save or lose the effect.',
        // '&emsp;<strong>Spray.</strong> With a full auto weapon, you can make a regular area atttack. Your attack counts against all involved ACs, dealing base dmg. to all that you hit. If you wnat to exclude someone, a success must exceed that person\'s AC by at least 4 or you hit them anyways.',
      ]
    },
    {
      class: 'wise',
      slots: [1, 2, 3, 4, 5]
    }
  ];

  inventory = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  extraInventory = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  specialCombatOptions = [
    `<strong>Charge.</strong> Move 15 feet in a straight line and attack with combat advantage. -3 AC until your next turn.`,
    `<strong>Defense.</strong> Take -2 AV or -2 dmg., or -1 AV <em>and</em> -1 dmg., to get +2 AC`,
    `<strong>Offense.</strong> Take -2 AC and get +1 AV and +1 dmg. Lasts until your next turn.`,
    `<strong>Grapple.</strong> Make unarmed attack, but forsake dmg. to hold enemy. The enemy must win a contest against your STR to break free.`,
    `<strong>Protect.</strong> Make a <em>task roll</em> against your AV. On success, next attack on an adjacent friend targets you. Enemy may save to avoid.`,
    `<strong>Trick.</strong> Attack and exchange your damage roll for one of the following, each negated by enemy save:
      <ul>
        <li>
          <strong>Push</strong> the enemy 5 ft. away, and follow if you like.
        </li>
        <li>
          <strong>Feint</strong> to make 2 attacks with combat adv. next round.
        </li>
        <li>
          <strong>Disarm</strong> the enemy to drop their weapon 2d6 ft. away.
        </li>
        <li>
          <strong>Trip</strong> the enemy so that they lose their move in the next round, giving you combat adv.
        </li>
      </ul>`,
    `<strong>Press.</strong> Take penalty to your AV when using a special combat option, give your enemy the same penalty. If you fail or if the save succeeds, the enemy gets combat adv. against you in the next round.`,
    `<strong>Persist.</strong> Once/combat, make a CON task roll or save against incoming damage. On success, reduce dmg. by d6. On fail and/or dmg. takes you into negative HP, knocked out for 2 rounds.`
  ];

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
