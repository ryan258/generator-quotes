console.log('testing 👻')

// [
//   {
//   "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
//   "author": "Thomas Edison"
//   },

const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = []

// Show loading
function loading() {
  loader.hidden = false
  quoteContainer.hidden = true
}

// Hide loading
function complete() {
  loader.hidden = true
  quoteContainer.hidden = false
}

// Show new quote
function newQuote() {
  loading()
  // pick random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]

  // Check quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote')
  } else {
    quoteText.classList.remove('long-quote')
  }

  authorText.textContent = quote.author || 'Unknown 🤔'
  quoteText.textContent = quote.text
  // Hide spinner, show quote
  complete()
}

// Get quotes from API
async function getQuotes() {
  loading()
  const apiUrl = 'https://type.fit/api/quotes'
  try {
    const response = await fetch(apiUrl)
    apiQuotes = await response.json()
    newQuote()
  } catch (error) {
    console.log(error)
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
  // open twitter link in a new tab
  window.open(twitterUrl, '_blank')
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

// On load
getQuotes()
