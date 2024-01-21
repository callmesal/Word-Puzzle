document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('puzzleForm');
    const unscrambleInputs = document.querySelectorAll('#unscrambleArea input');
    const letterInputs = document.querySelectorAll('.blank input');
    const correctAnswer = "voting rights act"; // Correct answer set here

    // ... all other JavaScript functions ...

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let userAnswer = Array.from(unscrambleInputs).map(input => input.value.trim()).join(' ').toLowerCase();
        if (userAnswer === correctAnswer) {
            alert("Correct! Well done.");
        } else {
            alert("Incorrect. Please try again.");
        }
    });
});
