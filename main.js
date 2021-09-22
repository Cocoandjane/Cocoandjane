
var getDayOfTheWeek = require("./lab2").getDayOfTheWeek;
var makeCalendar = require("./lab2").makeCalendar;
var readline = require("readline-sync");


var year = readline.question("Enter a year: ");
var month = readline.question("Enter a month: ");
var day = readline.question("Enter a date: ");

console.log ("you typed: ");
console.log(year, month, day);

makeCalendar(2021);