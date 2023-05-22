import { Component, OnInit, Input } from '@angular/core';
import { OvernightSleepData } from '../overnight-sleep-data';

@Component({
  selector: 'app-overnight-sleep-card',
  templateUrl: './overnight-sleep-card.component.html',
  styleUrls: ['./overnight-sleep-card.component.scss'],
})
export class OvernightSleepCardComponent implements OnInit {
  @Input() sleep_data: OvernightSleepData;
  constructor() { }

  ngOnInit() {}

}
