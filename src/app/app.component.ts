import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  printUVGSheet = false;
  showUVGBlackRules = false;
  showWhitehackSheets = false;

  magicObj = [
    {
      left: `<strong>HP</strong>`,
      right: `<strong>Magnitudes</strong>`,
    },
    {
      left: `0`,
      right: `<strong>Zero</strong>, trivial effect, slotted scroll or simple
      effect boosted by a limiting condition.`,
    },
    {
      left: `1`,
      right:     `<strong>Simple</strong>, can be achieved without magick. For
      example: Light, Unlock, Cure/Cause Light
      Wounds, Read Language.`,
    },
    {
      left: `2`,
      right:     `<strong>Standard</strong>, just beyond the possible. For
      example: Force Armor, Breathe Water, Minor Telekinesis, Invisibility.`,
    },
    {
      left: `d6`,
      right:      `<strong>Major</strong>, a major breach of natural law. For
      example: Teleportation, Animate Dead, Locate
      Object/Being, Dispel.`,
    },
    {
      left: `2d6`,
      right:     `<strong>Powerful</strong>, use of raw power. For example:
      Raise Dead, Alter Weather, Stop Time, Petrify,
      Open Portal, Clone Shell.`,
    },
    {
      left: `+`,
      right:     `<strong>Costly</strong>. Peripheral to vocation and/or wording.
      Extra duration, range, effect area, victims,
      damage. No save. Craft item (Cost × 2).
      Adding another charge (Cost × 1). Expensive
      magick type. Crafting a permanent magick
      item (Cost × 2 permanent HP).`,
    },
    {
      left: `-`,
      right:     `<strong>Cheaper</strong>. Very close to vocation and/or wording. Rare/costly ingredients. Bad side effects
      for the Wise. Wise save (fail negates). Boosting
      but addictive drugs. Cheap magick type. Extra
      casting time. Time or place requirements.`
    },
  ]

  energyObj = [
    {left: `<strong>Qu.</strong>`, right: `<strong>Energy Concentration</strong>`},
    {left: '1 ', right: 'Conjuration (summoning)'},
    {left: '2 ', right: 'Evocation (controlling the elements)'},
    {left: '3 ', right: 'Necromancy (healing and damaging)'},
    {left: '4 ', right: 'Abjuration (protecting, banishing)'},
    {left: '5 ', right: 'Illusion (creating illusions)'},
    {left: '6 ', right: 'Divination (getting information)'},
    {left: '7 ', right: 'Transmutation (altering material things)'},
    {left: '8 ', right: 'Enchantment (affecting the mind)'},
    {left: '9+', right: 'Player choice'},
  ];

  numbers = Array(3).fill('');

  equipmentWeight =
    `
    <p>
    The character is allowed ten regular objects, plus five in a
    backpack, sack or similar container. Heavy objects count
    as two, while minor objects count as half. Coins, gems and
    very small things are no-size items—100 of them count as
    one regular object. Use common sense to settle what is
    what. Weapons have regular/heavy/minor designators.
    Armors, unless magickal, count as per AC.
    </p>
    <p>
    For every completed uneven number of regular
    objects exceeding the character’s limit, she moves down a
    category in the Movement Rates table (p. 64). Strength
    can temporarily alleviate the consequences.
    </p>
    `;

  gearObj = [
    {name: `<strong>Gear</strong>`, cost: `<strong>Cost</strong>`},
    {name: `<strong>Gear</strong>`, cost: `<strong>Cost</strong>`},
    {name: `<strong>Gear</strong>`, cost: `<strong>Cost</strong>`},
    {name: `<strong>Gear</strong>`, cost: `<strong>Cost</strong>`},
    {name: `<strong>Gear</strong>`, cost: `<strong>Cost</strong>`},
    {name: `<strong>Gear</strong>`, cost: `<strong>Cost</strong>`},
    {name: 'Backpack', cost: '5', grey: true},
    {name: 'Bandages (5)', cost: '2'},
    {name: 'Boat', cost: '60', grey: true},
    {name: 'Bottle (wine), glass', cost: '1'},
    {name: 'Cart', cost: '50', grey: true},
    {name: 'Case (map or scroll)', cost: '3'},
    {name: 'Checkers (game)', cost: '5'},
    {name: 'Compass', cost: '50', grey: true},
    {name: 'Crowbar', cost: '5'},
    {name: 'Dice', cost: '2', grey: true},
    {name: 'Flint & steel', cost: '5'},
    {name: 'Grappling hook', cost: '5', grey: true},
    {name: 'Hammer & Wooden stakes', cost: '3', grey: true},
    {name: 'Hatchet', cost: '10'},
    {name: 'Holy symbol, wooden', cost: '2', grey: true},
    {name: 'Holy symbol, silver', cost: '25'},
    {name: 'Holy water, small vial', cost: '15', grey: true},
    {name: 'Horse (riding)', cost: '60'},
    {name: 'Horse (battle trained)', cost: '120'},
    {name: 'Laboratory (portable)', cost: '130', grey: true},
    {name: 'Lantern', cost: '10'},
    {name: 'Lock picks', cost: '20', grey: true},
    {name: 'Map', cost: '20'},
    {name: 'Mirror (small steel)', cost: '5', grey: true},
    {name: 'Mule', cost: '20', grey: true},
    {name: 'Oil (lamp), 1 pint', cost: '2'},
    {name: 'Pole, 10ft', cost: '1', grey: true},
    {name: 'Raft', cost: '10'},
    {name: 'Rations, dried (day)', cost: '3', grey: true},
    {name: 'Rations, trail (day)', cost: '1'},
    {name: 'Rope, elven (50 ft)', cost: '70'},
    {name: 'Rope, hemp (50 ft)', cost: '1', grey: true},
    {name: 'Sack', cost: '1'},
    {name: 'Saddle bags', cost: '10', grey: true},
    {name: 'Saddle', cost: '25'},
    {name: 'Scroll, empty', cost: '5', grey: true},
    {name: 'Shovel', cost: '5', grey: true},
    {name: 'Skiing gear', cost: '15'},
    {name: 'Sled', cost: '20', grey: true},
    {name: 'Sleeping bag', cost: '2'},
    {name: 'Snare', cost: '1', grey: true},
    {name: 'Spell book (blank)', cost: '100'},
    {name: 'Spike, iron', cost: '1'},
    {name: 'Tent', cost: '15', grey: true},
    {name: 'Tinderbox', cost: '10'},
    {name: 'Torch (bundle of 6)', cost: '1', grey: true},
    {name: 'Water skin', cost: '3'},
    {name: 'Wolvesbane & Garlic', cost: '10', grey: true},
  ];

  weaponObj = [
    {
      name: `<strong>Weapon</strong>`,
      dmg: `<strong>Damage</strong>`,
      weight: `<strong>Wgt∗</strong>`,
      rng: `<strong>Rng</strong>`,
      rof: `<strong>RoF†</strong>`,
      spe: `<strong>Special</strong>`,
      cost: `<strong>Cost</strong>`
    },
    {
      name: `<strong>Weapon</strong>`,
      dmg: `<strong>Damage</strong>`,
      weight: `<strong>Wgt∗</strong>`,
      rng: `<strong>Rng</strong>`,
      rof: `<strong>RoF†</strong>`,
      spe: `<strong>Special</strong>`,
      cost: `<strong>Cost</strong>`
    },
    {
      name: 'Axe/Sword',
      dmg: '1d6+1',
      weight: 'R',
      rng: '-',
      rof: '-',
      spe: '-',
      cost: '10',
      grey: true
    },
    {
      name: 'Club',
      dmg: '1d6−2',
      weight: 'M',
      rng: '-',
      rof: '-',
      spe: ' Knock-out, Improvised',
      cost: '-'
    },
    {
      name: 'Crossbow',
      dmg: '1d6+1',
      weight: 'H',
      rng: '70',
      rof: '1/2',
      spe: ' Two handed',
      cost: '30'
    },
    {
      name: 'Dagger',
      dmg: '1d6+-2',
      weight: 'M',
      rng: '15',
      rof: '1',
      spe: '-',
      cost: '3',
      grey: true
    },
    {
      name: 'Darts',
      dmg: '1',
      weight: 'N',
      rng: '20',
      rof: '3',
      spe: '-',
      cost: '1',
      grey: true
    },
    {
      name: 'Flail',
      dmg: '1d6',
      weight: 'R',
      rng: '-',
      rof: '-',
      spe: 'Ignore shield AC',
      cost: '8'
    },
    {
      name: 'Gr. sword/axe',
      dmg: '1d6+2',
      weight: 'H',
      rng: '-',
      rof: '-',
      spe: 'Two handed',
      cost: '15'
    },
    {
      name: 'Pole arms',
      dmg: '1d6+1',
      weight: 'H',
      rng: '-',
      rof: '-',
      spe: 'Two handed, Reach§',
      cost: '10',
      grey: true
    },
    {
      name: 'Javelin',
      dmg: '1d6',
      weight: 'M',
      rng: '40',
      rof: '1',
      spe: 'd6−2 damage in melee',
      cost: '2',
      grey: true
    },
    {
      name: 'Longbow',
      dmg: '1d6',
      weight: 'R',
      rng: '70',
      rof: '1',
      spe: 'Two handed',
      cost: '40'
    },
    {
      name: 'Mace',
      dmg: '1d6',
      weight: 'R',
      rng: '-',
      rof: '-',
      spe: '+1 AV vs. metal armor',
      cost: '5'
    },
    {
      name: 'Warhammer',
      dmg: '1d6',
      weight: 'R',
      rng: '-',
      rof: '-',
      spe: '+1 AV vs. metal armor',
      cost: '5',
      grey: true
    },
    {
      name: 'Morning Star',
      dmg: '1d6',
      weight: 'R',
      rng: '-',
      rof: '-',
      spe: 'As above, x3 crit dmg',
      cost: '8',
      grey: true
    },
    {
      name: 'Musket',
      dmg: '1d6+2',
      weight: 'H',
      rng: '30',
      rof: '1/4',
      spe: 'Two handed',
      cost: '150'
    },
    {
      name: 'Pistol',
      dmg: '1d6+1',
      weight: 'R',
      rng: '20',
      rof: '1/3',
      spe: '-',
      cost: '100'
    },
    {
      name: 'Quarterstaff',
      dmg: '1d6-1',
      weight: 'R',
      rng: '-',
      rof: '-',
      spe: 'Two handed, Reach§',
      cost: '1',
      grey: true
    },
    {
      name: 'Scimitar',
      dmg: '1d6',
      weight: 'R',
      rng: '-',
      rof: '-',
      spe: '+1 AV while riding',
      cost: '8',
      grey: true
    },
    {
      name: 'Shortbow',
      dmg: '1d6-1',
      weight: 'R',
      rng: '50',
      rof: '1',
      spe: 'Two handed, Use mounted',
      cost: '25'
    },
    {
      name: 'Shortsword',
      dmg: '1d6-1',
      weight: 'M',
      rng: '-',
      rof: '-',
      spe: '-',
      cost: '8'
    },
    {
      name: 'Sling',
      dmg: '1d6-2',
      weight: 'N',
      rng: '30',
      rof: '1',
      spe: 'Use with regular stones',
      cost: '2',
      grey: true
    },
    {
      name: 'Spear',
      dmg: '1d6',
      weight: 'R',
      rng: '-',
      rof: '-',
      spe: 'Reach§',
      cost: '2',
      grey: true
    },
    {
      name: 'Thr. Knife/Axe',
      dmg: '1d6-2',
      weight: 'M',
      rng: '25',
      rof: '1',
      spe: '-1 AV in melee',
      cost: '2'
    },
    {
      name: 'Unarmed',
      dmg: 'd6-3',
      weight: '-',
      rng: '-',
      rof: '-',
      spe: 'Knock-out, Grapple',
      cost: '-'
    },
  ];

  armorObj = [
    {name: `<strong>Armor</strong>`, ac: `<strong>AC</strong>`, cost: `<strong>Cost</strong>`},
    {name: `<strong>Armor</strong>`, ac: `<strong>AC</strong>`, cost: `<strong>Cost</strong>`},
    {name: 'Helmet'           , ac: 'Special††', cost: '10', grey: true},
    {name: 'Shield'           , ac: '+1', cost: '5'},
    {name: 'Cloth'            , ac: '1', cost: '10'},
    {name: 'Leather'          , ac: '2', cost: '15', grey: true},
    {name: 'Studded leather'  , ac: '3', cost: '20', grey: true},
    {name: 'Chainmail'        , ac: '4', cost: '30'},
    {name: 'Splint mail'      , ac: '5', cost: '40'},
    {name: 'Full plate'       , ac: '6', cost: '50', grey: true},
  ];

  printUVG() {
    this.printUVGSheet = true;
    window.print();
  }

  toggleWhitehackSheets() {
    this.showWhitehackSheets = !this.showWhitehackSheets;
  }


}
