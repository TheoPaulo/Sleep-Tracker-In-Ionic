import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	private sleepStart:Date;
	private sleepEnd:Date;
	public static time_format: string = 'en-US';
	public static time_options: Object = {hour: '2-digit', minute: '2-digit'};

	constructor(sleepStart:Date, sleepEnd:Date) {
		super();
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
	}

	summaryString():string {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;
		    
		// Convert to hours and minutes
		return Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes.";
	}

	dateString():string {
		return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}

	startTime():string {
		return this.sleepStart.toLocaleTimeString(OvernightSleepData.time_format, OvernightSleepData.time_options);
	}

	endTime():string {
		return this.sleepEnd.toLocaleTimeString(OvernightSleepData.time_format, OvernightSleepData.time_options);
	}
}
