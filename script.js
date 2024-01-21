document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('puzzleForm');
    const unscrambleInputs = document.querySelectorAll('#unscrambleArea input');
    const letterInputs = form.querySelectorAll('.blank input');
    const correctAnswer = "voting rights act"; // Set the correct answer here

    function getCollectedLetters() {
        return Array.from(letterInputs).map(input => input.value || '_').join('');
    }

    function updateCollectedLetters() {
        let letters = getCollectedLetters();
        let usedLetters = Array.from(unscrambleInputs).map(input => input.value).join('');

        usedLetters.split('').forEach(usedLetter => {
            letters = letters.replace(usedLetter, '_');
        });

        document.getElementById('collectedLetters').textContent = letters;
    }

    Array.from(letterInputs).forEach(input => {
        input.addEventListener('input', updateCollectedLetters);
    });

    Array.from(unscrambleInputs).forEach(input => {
        input.addEventListener('input', updateCollectedLetters);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let userAnswer = Array.from(unscrambleInputs).map(input => input.value).join(' ').toLowerCase();
        if (userAnswer === correctAnswer) {
            alert("Correct! Well done.");
        } else {
            alert("Incorrect. Please try again.");
        }
    });
});

