import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cy-nano-apps',
  templateUrl: './cy-nano-apps.component.html',
  styleUrls: ['./cy-nano-apps.component.scss']
})
export class CyNanoAppsComponent implements OnInit {
  @Input() horz: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
