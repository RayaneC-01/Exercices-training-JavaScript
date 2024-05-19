// Jour 6
/*
Écrire une fonction pour vérifier si une chaîne est un palindrome.
Implémenter une fonction pour compter le nombre de voyelles dans une chaîne.
Créer une fonction pour inverser les mots dans une phrase.
Écrire une fonction pour générer une chaîne aléatoire d'une longueur donnée.
Implémenter une fonction pour vérifier si une chaîne est un anagramme d'une autre.
*/

//Fonction pour vérifier si une chaine est un palindrome
function isPalindrome(str) {
    // Supprimer les espaces et convertir la chaîne en minuscules pour une comparaison insensible à la casse
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();

    // Trouver l'inverse de la chaîne nettoyée
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Comparer la chaîne nettoyée à son inverse
    return cleanedStr === reversedStr;
}
// Exemples d'utilisation
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Kayak")); // true


//Implémenter une fonction pour compter le nombre de voyelles dans une chaîne
function countVowels(str) {
    let number = 0;
    let voyelles = ["a", "e", "i", "o", "u", "y"];
    for (let elementsOfVowels of str.toLowerCase()) {
        if (voyelles.includes(elementsOfVowels)) {
            number++;
        }
    }
    return number;
}
// Exemples d'utilisation
console.log(countVowels("Hello World")); // 3


//Implémenter une fonction pour compter le nombre de consonne dans une chaine
function countConsonnes(str) {
    // Initialize a variable to store the number of consonants
    let number = 0;
    // Define an array of consonants
    let consonnes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
    // Iterate through each character in the input string
    for (let elements of str.toLowerCase()) {
        // Check if the current character is in the array of consonants
        if (consonnes.includes(elements)) {
            // If it is, increment the number of consonants
            number++;
        }
    }

    // Return the number of consonants
    return number;
}
// Exemples d'utilisation
let strEx1 = "Bonjour tout le monde !";
console.log("Il y'a " + countConsonnes(strEx1) + " consonnes dans la phrase");


//Fonction pour inverser les mots dans une phrase
function reverseWords(str) {
    // Split the input string into an array of words
    let words = str.split(' ');
    // Reverse the order of the words in the array
    let reversedWords = words.reverse();
    // Join the reversed words back into a string separated by spaces
    let reversedSentence = reversedWords.join(' ');
    // Return the reversed sentence
    return reversedSentence;
}
// Exemples d'utilisation
console.log(reverseWords("Bonjour ici, Hello world !")); // World Hello

//Fonction pour inverser les lettres dans le mot et dans la phrase (Ex: Bonjour ici => ici roujnoB)
function reverseLetters(str) {
    // Initialize an empty string to store the reversed string
    let reversedStr = '';
    // Iterate through each character in the input string
    for (let i = str.length - 1; i >= 0; i--) {
        // Add the current character to the reversed string
        reversedStr += str[i];
    }
    // Return the reversed string
    return reversedStr;
}
// Exemples d'utilisation
console.log(reverseLetters("Bonjour ici, Hello world !")); // ici roujnoB, world ! olleH


//Fonction pour générer une chaîne aléatoire d'une longueur donnée.
function randomString(length) {
    // Initialize an empty string to store the random string
    let result = '';
    // Define the characters that can be used in the random string
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#&~'{([-|è_\ç^@à])}$£%ù!</>:";
    // Get the length of the characters string
    let charactersLength = characters.length;
    // Iterate the specified number of times to generate the random string
    for (let i = 0; i < length; i++) {
        // Append a random character to the result string
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    // Return the generated random string
    return result;
}
// Exemples d'utilisation
console.log(randomString(15));

//Implémenter une fonction pour vérifier si une chaîne est un anagramme d'une autre.
