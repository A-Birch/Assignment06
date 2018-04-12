/*eslint-env browser*/

// --------- Part 3 - Date and Date Functions -------

//STEP 1

var d = new Date();
window.console.log(d.getDate());

//STEP 2
var locale = "en-us", month;
month = d.toLocaleString(locale, { month: "long" });

window.console.log(month);

//STEP 3

if (d.getDay() === 0 || d.getDay() === 6) {
    window.console.log("Today is a weekend. Yeah!");
} else {
    window.console.log("Today is not a weekend. Go to work, looser!");
}

//STEP 4
var yesterday;
// -------- FIRST WAY --------------
/*
function getDayOfWeek(date) {
  var dayOfWeek = new Date(date).getDay();    
  return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

yesterday = d.setDate(d.getDate()-1);

window.console.log(getDayOfWeek(yesterday));
*/
// -------- END OF FIRST WAY --------------

// --------SECOND WAY --------------------

var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

yesterday = weekday[d.getDay() - 1];
window.console.log(yesterday);

//-----------END OF SECOND WAY -------------

//STEP 5

var d = new Date(), dayWeek;
locale = "en-us";
dayWeek = d.toLocaleString(locale, { weekday: "narrow" });
window.console.log(dayWeek);