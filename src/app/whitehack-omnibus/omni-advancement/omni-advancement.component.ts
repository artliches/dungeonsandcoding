import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-omni-advancement',
  templateUrl: './omni-advancement.component.html',
  styleUrls: ['./omni-advancement.component.scss']
})
export class OmniAdvancementComponent implements OnInit {
    @Input() jobName: string;
    dataRows = [];
    tableHeaders = [
        'Lvl',
        'XP',
        'HD',
        'AV',
        'ST',
        'Sl.',
        'Gr.',
        'Ra.',
    ];

    deftRows = [
        [1,     0     ,  '1'  , 10, 7 ,     1, 2, '–'],
        [2,     1500  ,  '2'  , 11, 8 ,     1, 2, '1'],
        [3,     3000  ,  '2+1', 11, 9 ,     1, 3, '1'],
        [4,     6000  ,  '3'  , 12, 10,     2, 3, '2'],
        [5,     12000 ,  '3+1', 12, 11,     2, 4, '2'],
        [6,     24000 ,  '4'  , 13, 12,     2, 4, '3'],
        [7,     48000 ,  '4+1', 13, 13,     3, 5, '3'],
        [8,     96000 ,  '5'  , 14, 14,     3, 5, '4'],
        [9,     192000,  '5+1', 14, 15,     3, 6, '4'],
        [10,    384000,  '6'  , 15, 16,     4, 6, '5'],
    ];

    strongRows = [
        [1,     0     ,  '1+2',  11, 5 , 1, 2, '–'],
        [2,     2000  ,  '2',    11, 6 , 1, 2, '1'],
        [3,     4000  ,  '3',    12, 7 , 1, 2, '1'],
        [4,     8000  ,  '4',    13, 8 , 2, 3, '2'],
        [5,     16000 ,  '5',    13, 9 , 2, 3, '2'],
        [6,     32000 ,  '6',    14, 10, 2, 3, '3'],
        [7,     64000 ,  '7',    15, 11, 3, 4, '3'],
        [8,     128000,  '8',    15, 12, 3, 4, '4'],
        [9,     256000,  '9',    16, 13, 3, 4, '4'],
        [10,    512000,  '10',   17, 14, 4, 5, '5'],
    ];

    wiseRows = [
        [1 , 0      ,   '1+1', 10, 6,   1, 2, '–'],
        [2 , 2500   ,   '2',   11, 7,   1, 2, '1'],
        [3 , 5000   ,   '2+1', 11, 8,   2, 2, '1'],
        [4 , 10000  ,   '3',   11, 9,   2, 3, '2'],
        [5 , 20000  ,   '4',   12, 10,  3, 3, '2'],
        [6 , 40000  ,   '4+1', 12, 11,  3, 3, '3'],
        [7 , 80000  ,   '5',   12, 12,  4, 4, '3'],
        [8 , 160000 ,   '6',   13, 13,  4, 4, '4'],
        [9 , 320000 ,   '6+1', 13, 14,  5, 4, '4'],
        [10, 640000 ,   '7',   13, 15,  5, 5, '5'],
    ];

    braveRows = [
        [1 , 0      , '1*',  10, 9 ,    1 , 2 ,  '–',],
        [2 , 1200   , '2*',  10, 10,     1,  2,  '1',],
        [3 , 2400   , '3*',  10, 11,     1,  2,  '1',],
        [4 , 4800   , '4',   11, 12,     2,  2,  '2',],
        [5 , 9600   , '5',   11, 13,     2,  3,  '2',],
        [6 , 19200  , '6',   11, 14,     2,  3,  '3',],
        [7 , 38400  , '7',   12, 15,     3,  3,  '3',],
        [8 , 76800  , '8',   12, 16,     3,  3,  '4',],
        [9 , 153600 , '9',   12, 17,     3,  4,  '4',],
        [10, 307200 , '10',  13, 18,     4,  4,  '5',],
    ];

    fortunateRows = [
        [1,  0     , '1',   10, 6 ,1 ,2 ,    '–',],
        [2,  1500  , '2',   10, 7 ,1 ,2 ,    '1',],
        [3,  3000  , '2+1', 11, 8 ,1 ,3 ,    '1',],
        [4,  6000  , '3',   11, 9 ,2 ,3 ,    '2',],
        [5,  12000 , '3+1', 12, 10, 2, 4,    '2',],
        [6,  24000 , '4',   12, 11, 2, 4,    '3',],
        [7,  48000 , '4+1', 13, 12, 3, 5,    '3',],
        [8,  96000 , '5',   13, 13, 3, 5,    '4',],
        [9,  192000, '5+1', 14, 14, 3, 6,    '4',],
        [10, 384000, '6',   14, 15, 4, 6,    '5',],
    ];

    critTableHeaders = [
        'd12',
        'The target\'s',
    ];

    critFumbleHeader = [
        'd6',
        'The character(\'s)',
    ];

    critTableData = [
        [1 , 'Weapon flies 10ft away.'],
        [2 , 'Shield drops 5ft away'],
        [3 , 'Weapon breaks. It can be mended.'],
        [4 , 'Shield is ruined.'],
        [5 , 'Armor loses 4 AC. It can be mended.'],
        [6 , 'Is hurt and gets halved movement.'],
        [7 , 'Speech is impossible for 10 minutes.'],
        [8 , 'Is blinded for 10 minutes. All actions are −10.'],
        [9 , 'Is laid flat on the ground a few steps away.'],
        [10, 'Must try to flee.'],
        [11, 'Is deaf for 10 minutes.'],
        [12, 'Starts to bleed. +1 damage every round.'],
        // [13, 'Takes an additional d6 damage.'],
        // [14, 'Is stunned. No actions for 2 rounds.'],
        // [15, 'Is confused. Save or attack the nearest ally.'],
        // [16, 'Dies in 5 rounds.'],
        // [17, 'Dies instantly.'],
        // [18, 'Meets a gory death. Allies check morale.'],
        // [19, 'Attacks an ally, then dies. Roll to hit.'],
        // [20, 'Re-roll to get two crit effects.'],
    ];

    critFumbleData = [
        [1,  'Weapon breaks. It can be mended.'],
        [2,  'Armor or shield breaks. They can be mended.'],
        [3,  'Drops her weapon, or it gets stuck.'],
        [4,  'Staggers and gets 2 rounds of halved movement.'],
        [5,  'Attacks the nearest ally (make an attack roll).'],
        [6,  'Hits herself—roll damage!'],
    ];

    magickHeaders = [
        'HP',
        'Magnitudes'
    ];

    magickData = [
        ['0'   , 'Zero, trivial effect, slotted scroll or simple effect boosted by a limiting condition.'],
        ['1'   , 'Simple, can be achieved without magick.'],
        ['2'   , 'Standard, just beyond the possible. '],
        ['d6'  , 'Major, a major breach of natural law.'],
        ['2d6' , 'Powerful, use of raw power.'],
        ['+'   , 'Costly. Peripheral to vocation and/or wording. Extra duration, range, effect area, victims, damage. No save. Craft item (Cost × 2). Adding another charge (Cost × 1). Expensive magick type. Crafting a permanent magick item (Cost × 2 permanent HP).'],
        ['−'   , 'Cheaper. Very close to vocation and/or wording. Rare/costly ingredients. Bad side effects for the Wise. Wise save (fail negates). Boosting but addictive drugs. Cheap magick type. Extra casting time. Time or place requirements.'],
    ];

  constructor() { }

  ngOnInit(): void {
    if (this.jobName === 'deft') {
        this.dataRows = this.deftRows;
    } else if (this.jobName === 'strong') {
        this.dataRows = this.strongRows;
    } else if (this.jobName === 'wise') {
        this.dataRows = this.wiseRows;
    } else if (this.jobName === 'brave') {
        this.dataRows = this.braveRows;
    } else if (this.jobName === 'fortunate') {
        this.dataRows = this.fortunateRows;
    }
  }

}
