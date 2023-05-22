import { Component, OnInit, Input} from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sleepiness-add-page',
  templateUrl: './sleepiness-add-page.page.html',
  styleUrls: ['./sleepiness-add-page.page.scss'],
})
export class SleepinessAddPagePage implements OnInit {
  private selected_value:number = 0;

  constructor(public sleepService:SleepService, private navCtrl:NavController) { }

  ngOnInit() {
  }

  get stanfordScale(){
    // for ionic binding
    // returns the entire list except the first element
    return StanfordSleepinessData.ScaleValues.slice(1);
  }
  

  getSelectedValue(event){
    // even that allows us to have the currently selected value
    this.selected_value = parseInt(event["detail"]["value"]);
  }

  goBack(){
    this.navCtrl.back();
  }

  saveData(){
    if(this.selected_value != 0){
      this.sleepService.logSleepinessData(new StanfordSleepinessData(this.selected_value));
      this.navCtrl.back();
    }
  }

}
