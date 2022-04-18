import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wh-traits',
  templateUrl: './wh-traits.component.html',
  styleUrls: ['./wh-traits.component.scss']
})
export class WhTraitsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  traits = [
    {
      statName: 'strength',
      description: 'physical power'
    },
    {
      statName: 'karisma',
      description: 'divine favor, fortune, and luck'
    },
    {
      statName: 'constitution',
      description: 'physical resilience and  well-being'
    },
    {
      statName: 'wisdom',
      description: 'mental resilience and well-being'
    },
    {
      statName: 'dexterity',
      description: 'coordination and quickness'
    },
    {
      statName: 'intelligence',
      description: 'mental acuity and flexibility'
    },
  ];

}
