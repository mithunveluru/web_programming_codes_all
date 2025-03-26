const flashcards = [
    { question: "What is React?", answer: "A JavaScript library for building UI" },
    { question: "What is an array?", answer: "A data structure that holds multiple values" },
    { question: "What is an event listener?", answer: "A function that listens for user interactions" },
    { question: "What is HTML?", answer: "A markup language used to structure web pages" },
    { question: "What is CSS?", answer: "A stylesheet language used to style web pages" },
    { question: "What is JavaScript?", answer: "A programming language for web development" },
    { question: "What is the DOM?", answer: "A representation of the web page in a structured format" },
    { question: "What is a closure in JavaScript?", answer: "A function that retains access to its parent scope" },
    { question: "What is the difference between == and ===?", answer: "'==' compares values, '===' compares values and types" },
    { question: "What is an API?", answer: "A set of rules for communicating between software applications" },
    { question: "What is REST?", answer: "An architectural style for designing networked applications" },
    { question: "What is a promise in JavaScript?", answer: "An object representing the eventual completion of an async operation" },
    { question: "What is localStorage?", answer: "A web storage API for storing data persistently in the browser" },
    { question: "What is a CSS Grid?", answer: "A layout system for creating complex web designs" },
    { question: "What is Flexbox?", answer: "A CSS layout model for distributing space within a container" },
    { question: "What is a media query?", answer: "A CSS rule for applying styles based on screen size" },
    { question: "What is responsive design?", answer: "An approach to web design that adapts to different screen sizes" },
    { question: "What is a progressive web app (PWA)?", answer: "A web app with enhanced capabilities like offline access" },
    { question: "What is CORS?", answer: "A security feature that controls cross-origin requests" },
    { question: "What is the difference between GET and POST requests?", answer: "GET retrieves data, POST sends data to the server" },
    { question: "What is AJAX?", answer: "A technique for making asynchronous HTTP requests" },
    { question: "What is a web socket?", answer: "A protocol for real-time communication over the web" }
];


let currentIndex = 0;
let timer = 0, totalTimer = 0;
let timerInterval, totalTimerInterval;
const flashcard = document.querySelector(".flashcard");
const questionEl = document.querySelector(".question");
const answerEl = document.querySelector(".answer");
const timerEl = document.getElementById("timer");
const totalTimerEl = document.getElementById("total-timer");
const progressEl = document.getElementById("progress");

function startTimer() {
    clearInterval(timerInterval);
    timer = 0;
    timerEl.textContent = "0s";
    timerInterval = setInterval(() => {
        timer++;
        timerEl.textContent = `${timer}s`;
    }, 1000);
}

function startTotalTimer() {
    totalTimerInterval = setInterval(() => {
        totalTimer++;
        totalTimerEl.textContent = `${totalTimer}s`;
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    const flashcard = document.querySelector(".flashcard");
    const flipBtn = document.getElementById("flip-card");

    flipBtn.addEventListener("click", () => {
        flashcard.classList.toggle("flipped");
    });
});



document.getElementById("next-card").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    updateFlashcard();
});

document.getElementById("prev-card").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    updateFlashcard();
});

function updateFlashcard() {
    flashcard.classList.remove("flipped");
    questionEl.textContent = flashcards[currentIndex].question;
    answerEl.textContent = flashcards[currentIndex].answer;
    progressEl.textContent = `${currentIndex + 1} / ${flashcards.length}`;
    startTimer();
}

startTotalTimer();
updateFlashcard();
