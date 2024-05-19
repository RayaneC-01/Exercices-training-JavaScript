// Jour 7
/*
Construire un jeu de pendu en JavaScript.
Développer un gestionnaire de tâches qui permet aux utilisateurs de créer, éditer et supprimer des tâches.
Créer un mini-jeu de mémoire qui affiche des cartes avec des images et demande aux joueurs de les associer.
Implémenter une calculatrice simple avec des opérations de base (addition, soustraction, multiplication, division).
Développer une application de chat en temps réel utilisant des technologies comme WebSocket ou Firebase Realtime Database.
*/

//Fonction pour Jeu de pendu
let word = "javascript"; // The word to be guessed
let guessedLetters = []; // Array to store guessed letters
let attempts = 10; // Number of attempts allowed
let wordArray = word.split(""); // Split the word into an array
let [mask, setMask] = wordArray.map(() => "_"); // Create a mask array with underscores

console.log("Let's play Hangman!"); // Display game start message
console.log(mask.join(" ")); // Display masked word

while (attempts > 0) {
    let guess = prompt("Please guess a letter or type 'quit' to exit: ").toLowerCase(); // Get user input

    if (guess === "quit") {
        break; // Exit the game if user types 'quit'
    }

    if (guess.length !== 1) {
        console.log("Please input only one letter at a time."); // Display error message if user inputs more than one letter
        continue;
    }

    if (guessedLetters.includes(guess)) {
        console.log("You already guessed this letter."); // Display error message if user guesses a letter already guessed
        continue;
    }

    guessedLetters.push(guess); // Add guessed letter to guessedLetters array

    let correctGuess = false;
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === guess) {
            mask[i] = guess; // Replace underscore with guessed letter in mask array
            correctGuess = true;
        }
    }

    if (correctGuess) {
        console.log("Correct guess!"); // Display success message if guessed letter is in the word
    } else {
        console.log("Incorrect guess."); // Display error message if guessed letter is not in the word
        attempts--; // Decrement attempts
    }

    console.log(mask.join(" ")); // Display masked word with guessed letters

    if (!mask.includes("_")) {
        console.log("Congratulations, you won!"); // Display win message if all letters are guessed
        break;
    }

    if (attempts === 0) {
        console.log("Game over, the word was " + word); // Display loss message if attempts run out
    }
}