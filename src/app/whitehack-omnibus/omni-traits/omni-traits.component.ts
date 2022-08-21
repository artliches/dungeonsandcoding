import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-omni-traits',
  templateUrl: './omni-traits.component.html',
  styleUrls: ['./omni-traits.component.scss']
})
export class OmniTraitsComponent {
  @Input() jobName: string;
  @Input() horz: boolean;
  traits = [
    {
      statName: 'strength',
      description: 'physical prowess'
    },
    {
      statName: 'constitution',
      description: 'endurance & health'
    },
    {
      statName: 'dexterity',
      description: 'coordination & quickness'
    },
    {
      statName: 'charisma',
      description: 'influence, morale, & reactions'
    },
    {
      statName: 'wisdom',
      description: 'insight, perception, & judgement'
    },
    {
      statName: 'intelligence',
      description: 'memory & reasoning'
    },
  ];

  constructor() { }

}
