/*
Declare an empty array using JS literal notation to store student names in future:
var studentNamesLiteral = [];


Declare an empty array using JS object notation to store student names in future:
var studentNamesObject = new Array();


Declare and initialize a strings array:
var stringsArray = ["apple", "banana", "cherry"];

Declare and initialize a numbers array:
var numbersArray = [1, 2, 3, 4, 5];

Declare and initialize a boolean array:
var booleanArray = [true, false, true];

Declare and initialize a mixed array:
var mixedArray = ["apple", 2, true, "banana", false];

Declare and Initialize an array and store available education qualifications in Pakistan:
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Displayin…
[8:53 PM, 3/15/2024] Hafiz~Mujahid: /*
Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122).

var inputChar = prompt("Enter a character:");

var charCode = inputChar.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    console.log("Number");
} else if (charCode >= 65 && charCode <= 90) {
    console.log("Uppercase Letter");
} else if (charCode >= 97 && charCode <= 122) {
    console.log("Lowercase Letter");
} else {
    console.log("Other character");
}



Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.

var num1 = prompt("Enter the first integer: ");
var num2 = prompt("Enter the second integer: ");

if (num1 > num2) {
    console.log(num1 + " is larger than " + num2);
} else if (num2 > num1) {
    console.log(num2 + " is larger than " + num1);
} else {
    console.log("Both integers are equal: " + num1);
}





Write a program that takes input a number from user &
state whether the number is positive, negative or zero.

var num1 = prompt("Enter any number ")
if (num1 > 0) {
    console.log(num1 + " is Positive number ");
} else if (num1 < 0) {
    console.log(num1 + " is Negative number ");

} else {
    console.log("This is Zero ");

}

Write a program that takes a character (i.e. string of
    length 1) and returns true if it is a vowel, false otherwise
    
    
    var character = prompt("Enter a character:")
    
    var vowels = ['A','E','I','O','U','a', 'e', 'i', 'o', 'u'];
    
    if (vowels.includes(character)) {
        console.log("true");
    } else {
        console.log("false");
    }





    Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”
ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise.

var correctPassword = "password123";

var userPassword = prompt("Enter your password:");

if (!userPassword) {
    console.log("Please enter your password");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password");
} else {
    console.log("Incorrect password");
}





6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}

FIXED
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}




Write a program that takes time as input from user in 24
hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements


var time = parseInt(prompt("Enter the time (in 24-hour clock format):"));

if (time >= 0 && time <= 1200) {
    console.log("Good morning!");
} else if (time > 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
} else {
    console.log("Invalid time input!");
}


    */