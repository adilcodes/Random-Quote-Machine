// Fetching Quotes
let quotes = [];

fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((data) => console.log(quotes = [...data]));

// Targeting DOM elements
let text = document.getElementById("text");
let author = document.getElementById("author");
let tweet = document.getElementById("tweet-quote");
let newQuote = document.getElementById("new-quote");

/* Generating Random Number on Click
and accessing the quote from the
fetched quotes array based on that
random number */

newQuote.addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * 1640);
    text.innerHTML = quotes[randomNum].text;
    if(quotes[randomNum].author == null){
        author.innerHTML = "- Unknown";
    }else{
        author.innerHTML = `- ${quotes[randomNum].author}`;
    }
});

// Sharing quote to Twitter
tweet.addEventListener("click", () => {
    tweet.href = `https://twitter.com/intent/tweet?text="${text.innerHTML}"${author.innerHTML}`
})
