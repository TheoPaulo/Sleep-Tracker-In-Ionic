import { Component, OnInit, Input } from '@angular/core';
import { StanfordSleepinessData } from '../stanford-sleepiness-data';

@Component({
  selector: 'app-sleepiness-card',
  templateUrl: './sleepiness-card.component.html',
  styleUrls: ['./sleepiness-card.component.scss'],
})
export class SleepinessCardComponent implements OnInit {
  @Input() sleep_data: StanfordSleepinessData;
  constructor() { }

  ngOnInit() {}

}
