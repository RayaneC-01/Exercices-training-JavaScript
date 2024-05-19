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
