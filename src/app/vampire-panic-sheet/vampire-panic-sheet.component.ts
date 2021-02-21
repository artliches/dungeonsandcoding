import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vampire-panic-sheet',
  templateUrl: './vampire-panic-sheet.component.html',
  styleUrls: ['./vampire-panic-sheet.component.scss']
})
export class VampirePanicSheetComponent implements OnInit {
  vampireClanInfo = {
    brujah: {
      startingSkills: [],
      startingDisiplines: ['Celerity', 'Potence', 'Presence'],
      startingSaves: [0 , 0, 0, 0],
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
