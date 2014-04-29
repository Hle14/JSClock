
var hourly_wage = earned = 0;
//var form = document.getElementById("wage_form");

var setHourlyWage = function(){
	//NOTE: this won't check to make sure the wage is actually a number
	hourly_wage = document.getElementById("wage_input").value;
	document.getElementById("wage").innerHTML = "$" + hourly_wage;
};

var addToWage = function(){
	earned += parseFloat(hourly_wage);
	document.getElementById("earned").innerHTML = "$" + earned;
}
/*
var setStartTime = function(){

};
*/

var updateClockAndWage = function(){
	var time = new Date();

	//get current time in hours minutes seconds
	var hour = time.detHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();
/*
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
	//document.getElementById("clock").firstChild.nodeValue = time_string;
	document.getElementById("clock").innerHTML = time_string;
	//update wages earned display
	document.getElementById("wage").innerHTML = earned_string;
	*/
	document.getElementById("clock").innerHTML = time;
}

window.onload = function(){

	var setWage = document.getElementById("set_wage");
	setWage.addEventListener("click",setHourlyWage,false);

	setInterval(function(){addToWage()},500);
	//setInterval(function(){updateClockAndWage()},1000);
};