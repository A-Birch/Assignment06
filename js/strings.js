/*eslint-env browser*/

// --------- Part 1 - Strings and String Manipulation -------

//STEP 1

var userName;
userName = window.prompt("Enter your name:");
window.alert("Your name has " + userName.length + " symbols.");

//STEP 2
/*
var userName, userNumber;
userName = window.prompt("Enter your name:");
userNumber = parseInt(window.prompt("Enter a number (starting with number 1) of the letter in your name:"), 10);
userNumber--;
window.console.log(userNumber);
window.alert("Under this number is the letter " + userName.charAt(userNumber));
*/
//STEP 3
/*
var userFirstName, userLastName;
userFirstName = window.prompt("Enter your first name:");
userLastName = window.prompt("Enter your last name:");
window.alert("Your name is: " + userFirstName.concat(userLastName));
*/
//STEP 4
/*
var text = "The quick brown fox jumps over the lazy dog";
window.alert(text.indexOf("fox"));
*/
//STEP 5
/*
var text = "The quick brown fox jumps over the lazy fox";
window.alert(text.lastIndexOf("fox"));
*/
//STEP 6
/*
var text = "The quick brown fox jumps over the lazy dog";
userName = window.prompt("Enter your full name:");
window.alert(text.replace("the lazy dog", userName));
*/
//STEP 7
/*
var text = "The quick brown fox jumps over the lazy dog";
userWord = window.prompt('Enter word any word from next sentence: "' + (text) + '".');
window.alert(text.search(userWord));
*/
//STEP 8
/*
var old_string = "The quick brown fox jumps over the lazy dog", new_string;
var exp = old_string.lastIndexOf("the");
new_string = old_string.slice(exp, exp + 12);
window.alert(new_string.toUpperCase());
*/
//STEP 9
/*
var text = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
window.alert(text.trim().toLowerCase().toString());
*/
//STEP 10

var text = "the quick brown fox jumps over the lazy dog";

//----- the first way -----
/*
text = text.split(" ");
window.console.log(text);
text[0] = "The";
window.console.log(text);
text = text.join(" ");
window.alert(text);
*/
// ----- the end of first way -------

// ----- the second way ---------

//window.alert(text.replace("the", "The"));

// ----- the end of second way -------