document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('puzzleForm');
    const unscrambleInputs = document.querySelectorAll('#unscrambleArea input');
    const letterInputs = ['letterA1', 'letterA2', 'letterA3', 'letterA4', 'letterA5', 
                          'letterA6', 'letterA7', 'letterA8', 'letterA9', 'letterA10', 
                          'letterA11', 'letterA12', 'letterA13', 'letterA14', 'letterA15'];

    function getCollectedLetters() {
        return letterInputs.map(name => {
            let input = document.getElementsByName(name)[0];
            return input && input.value ? input.value : '_';
        }).join('');
    }

    function updateCollectedLetters() {
        let letters = getCollectedLetters();
        let usedLetters = Array.from(unscrambleInputs).map(input => input.value).join('');

        usedLetters.split('').forEach(usedLetter => {
            letters = letters.replace(usedLetter, '_');
        });

        document.getElementById('collectedLetters').textContent = letters;
    }

    letterInputs.forEach(name => {
        let input = document.getElementsByName(name)[0];
        input.addEventListener('input', updateCollectedLetters);
    });

    unscrambleInputs.forEach(input => {
        input.addEventListener('input', updateCollectedLetters);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let userAnswer = Array.from(unscrambleInputs).map(input => input.value).join(' ').trim();
        if (userAnswer.toLowerCase() === "voting rights act") {
            alert("Correct! Well done.");
        } else {
            alert("Incorrect. Please try again.");
        }
    });
});








