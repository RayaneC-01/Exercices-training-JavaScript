// Jour 3
/*
1.Écrire une fonction curry pour créer une version partiellement appliquée d'une fonction.
2.Implémenter une fonction récursive pour calculer la somme des chiffres d'un nombre.
3.Créer une fonction qui prend une chaîne et renvoie un objet contenant le nombre d'occurrences de chaque caractère dans la chaîne.
4.Écrire une fonction qui prend deux tableaux et renvoie un tableau contenant uniquement les éléments communs aux deux tableaux.
    5.Implémenter une fonction qui prend une fonction de rappel et l'exécute après un certain délai.
*/


/*Fonction Curry */
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


/*Fonction récursive pour calculer la somme des chiffres d'un nombre*/
// function sumOfDigits(n) {
//     // Si le nombre est négatif, convertissez-le en positif pour traiter ses chiffres
//     n = Math.abs(n);

//     // Cas de base : si le nombre a un seul chiffre, retourne simplement ce chiffre
//     if (n < 10) {
//         return n;
//     } else {
//         // Récursivement, divise le nombre par 10 pour obtenir le prochain chiffre et ajoutez-le à la somme des chiffres du reste du nombre
//         return n % 10 + sumOfDigits(Math.floor(n / 10));
//     }
// }
// Exemple d'utilisation :
// console.log(sumOfDigits(123)); // Affichera 6 (1 + 2 + 3 = 6)
// console.log(sumOfDigits(9876)); // Affichera 30 (9 + 8 + 7 + 6 = 30)

/*Fonction qui prend une chaîne et renvoie un objet contenant le nombre d'occurrences de chaque caractère dans la chaîne.*/
// function countChars(str) {
//     // Initialize an empty object to store the character counts
//     let obj = {};

//     // Iterate through each character in the input string
//     for (let i = 0; i < str.length; i++) {
//         // Check if the character is already in the object
//         if (obj[str[i]]) {
//             // If it is, increment its count
//             obj[str[i]]++;
//         } else {
//             // If not, add it to the object with a count of 1
//             obj[str[i]] = 1;
//         }
//     }
//     // Return the object containing the character counts
//     return obj;
// }
// Exemple d'utilisation :
// console.log(countChars("hahaha")); // Affichera {h: 3, a: 3}

//4.Écrire une fonction qui prend deux tableaux et renvoie un tableau contenant uniquement les éléments communs aux deux tableaux.
// function commonElements(array1, array2) {
//     // Convertir les tableaux en ensembles (sets)
//     let set1 = new Set(array1);
//     let set2 = new Set(array2);

//     // Initialiser un ensemble pour stocker les éléments communs
//     let commonSet = new Set();

//     // Itérer à travers le premier ensemble
//     set1.forEach(element => {
//         // Si l'élément est présent dans le deuxième ensemble, il est commun
//         if (set2.has(element)) {
//             commonSet.add(element); // Ajouter l'élément commun à l'ensemble commun
//             console.log(element); // Afficher l'élément commun
//         }
//     });

//     // Convertir l'ensemble commun en un tableau et le renvoyer
//     return Array.from(commonSet);
// }

//Implémenter une fonction qui prend une fonction de rappel et l'exécute après un certain délai.
function delay(func, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(func());
            } catch (error) {
                reject(error);
            }
        }, delay);
    });
}
// Test de la fonction avec console.log()
// delay(() => console.log("Hello world!"), 1000); // Affichera "Hello world!" après 1 seconde

import { getPixelColor, keyTap } from "robotjs";

// Fonction pour vérifier si l'arbre est présent
function checkTree() {
    // Capture d'écran de la zone où se trouve l'arbre
    let treeColor = getPixelColor(525, 400); // Coordonnées du pixel où se trouve l'arbre
    // Vérification de la couleur du pixel pour détecter l'arbre
    if (treeColor === "535353") { // Couleur de l'arbre
        return true;
    }
    return false;
}

// Boucle infinie pour sauter si un arbre est détecté
setInterval(() => {
    if (checkTree()) {
        keyTap("space");
    }
}, 100);
