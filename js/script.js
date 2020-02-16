/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



/*** 
 * `quotes` array 
 Created array of objects according to instruction + addes extra tag: category
***/
let quotes = [
  {quote: "Failure is simply the opportunity to begin again, this time more intelligently.",
   source: "Henry Ford",
   citation: "https://www.brainyquote.com/quotes/henry_ford_121339",
   category: "Quote"
  },
  {quote: "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
   source: "Albert Einstein",
   citation: "https://www.goodreads.com/author/quotes/9810.Albert_Einstein",
   year: 1929,
   category: "Quote"
  },
  {quote: "A crisis is an opportunity riding the dangerous wind.",
  source: "Chinese Proverb ",
  citation: "https://www.wow4u.com/chinese/",
  category: "Proverb"
 },
 {quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
 source: "Mahatma Gandhi",
 category: "Quote"
},
{quote: "That which does not kill us makes us stronger.",
source: "Friedrich Nietzsche",
category: "Quote"
}
];
console.log(quotes[2]);
/***
 * `getRandomQuote` function
 Created function "dryest" way I could
***/
function getRandomQuote(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}

console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
 printQuote function - solution for that was inspierd by some codes from warm ups https://teamtreehouse.com/workspaces/41299681
***/
function printQuote () {
  
  let RandomQuote = getRandomQuote(quotes);
  let QuoteString = "";
  if (RandomQuote.quote && RandomQuote.source){
    QuoteString += '<p class="quote">' + RandomQuote.quote + '</p>' + 
                    '<p class="source">' + RandomQuote.source;
  }
  if (RandomQuote.citation){
    QuoteString += '<span class="citation"> ' + RandomQuote.citation + '</span>';
  }
  if (RandomQuote.year){
    QuoteString += '<span class="year">' + RandomQuote.year + '</span>';
  }
  if (RandomQuote.category){
    QuoteString += '<span class="category">' + ", " + RandomQuote.category + '</span>';
  }
  QuoteString += '</p>';
  document.getElementById('quote-box').innerHTML = QuoteString;
  return QuoteString;
}

console.log(printQuote());

/***
Creating random color Generator, idea from https://stackoverflow.com/questions/1484506/random-color-generator 
https://www.youtube.com/watch?v=UzNyAB2Pg7g
https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
***/
function getRandomColor() {
var r = Math.floor(Math.random()*256);          // Random between 0-255
var g = Math.floor(Math.random()*256);          // Random between 0-255
var b = Math.floor(Math.random()*256);          // Random between 0-255
var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
return document.body.style.backgroundColor = rgb; // shortest way of direct referal to body coykd find
}

let rbgColor = getRandomColor(); //leavin this console command "uncomented" so it loads initial RGB (otherwise would be white background)
// console.log(rbgColor); - that was checkup for rgb format so it changes "smoothly"
/***
 //to Reaload color "on-click" I used code from below (as it's asked not to change code from below) 
 "document.getElementById('load-quote').addEventListener("click", printQuote, false);" 
 I suppose there is "dryer" way to write it but no knowledge at the moment how to
***/
document.getElementById('load-quote').addEventListener("click", getRandomColor, false);


/***
Added Interval of 5 sec with setInterval command - used idea from:
https://www.w3schools.com/jsref/met_win_setinterval.asp
***/

setInterval(function(){ 
  printQuote (); 
  getRandomColor(); 
}, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);