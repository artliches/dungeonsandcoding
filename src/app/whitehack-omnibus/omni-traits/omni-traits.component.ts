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
      description: 'physical power'
    },
    {
      statName: 'constitution',
      description: 'physical resilience and  well-being'
    },
    {
      statName: 'dexterity',
      description: 'coordination and quickness'
    },
    {
      statName: 'karisma',
      description: 'divine favor, fortune, and luck'
    },
    {
      statName: 'wisdom',
      description: 'mental resilience and well-being'
    },
    {
      statName: 'intelligence',
      description: 'mental acuity and flexibility'
    },
  ];

  constructor() { }

}
