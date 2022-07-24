const btn = document.querySelector("#new-quote");
const quoteEl = document.querySelector(".quote");
const personEl = document.querySelector(".person");

// API request

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3d7a66b8b0msh1137feecc328ec0p181b92jsn1ba7552e67b8",
    "X-RapidAPI-Host": "free-famous-quotes.p.rapidapi.com",
  },
};

const fetchMotivationalQuote = () => {
  fetch("https://free-famous-quotes.p.rapidapi.com/", options)
    .then((response) => response.json())
    .then((response) => {
      quote = response.quote;
      author = response.author;
      renderQuote(quote, author);
    })
    .catch((err) => console.error(err));
};

btn.addEventListener("click", () => fetchMotivationalQuote());

const renderQuote = (quote, author) => {
  quoteEl.textContent = quote;
  personEl.textContent = author;
};
