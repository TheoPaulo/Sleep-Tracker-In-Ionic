import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	private add_pressed:boolean = false;

	constructor(public sleepService:SleepService, private navCtrl:NavController) {

	}

	ngOnInit() {
		console.log(this.allSleepData);
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	get allOvernightData() {
		return SleepService.AllOvernightData;
	}

	change_add_pressed(){
		this.add_pressed = !this.add_pressed;
	}

	event_test(){
		this.add_pressed = !this.add_pressed;
		console.log("hovered");
		console.log(this.add_pressed);
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
