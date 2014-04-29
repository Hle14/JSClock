
var hourly_wage = second_wage = earned = 0;
//var form = document.getElementById("wage_form");

var setHourlyWage = function(){
	//NOTE: this won't check to make sure the wage is actually a number
	hourly_wage = document.getElementById("wage_input").value;
	document.getElementById("hourly_wage").innerHTML = hourly_wage;
	second_wage = hourly_wage*1.00 / 3600.0;
	document.getElementById("second_wage").innerHTML = second_wage;
};

var addToWage = function(){
	earned += parseFloat(second_wage);
	document.getElementById("earned").innerHTML = earned;
}
/*
var setStartTime = function(){

};
*/

var updateClockAndWage = function(){
	var time = new Date();

	//get current time in hours minutes seconds
	var hour = time.getHours();
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
	//document.getElementById("clock").firstChild.nodeValue = time_string;
	document.getElementById("clock").innerHTML = time_string;
};

//global declaration for access by start and clear timer methods
var wage_counter,clock_counter;
var clearTimers = function(){
	clearInterval(wage_counter);
	//clearInterval(clock_counter);
};
var startTimers = function(){
	clearTimers();
	wage_counter = setInterval(addToWage,1000);
};
var reset = function(){
	clearTimers();
	hourly_wage = earned = second_wage = 0;
	document.getElementById("wage_input").value = 0;
	document.getElementById("earned").innerHTML = 0;
	document.getElementById('hourly_wage').innerHTML = 0;
	document.getElementById('second_wage').innerHTML = 0;
};

window.onload = function(){

	//set up event listeners
	var setWage = document.getElementById("set_wage");
	setWage.addEventListener("click",setHourlyWage,false);

	var stopButton = document.getElementById("stop_button");
	stopButton.addEventListener("click",clearTimers,false);

	var startButton = document.getElementById("start_button");
	startButton.addEventListener("click",startTimers,false);

	var clearButton = document.getElementById("clear_button");
	clearButton.addEventListener("click",reset,false);

	clock_counter = setInterval(updateClockAndWage,1000);
};