/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {quote: "Failure is simply the opportunity to begin again, this time more intelligently.",
   source: "Henry Ford",
   citation: "https://www.brainyquote.com/quotes/henry_ford_121339"
  },
  {quote: "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
   source: "Albert Einstein",
   citation: "https://www.goodreads.com/author/quotes/9810.Albert_Einstein",
   year: 1929,
  },
  {quote: "A crisis is an opportunity riding the dangerous wind.",
  source: "Chinese Proverb ",
  citation: "https://www.wow4u.com/chinese/"
 },
 {quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
 source: "Mahatma Gandhi"
},
{quote: "“That which does not kill us makes us stronger.”",
source: "Friedrich Nietzsche"
}
];
console.log(quotes[2]);
/***
 * `getRandomQuote` function
***/
function getRandomQuote(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}

console.log(getRandomQuote(quotes));


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);