import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cy-identity',
  templateUrl: './cy-identity.component.html',
  styleUrls: ['./cy-identity.component.scss']
})
export class CyIdentityComponent implements OnInit {
  @Input() specialTraits: string;
  @Input() extraInfo: string;
  @Input() horz: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
