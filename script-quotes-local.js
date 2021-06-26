// localQuotes is from quotes.js in index.html

function newQuote() {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
  console.log(quote)
}

newQuote()
