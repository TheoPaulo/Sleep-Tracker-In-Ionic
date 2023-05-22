import { Component, OnInit, ViewChild} from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { NavController } from '@ionic/angular';
import {format, parseISO } from 'date-fns';

@Component({
  selector: 'app-overnight-log-add-page',
  templateUrl: './overnight-log-add-page.page.html',
  styleUrls: ['./overnight-log-add-page.page.scss'],
})
export class OvernightLogAddPagePage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  private startDateValue:Date;
  private endDateValue:Date;

  constructor(private sleepService:SleepService, private navCtrl:NavController) { }

  ngOnInit() {
  }

  // from ionicframeworks
  formatStartDate(value: string) {
    this.startDateValue = new Date(format(parseISO(value), 'LLLL d, Y H:mm:00'));
    return format(parseISO(value), 'eee MMM dd yyyy  HH:mm a');
  }

  // same function but for end date
  formatEndDate(value: string) {
    this.endDateValue = new Date(format(parseISO(value), 'LLLL d, Y H:mm:00'));
    return format(parseISO(value), 'eee MMM dd yyyy  HH:mm a');
  }

  continue(){
    //this.datetime.nativeEl.confirm();
  }

  goBack(){
    this.navCtrl.back();
  }

  saveData(){
    if ((this.startDateValue < this.endDateValue) && (this.startDateValue != undefined) && (this.endDateValue != undefined)){
      this.sleepService.logOvernightData(new OvernightSleepData(this.startDateValue, this.endDateValue));
      this.navCtrl.back();
    }
  }

}
