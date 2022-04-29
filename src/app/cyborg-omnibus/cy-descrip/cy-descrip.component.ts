import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cy-descrip',
  templateUrl: './cy-descrip.component.html',
  styleUrls: ['./cy-descrip.component.scss']
})
export class CyDescripComponent implements OnInit {
  @Input() punkName: string;
  @Input() pageRef: string;
  @Input() punkFlavor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
