import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  year = [
    {
      season: 'spring',
      days: Array(25).fill(''),
      flavor: 'season of rebirth and life'
    },
    {
      season: 'summer',
      days: Array(25).fill(''),
      flavor: 'season of vitality and growth'
    },
    {
      season: 'fall',
      days: Array(25).fill(''),
      flavor: 'season of winds and harvest'
    },
    {
      season: 'winter',
      days: Array(25).fill(''),
      flavor: 'season of decay and frost'
    },
  ];

  bdaySwatches = [
    'typhoon', 'cas', 'igni', 'iibikun', 'sven'
  ];

  holidays = [
    {
      season: 'spring',
      holidays: ['The Maiden\'s March', 'Dance of the Lions']
    },
    {
      season: 'summer',
      holidays: ['The Queens Banquets', 'Festival of Feathers']
    },
    {
      season: 'fall',
      holidays: ['Eel Day', 'Fire\'s Last Gasp']
    },
    {
      season: 'winter',
      holidays: ['The Witch\'s Walk', 'Release']
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
