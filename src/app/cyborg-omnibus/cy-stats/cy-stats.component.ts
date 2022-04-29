import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cy-stats',
  templateUrl: './cy-stats.component.html',
  styleUrls: ['./cy-stats.component.scss']
})
export class CyStatsComponent implements OnInit {
  @Input() hacker: boolean;
  @Input() statChanges: any;
  debt = '';
  rollTable = ['Roll', '1-4', '5-6', '7-8', '9-12', '13-14', '15-16', '17-20'];
  scoreTable = ['Score', '-3', '-2', '-1', '0', '+1', '+2', '+3'];
  abilities = [
    {
      name: 'strength',
      descrip: 'strike, grapple, lift, and throw',
      instructions: 'roll 3d6',
    },
    {
      name: 'agility',
      descrip: 'sneak, dodge, drive, autofire',
      instructions: '',
    },
    {
      name: 'presence',
      descrip: 'snipe/shoot, use nano, charm',
      instructions: '',
    },
    {
      name: 'toughness',
      descrip: 'survive falling, poison, and elements',
      instructions: '',
    },
    {
      name: 'knowledge',
      descrip: 'science, use tech or apps',
      instructions: '',
    },
    {
      name: 'hit points',
      descrip: ['0HP=battered/<0HP=dead* (pg. 80)'],
      instructions: 'roll toughness + d8',
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.debt = this.hacker ? '6d10×1000¤' : '3d6×1000¤';
    this.abilities.forEach(ability => {
      switch (ability.name) {
        case 'hit points': {
          ability.instructions = this.statChanges && this.statChanges['hit points'] ?
            this.statChanges['hit points'] : 'roll toughness + d8';
          break;
        }
        case 'strength': {
          ability.instructions = this.statChanges &&  this.statChanges.strength ? this.statChanges.strength : 'roll 3d6';
          break;
        }
        case 'presence': {
          ability.instructions = this.statChanges &&  this.statChanges.presence ? this.statChanges.presence : 'roll 3d6';
          break;
        }
        case 'knowledge': {
          ability.instructions = this.statChanges &&  this.statChanges.knowledge ? this.statChanges.knowledge : 'roll 3d6';
          break;
        }
        case 'toughness': {
          ability.instructions = this.statChanges &&  this.statChanges.toughness ? this.statChanges.toughness : 'roll 3d6';
          break;
        }
        case 'agility': {
          ability.instructions = this.statChanges &&  this.statChanges.agility ? this.statChanges.agility : 'roll 3d6';
          break;
        }
        default: {
          ability.instructions = 'roll 3d6';
          break;
        }
      }
    });
  }

}
