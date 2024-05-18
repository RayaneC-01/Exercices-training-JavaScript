// Jour 4
/*
Écrire une fonction pour inverser un tableau.
Implémenter une fonction de tri de tableau simple (par exemple, tri à bulles).
Créer une fonction pour filtrer un tableau en fonction d'un critère donné.
Écrire une fonction pour concaténer deux tableaux sans utiliser la méthode concat().
Implémenter une fonction pour calculer la moyenne des nombres dans un tableau.
*/

//Fonction inverser tableau 
// function inverserTableau(tab) {
//     let tabInverser = tab.reverse();
//     return tabInverser;
// }
// const reversed = ["Volvo", "Toyota", "Ford"];
// console.log("Reversed Array:" + inverserTableau(reversed));
//Resultat Reversed Array:Ford,Toyota,Volvo

//Fonction pour tri à bulles
// function triBulles(tab) {
//     // Initialize variables i, j, and temp
//     let i, j, temp;

//     // Iterate through each element in the array
//     for (i = 0; i < tab.length; i++) {
//         // Iterate through each element in the array, starting from the current element
//         for (j = 0; j < tab.length - 1; j++) {
//             // Check if the current element is greater than the next element
//             if (tab[j] > tab[j + 1]) {
//                 // If it is, swap the current element with the next element
//                 temp = tab[j];
//                 tab[j] = tab[j + 1];
//                 tab[j + 1] = temp;
//                 // Log the swapped elements to the console
//                 console.log("Swapped elements: " + tab[j] + " and " + tab[j + 1]);
//             }
//         }
//     }

//     // Return the sorted array
//     return tab;
// }