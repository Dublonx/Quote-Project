// Quote
const quotes = [
  "Walang impossible sa taong may pangarap.",
  "Ang tagumpay ay nagsisimula sa malkkt na bagay.",
  "Matuto sa kahapon, mabuhay para sa ngayon.",
  "Ang pagsubok ay parte ng tagumpay.",
  "Lahat ng bagay ay may tamang panahon.",
  "Kung may tiyaga may nilaga.",
  "Ang pag-asa ay palaging na sa tabi, kaya't wag susuko.",
  "Ang pagkakaibigan ay isang kayamanan.",
  "Ang pag aaral ay siyang magdadala sa tagumpay.",
  "Ang tunay na yaman ay wala sa bulsa.",
  "Ang kahirapan ay hindi hadlang sa pangarap.",
  "Ang pagkakamali ay parte ng pagkatuto.",
  "Sipag at tiyaga, lahat ay makakamit.",
  "Magtiwala sa sarili, ikaw ang susi ng tagumpay.",
  "Ang buhay ay isang paglalakbay, hindi karera.",
];
const authors = [
  "Jm",
  "Eliza",
  "Angel",
  "Mark",
  "Mike",
  "Kyle",
  "Gwen",
  "Chan",
  "Emily",
  "Elvie",
  "Jay",
  "Sais",
  "Rei",
  "Justin",
  "Ashly",
];

function newQuote() {
  let randomQuotes = Math.floor(Math.random() * quotes.length);
  let randomAuthors = Math.floor(Math.random() * authors.length);
  let randomQuote = quotes[randomQuotes];
  let randomAuthor = authors[randomAuthors];
  
  document.getElementById('quoteText').innerHTML = "“" + randomQuote + "”";
  document.getElementById('author').innerHTML = "– " + randomAuthor;
}

// Github Account
function gitHub() {
  window.location.href = "https://github.com/Dublonx";
}