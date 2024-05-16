// Jour 1: Fondamentaux
/*
1. Écrire une fonction pour vérifier si un nombre est pair ou impair.
2. Créer une fonction qui prend un tableau de nombres et renvoie la somme de ces nombres.
3. Écrire une fonction pour convertir une chaîne en lettres majuscules.
4. Créer une fonction pour calculer la factorielle d'un nombre.
5. Écrire une fonction qui prend un tableau de nombres et renvoie le plus grand nombre de ce tableau.
*/

// Function to check if a number is even or odd
function isEven(number) {
    // If the remainder of the number divided by 2 is equal to 0, return true
    if (number % 2 === 0) {
        return true;
    } else {
        // Otherwise, return false
        return false;
    }
}
console.log(isEven(4)); // true
console.log(isEven(5)); // false


// Function to calculate the sum of an array of numbers
function sumArray(array) {
    // Initialize a variable to store the sum, starting at 0
    let sum = 0;
    // Iterate over each element in the array
    for (let i = 0; i < array.length; i++) {
        // Add the current element to the sum
        sum += array[i];
    }
    // Return the calculated sum
    return sum;
}

