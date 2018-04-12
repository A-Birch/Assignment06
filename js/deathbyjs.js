/*eslint-env browser*/

//STEP 1

var userString = window.prompt("STEP 1. Enter the string and I will sort the letters in alphabetical order.");

function sortLetters () {
	return userString.toLowerCase().split("").sort().join("").replace(/\s+/g, '');
	}

window.console.log('Your string was "' + userString + '"\nSorted string in alphabetical order: ' + sortLetters());


//STEP 2

userString = window.prompt("STEP 2. Enter the string and I will convert the first letter of each word of the string to upper case.");

function capitalizedString(userString) {
	return userString.replace(/\w\S*/g, function(userString) {
		return userString.charAt(0).toUpperCase() + userString.substr(1).toLowerCase();
	});
}

window.console.log(capitalizedString(userString));

//STEP 3
userString = window.prompt("STEP 3. Enter the string and I will count the number of vowels within the string.");

function countVowels(userString) {
	return userString.toLowerCase().match(/[aeiouy]/g).length;
}

window.console.log(countVowels(userString));

//STEP 4
var n, i;
n = parseInt(window.prompt("STEP 4. Enter the length of string and I will generate a string of random characters."), 10);

function makeIdString(n) {
	var text = "";
	var randomSymbol;
	
// ----- FIRST WAY --------
	//var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	/*
	for (i = 0; i < n; i++) {
		text += str.charAt(Math.floor(Math.random() * str.length));
		text += String.fromCharCode(randomSymbol);
	}
*/
// ----- SECOND WAY -------
	for (i = 0; i < n; i++) {
		randomSymbol = Math.floor(Math.random() * (123 - 48) + 48);
		text += String.fromCharCode(randomSymbol);
	}

	return text;
}

window.console.log(makeIdString(n));

//STEP 5
var longestName;

var str = window.prompt("STEP 5. Enter a list of country names separated by commas and I will returns the longest country name.");

function findLongestName(str) {
  str = str.split(",");
  var longest = 0;

  for(var i = 0; i < str.length; i++) {
	str[i] = str[i].trim();
		if(str[i].length >= longest) {
			longest = str[i].length;
			longestName = str[i];
		}
  }
	
  return longestName;
}

window.console.log("You entered next countries: " + str.toString() + ". \nThe longest name is " + findLongestName(str));

