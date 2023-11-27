const quotes = [
  "Every child is an artist; the problem is staying an artist when you grow up - Pablo Picasso",
  "It’s like if you want something so badly go out and grab, just keep on doing it. - Ed Sheeren",
  "I think team first. It allows me to succeed, and it allows my team to succeed. - Lebron James",
  "If you’re walking down the right path and you’re willing to keep walking, eventually you’ll make progress. - Barack Obama",
  "Be the change you wish to see in the world. - Mahatma Gandhi",
  "The people who are crazy enough to think they can change the world are the ones who do. - Steve Jobs",
  "As we look ahead into the next century, leaders will be those who empower others. - Bill Gates",
  "In the middle of difficulty lies opportunity. - Albert Einstein"
];

const images = [
  "assets/Pablo Picasso.jpg",
  "assets/Ed Sheeren.jpg",
  "assets/Lebron James.jpg",
  "assets/Barack Obama.jpg",
  "assets/Mahatma Gandhi.jpg",
  "assets/Steve Jobs.jpg",
  "assets/Bill Gates.jpg",
  "assets/Albert Einstein.jpg"
];

function setQuote() {
  const buttonContainer = document.querySelector(".button-container");
  const quoteContainer = document.querySelector(".quote-container");
  const image = document.getElementById("image");
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const quoteParts = randomQuote.split(" - ");
  const randomImage = images[randomIndex];

  console.log(quoteParts);
  image.src = randomImage;
  quote.innerHTML = quoteParts[0];
  author.innerHTML = `- ${quoteParts[1]}`;
  buttonContainer.style.height = "auto";
  buttonContainer.style.paddingTop = "30px";
  quoteContainer.style.display = "flex";
}