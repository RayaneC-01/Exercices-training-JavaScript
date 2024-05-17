// Jour 3
/*
1.Écrire une fonction curry pour créer une version partiellement appliquée d'une fonction.
2.Implémenter une fonction récursive pour calculer la somme des chiffres d'un nombre.
3.Créer une fonction qui prend une chaîne et renvoie un objet contenant le nombre d'occurrences de chaque caractère dans la chaîne.
4.Écrire une fonction qui prend deux tableaux et renvoie un tableau contenant uniquement les éléments communs aux deux tableaux.
5.Implémenter une fonction qui prend une fonction de rappel et l'exécute après un certain délai.
*/


//Fonction Curry 
// function curry(f) {
//     return function (a) {
//         return function (b) {
//             return f(a, b);
//         };
//     };
// }
// //utilisation de la fonction
// function sum(a, b) {
//     return a + b;
// }
// let currySum = curry(sum);
// console.log(currySum(1)(2)); 


//Fonction récursive pour calculer la somme des chiffres d'un nombre
function sumOfDigits(n) {
    // Si le nombre est négatif, convertissez-le en positif pour traiter ses chiffres
    n = Math.abs(n);

    // Cas de base : si le nombre a un seul chiffre, retourne simplement ce chiffre
    if (n < 10) {
        return n;
    } else {
        // Récursivement, divise le nombre par 10 pour obtenir le prochain chiffre et ajoutez-le à la somme des chiffres du reste du nombre
        return n % 10 + sumOfDigits(Math.floor(n / 10));
    }
}
// Exemple d'utilisation :
console.log(sumOfDigits(123)); // Affichera 6 (1 + 2 + 3 = 6)
console.log(sumOfDigits(9876)); // Affichera 30 (9 + 8 + 7 + 6 = 30)

