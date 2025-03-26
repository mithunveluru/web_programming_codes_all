document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
    ];

    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
    const newQuoteBtn = document.getElementById("new-quote");

    function changeQuote() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteText.textContent = `"${randomQuote.text}"`;
        quoteAuthor.textContent = `- ${randomQuote.author}`;
    }   

    newQuoteBtn.addEventListener("click", changeQuote);

    // Load first quote on page load
    changeQuote();
});
