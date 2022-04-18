import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whitehack-horizontal',
  templateUrl: './whitehack-horizontal.component.html',
  styleUrls: ['./whitehack-horizontal.component.scss']
})
export class WhitehackHorizontalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  jobs = [
    // {
    //   jobName: 'deft',
    //   description: 'rely on superior technique and skill'
    // },
    // {
    //   jobName: 'strong',
    //   description: 'rely on combat skills and physique'
    // },
    {
      jobName: 'wise',
      description: 'perform miracles through arcane negotiations'
    }
  ];

}
