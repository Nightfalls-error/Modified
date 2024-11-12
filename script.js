// Slang words data with example sentences
const slangWords = [
    { word: "Astig", meaning: "Cool or awesome", example: "That new song is so astig!" },
    { word: "Gigil", meaning: "The urge to pinch or squeeze someone cute", example: "I get gigil when I see my little nephew." },
    // ... add examples for all slang words
];

const button = document.getElementById('randomSlangBtn');
const display = document.getElementById('slangDisplay');
let lastIndex = -1;
const wordLog = [];

// Generate random slang word with example sentence
button.addEventListener('click', () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * slangWords.length);
    } while (randomIndex === lastIndex);

    const randomSlang = slangWords[randomIndex];
    display.textContent = `${randomSlang.word}: ${randomSlang.meaning}\nExample: ${randomSlang.example}`;
    lastIndex = randomIndex;

    // Add word to log
    wordLog.push(randomSlang);
    localStorage.setItem('wordLog', JSON.stringify(wordLog));
});
