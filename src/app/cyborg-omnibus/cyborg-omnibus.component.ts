import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyborg-omnibus',
  templateUrl: './cyborg-omnibus.component.html',
  styleUrls: ['./cyborg-omnibus.component.scss']
})
export class CyborgOmnibusComponent implements OnInit {
  selectedPunk = 'all';
  styles = [
    'overcast',
    'void',
    'mork',
    'virtual-they-them',
    'terminal',
    'rcd-malfunction',
    'shunned',
    'burned',
    'corp-killer',
    'gearhead',
    'cyberslasher',
    'forsaken',
  ];
  selectedLayout = 'vert';
  layouts = ['vert', 'horz'];
  selectedStyle = 'overcast';
  displayedPunks = [];
  punks = [
    {
      name: 'shunned nanomancer',
      page: 'pg. 42',
      flavor: `<strong>It\'s inside you</strong>. Infesting your brain, warping your flesh. People are afraid of you now. They\'re afraid of the power that poisons you. <strong>You\'re scared too.</strong>`,
      extraInfo: 'for when you got infected (pg. 42), how it has warped you (pg. 43)',
      statChanges: {
        'hit points': 'toughness + d4',
        presence: '[weird] roll 3d6+2',
        toughness: '[ill] roll 3d6-2',
      },
      glitches: 'd2',
      'starting gear': `
        <div>/// Start with <strong>one random Nano power (pg.74)</strong>. Any starting app or cybertech is replaced with a random Nano.</div>
        <div>/// Roll d6 for <strong>weapon</strong> (pg. 58) and d2 for <strong>armor</strong> (pg. 60).</div>
      `
    },
    {
      name: 'burned hacker',
      page: 'pg. 44',
      flavor: `You were one of the sharpest deckers in Cy. No one could use tech or warp the world with an App like you could. You don\'t know what went wrong. <strong>You messed up.</strong> Maybe you were tricked; maybe you got sloppy. You glimpsed a <strong>terrible truth</strong>, and now you\'re burnt. No collective, no fallback, <strong>nothing</strong>.`,
      extraInfo: 'for the app you built, the terrible truth your discovered (pg. 45)',
      statChanges: {
        'hit points': 'toughness + d6',
        knowledge: '[cutting edge] roll 3d6+2',
        strength: '[unhealthy living] roll 3d6-1',
        toughness: '[unhealthy living] roll 3d6-1'
      },
      glitches: 'd2',
      'starting gear': `
        <div>/// Start with a <strong>cyberdeck</strong> with Knowledge+4 slots and <strong>a random App (pg.70)</strong>. Any rolled Nano or cybertech is replaced with a new random App.</div>
        <div>/// Roll d8 for <strong>weapon</strong> (pg. 58) and d2 for <strong>armor</strong> (pg. 60).</div>
      `
    },
    {
      name: 'dischared corp killer',
      page: 'pg. 46',
      flavor: `<strong>A good soldier in bad company</strong>, always fighting someone else\'s war in the name of greed. Capitalism crushed your enthusiasm quickly enough, and you were discharged without severance.`,
      specialTraits: `Your autofire tests are always <strong>-1DR</strong>. The Corp wants you <strong>DEAD</strong>.`,
      extraInfo: 'for where you were deployed (pg. 46)',
      statChanges: {
        'hit points': 'toughness + d8',
        knowledge: '[emotionally scarred] roll 3d6-1',
        presence: '[emotionally scarred] roll 3d6-1',
        toughness: '[tough as nails] roll 3d6+2'
      },
      glitches: 'd2',
      'starting gear': `
        <div> /// You took something from your employer when you left the force (pg.46)</div>
        <div>/// Roll d4+1 for <strong>armor</strong> (pg. 60).</div>
      `
    },
    {
      name: 'orphaned gearhead',
      page: 'pg. 48',
      flavor: `<strong>People are unreliable.</strong> Socially. Physically. Emotionally. Weakbodies and weaker wills. They are worn down, unfixable. Instead, you have mastered emotionless steel and loyal code. You can fix, drive, and pilot any machine. Machines, you can <strong>trust</strong>.`,
      specialTraits: `You test <strong>Knowledge DR10</strong> when you try to repair a piece of tech or to pilot a vehicle, drone or other machine.`,
      extraInfo: 'for what you pilot, how people have failed you (pg. 49)',
      statChanges: {
        'hit points': 'toughness + d8',
        knowledge: '[engineer] roll 3d6+2',
        presence: '[prefers machines] roll 3d6-2'
      },
      glitches: 'd4',
      'starting gear': `
        <div>/// Roll d12 for <strong>weapon</strong> (pg. 58) and d3 for <strong>armor</strong> (pg. 60).</div>
      `
    },
    {
      name: 'renagade cyberslasher',
      page: 'pg. 50',
      flavor: `You are <strong>DEATH</strong> incarnate-afrenzied flurry of chrome, murder, and blood-stained steel. But yours is no mindless rage. You match your trained and cybernetically enhanced body with an equally disciplined mind. <strong>You used to kill for a cause</strong>, for an ideal. Now? You kill for money.`,
      extraInfo: 'for how your try to start your day (pg. 50)',
      statChanges: {
        'hit points': 'toughness + d10',
        strength: '[body...] roll 3d6+1',
        presence: '[& soul] roll 3d6+1',
        knowledge: '[not a reader] 3d6-2'
      },
      glitches: 'd3',
      'starting gear': `
        <div>/// Start with one d12 roll for <strong>a random Cybertech (pg.69)</strong>. Replace any App or Nano with another d12 cybertech roll.</div>
        <div>/// Your trenchcoat hides most of your signature <strong>weapon</strong> (pg. 50), roll d3 for <strong>armor</strong> (pg. 60)</div>
        `
    },
    {
      name: 'forsaken gang-goon',
      page: 'pg. 52',
      flavor: `You ran with the only gang to have your back and treat you like more than slum trash. <strong>They were your family</strong>, and you bled, stole, fought, and killed for them. They\'re <strong>gone</strong> now, so you have to keep your edge.`,
      specialTraits: `You are <strong>stealthy</strong>; all Presence and Agility tests are <strong>-2DR</strong>.`,
      extraInfo: 'for what happened to your gang, your speciality (pg. 53)',
      statChanges: {
        'hit points': 'toughness + d6',
        strength: '[small] roll 3d6-2',
      },
      glitches: 'd3',
      'starting gear': `<div>/// Roll d6 for <strong>weapon</strong> (pg. 58) and d2 for <strong>armor</strong> (pg. 60)</div>`
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.displayedPunks = this.punks;
  }

  changePunk(value: any) {
    console.log(value);
    if (value === 'all') {
      this.displayedPunks = this.punks;
    } else {
      this.displayedPunks = this.punks.filter(punk => punk.name === value);
    }
  }

  print() {
    window.print();
  }

}
