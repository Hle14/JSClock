var hourly_wage = 0;
var setWage = document.getElementById("set_wage");

setWage.addEventListener("click",setHourlyWage,false);

function setHourlyWage(){
	//NOTE: this won't check to make sure the wage is actually a number
	hourly_wage = document.getElementById("wage_input").value;
}

function setStartTime(){

}

function updateClockAndWage(){

	var time = new Date();

	//get current time in hours minutes seconds
	var hour = time.detHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();

	//pad minute/second with zeros if appropriate
	minute = (minute < 10 ? "0" : "") + minute;
	second = (second < 10 ? "0" : "") + second;

	var timeOfDay = hour < 12 ? "AM" : "PM";

	hour = hour < 12 ? hour : hour-12;
	hour = hour==0 ? 12 : hour;

	var time_string = hour + ":" + minute + ":" + second;

	//calculate how much has been earned
	var earned = hourly_wage*(hour + (minute*60 + second)/3600);
	var earned_string = "$" + earned.toFixed(2);
	//update clock display
	document.getElementById("clock").firstChild.nodeValue = time_string;
	//update wages earned display
	document.getElementById("wages").firstChild.nodeValue = earned_string;
}

window.onload = function(){
	setInterval('updateClockAndWage',1000);
};