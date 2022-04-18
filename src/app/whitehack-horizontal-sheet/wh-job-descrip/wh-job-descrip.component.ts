import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wh-job-descrip',
  templateUrl: './wh-job-descrip.component.html',
  styleUrls: ['./wh-job-descrip.component.scss']
})
export class WhJobDescripComponent implements OnInit {
  @Input() jobName: string;

  jobDescriptions = [
    {
      class: 'deft',
      vocation:
        `<div>
        When properly equipped, and when rolling for a task or an attack that is in line with the vocation, the deft always use a positive double roll. For this reason, deft characters don\'t mark the the vocation group next to a specific attribute.
        </div>
        <p>
        Additionaly, when they try to do damage from an advantageous position in combat, deft characters may switch this double positive roll benefit for double damage, if their vocation is relevant to the situation.
        </p>
        <div>
        A combat oriented vocation gets +1 to damage and AC from an off-hand weapon, while non-combat oriented vocations may save to turn a successful task roll into a critical success, once per session.
        </div>`,
      attunements:
        `<div>
         Must be a teacher, an item, a pet, or a place. Each slot has two attunements, with only one active at a time. Switching takes a day spent in practice.
        </div>
        <div>
         Once per day, active attunements can auto succeed on a hard task, while allowing a regular roll on a <em>nigh</em> impossible task.
        </div>
        `,
      'equipment restrictions':
      `<div>
       Shields and armor heavier than studded leather blocks slots and double damage options. Non-attuned two handed weapons recieve -2 AV.
      </div>
      `
    },
    {
      class: 'strong',
      keyword: `
        <div>
        If you deliver a killing blow in a memorable battle, you may loot a keyword from the enemy, to be called upon for tricks, special attack, or abilities in one of the following <em>categories</em>, decided at the time of looting:
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
          Can only hold one at a time, getting a new one when a new monster is killed. Can be used # of times equal to level.
        </div>`,

        'killing momentum':
        `<div>
        Putting an enemy at zero or negative HP allows an additional attack against an adjacent enemy.
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
        Each slot has two miracles permenantly tied to it (except for the level 1 slot), with only one active at a time. Switching which one is active takes a day of preparation.
        </div>
        <p>
        Miracles are given descriptive or evocative <strong>wording</strong>. The wording, vocation, and desired effect are used to triangulate the <strong>cost</strong> in HP: the player states what the miracle should do and the Referee suggests the costs. Costs may be lowered with drawbacks and ingredients, or increased if the effect is further from the wording, the vocation, and what can be acheived without magick.
        </p>
        <div>
        If your level exceeds the HP cost, can slot scrolls with a successful trained Intelligence roll, and can reproduce its static effect once per day at <strong>zero</strong> HP cost.
        </div>
      `,

      'supernatural regeneration': `Recover from HP loss at twice the normal rate, but
      cannot receive healing from other means.`,

      'magick item': `At level 3, a magick item may be slotted in second slot instead of miracles. This creates a floating HP bonus equal to level, which is removed if the item is broken.`,

      'equipment restriction': `Shields or armor heavier than leather incurs +2 HP to costs before doubling. Two-handed weapons receive -2 AV unless slotted.`
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
