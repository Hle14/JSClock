
var hourly_wage = second_wage = earned = 0;


var setHourlyWage = function(){
	//NOTE: this won't check to make sure the wage is actually a number
	hourly_wage = parseFloat(document.getElementById("wage_input").value);
	document.getElementById("hourly_wage").innerHTML = hourly_wage.toFixed(2);
	second_wage = hourly_wage/3600.0;
	document.getElementById("second_wage").innerHTML = second_wage;
};

//increments total amount earned for each call(called every time step)
var addToEarned = function(){
	earned += parseFloat(second_wage);
	document.getElementById("earned").innerHTML = earned.toFixed(2);
};
/*
//calculates total amount earned from entered start time
var setStartTime = function(){
	//calculate total time since entered start time
	//set total to second_wage*total_time
	//clear timers and then start timers to continue adding to earnings
};
*/

/*add time period functionality
e.g. start time block, label time block,
	end time block, list total earned during time block
	e.g. e.g.
		BLOCK-TITLE			START-END		EARNED
		TPS reports			10:24-10:41		$X
		Use the restroom	10:41-12:00		$Y
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

	document.getElementById("clock").innerHTML = time_string;
};

//global declaration for access by start and clear timer methods
var wage_counter,clock_counter;
var clearTimers = function(){
	clearInterval(wage_counter);
};
var startTimers = function(){
	clearTimers();
	wage_counter = setInterval(function(){addToEarned()},1000);
};
var reset = function(){ //resets all global variables and displayed elements and stops timers
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

	clock_counter = setInterval(function(){updateClockAndWage()},1000);
};

/**NOTE: according to */