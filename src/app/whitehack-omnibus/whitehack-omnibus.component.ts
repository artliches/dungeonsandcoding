import { Component } from '@angular/core';

@Component({
  selector: 'app-whitehack-omnibus',
  templateUrl: './whitehack-omnibus.component.html',
  styleUrls: ['./whitehack-omnibus.component.scss']
})
export class WhitehackOmnibusComponent {

  constructor() { }

  jobs = [
    {
      jobName: 'deft',
      description: 'rely on superior technique and skill'
    },
    // {
    //   jobName: 'strong',
    //   description: 'rely on combat skills and physique'
    // },
    // {
    //   jobName: 'wise',
    //   description: 'perform miracles through arcane negotiations'
    // },
    // {
    //   jobName: 'brave',
    //   description: 'stand fast against despair despite your humble upbringing'
    // },
    // {
    //   jobName: 'fortunate',
    //   description: 'wield the advantage of nobility, fame, destiny, or wealth'
    // },
    // {
    //   jobName: 'void',
    //   description: 'a hero is what you make them'
    // }
  ];

}
