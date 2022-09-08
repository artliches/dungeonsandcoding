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
      description: 'jumping, lifting, grappling, swimming'
    },
    {
      statName: 'constitution',
      description: 'resisting physical trauma, endurance'
    },
    {
      statName: 'dexterity',
      description: 'physical alacrity & coordination'
    },
    {
      statName: 'charisma',
      description: 'persuasion, deception, morale, & luck'
    },
    {
      statName: 'wisdom',
      description: 'resisting mental trauma & complusions, perception'
    },
    {
      statName: 'intelligence',
      description: 'mental alacrity, recalling knowledge'
    },
  ];

  constructor() { }

}
