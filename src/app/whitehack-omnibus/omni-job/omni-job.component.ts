import { KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-omni-job',
  templateUrl: './omni-job.component.html',
  styleUrls: ['./omni-job.component.scss']
})
export class OmniJobComponent {
  @Input() jobTitle: string;
  @Input() horz: string;

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
    },
    {
      class: 'brave',
      comeback: `
        <div>
        Each time a Brave loses an auction, fails a task roll (not attack) or a save, she gains a "comeback die"-a d6. This can be added to any trait, ST, or AV, or to replace a dmg die. If more than one comeback die is used, only the best counts. If a roll fails despite comeback die, those die are lost and the roll generates no new die.
        </div>
      `,

      no: `
      <div>
      Once/session, the Brave can say "no", denying an enemy a successful attack, miracle, or fear effect directed at them. This turns the Referee\'s roll into a failure, or nullifies a power of one of her monsters. The Brave must explain how it happens, and how she resists the enemy.
      </div>
      `,

      'stat increases': `
      The Brave may raise or lower attributes at even
levels. They also roll twice for HP at levels 1–3, and the player picks the best roll.
      `,

      'aura of bravery': `
      Very perceptive people
and creatures will always sense their courageous quality.
      `,

      'equipment restriction': `Can use any weapon, but armor heavier than
      cloth incurs a −2 attribute penalty on all task rolls.`
    },
    {
      class: 'fortunate',
      influence: `
      <div>
      Once/session, may use their good fortune
      in a major way (hiring a ship, audience with a queen, performing the will of a god, etc.)
      </div>
      <div>
      <em>Cannot not use this power to generate XP from gold, such as buying and selling a ship.</em>
      </div>
      `,

      'defining standing': `
      Use your defining standing (special tattoos, training, physical traits, etc) as noted in the <strong>Identity</strong> section as a group booster.
      <div>At Referee\'s discretion, your standing makes allied factions more helpful/enemies more vengeful, vocation is beneficial regardless of attribute used, and species gives benefit or drawbacks regardless of attribute used.</div>
      `,

      retainers: `
        <div>
          Loyal unless mischevious by nature or mistreated, they do their best to carry out their master\'s wishes. They are played by the Referee, but a player may switch into a retainer\'s role at-will.
        </div>
        <p></p>
        <div>
          The Fortunate may give XP earned from gold to raise their HD, following the same XP curve as their master.
        </div>
      `,

      'signature object':
      `
      Get a single
signature object at creation. At the Referee\’s discretion it may be of
special material, superior quality, or even magick, but the
only obligatory special ability is <strong>plot immunity</strong>: It can
never be lost, destroyed or be made irretrievable by the
Referee unless the player wishes it to happen.
      `
    }
  ];
  constructor() { }

  getObjSansClass(className: string, objArray: any) {
    const objTable = {...objArray.find(obj => obj.class === className)};
    delete objTable.class;

    return objTable;
  }

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

  getJobTitle(): string {
    return this.jobTitle === 'void' ? 'you' : this.jobTitle;
  }


}
