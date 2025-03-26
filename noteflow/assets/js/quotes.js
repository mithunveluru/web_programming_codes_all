document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
        { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
        { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
        { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" },
        { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
        { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
        { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
        { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
        { text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
        { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Anonymous" },
        { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
        { text: "Your attitude, not your aptitude, will determine your altitude.", author: "Zig Ziglar" },
        { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
        { text: "Challenges are what make life interesting. Overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
        { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" }
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