import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-sleepiness-menu-page',
  templateUrl: './sleepiness-menu-page.page.html',
  styleUrls: ['./sleepiness-menu-page.page.scss'],
})
export class SleepinessMenuPagePage implements OnInit {

  constructor(public sleepService:SleepService, private navCtrl:NavController) { }

  ngOnInit() {
    console.log("bread")
  }

  get allSleepinessData() {
    return SleepService.AllSleepinessData;
  }

  goToOvernightLog(){
		this.navCtrl.navigateForward('/overnight-log-add-page');
	}

	goToSleepinessLog(){
		this.navCtrl.navigateForward('/sleepiness-add-page');
	}

	goToOvernightMenu(){
		this.navCtrl.navigateForward('/home')
	}

	goToSleepinessMenu(){
		this.navCtrl.navigateForward('/sleepiness-menu-page');
	}

}
