// Jour 4
/*
Écrire une fonction pour inverser un tableau.
Implémenter une fonction de tri de tableau simple (par exemple, tri à bulles).
Créer une fonction pour filtrer un tableau en fonction d'un critère donné.
Écrire une fonction pour concaténer deux tableaux sans utiliser la méthode concat().
Implémenter une fonction pour calculer la moyenne des nombres dans un tableau.
*/

//Fonction inverser tableau
function inverserTableau(tab) {
    let tabInverser = tab.reverse();
    return tabInverser;
}
const reversed = ["Volvo", "Toyota", "Ford"];
console.log("Reversed Array:" + inverserTableau(reversed));
//Resultat Reversed Array:Ford,Toyota,Volvo


// //Fonction pour tri à bulles
function triBulles(tab) {
    // Initialize variables i, j, and temp
    let i, j, temp;
    // Iterate through each element in the array
    for (i = 0; i < tab.length; i++) {
        // Iterate through each element in the array, starting from the current element
        for (j = 0; j < tab.length - 1; j++) {
            // Check if the current element is greater than the next element
            if (tab[j] > tab[j + 1]) {
                // If it is, swap the current element with the next element
                temp = tab[j];
                tab[j] = tab[j + 1];
                tab[j + 1] = temp;
                // Log the swapped elements to the console
                console.log("Swapped elements: " + tab[j] + " and " + tab[j + 1]);
            }
        }
    }

    // Return the sorted array
    return tab;
}


//Fonction pour filtrer un tableau en fonction d'un critère donné
function filterArray(arr, condition) {
    // Initialize an empty array to store the filtered elements
    let filteredArray = [];

    // Iterate through each element in the input array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element passes the condition
        if (condition(arr[i])) {
            // If it does, add it to the filtered array
            filteredArray.push(arr[i]);
        }
    }

    // Return the filtered array
    return filteredArray;
}
// Example usage:
// Filter an array of numbers to only include even numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let evenNumbers = filterArray(numbers, function (num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4, 6]


//Fonction pour concaténer deux tableaux
// function concatArrays(arr1, arr2) {
//     //Initialize an empty array to store the concatenated elements
//     let concatenatedArray = [];
//     //Iterate through each element in the first array
//     for (let i = 0; i < arr1.length; i++) {
//         //Add the current element to the concatenated array
//         concatenatedArray.push(arr1[i]);
//     }
//     //Iterate through each element in the second array
//     for (let j = 0; j < arr2.length; j++) {
//         //Add the current element to the concatenated array
//         concatenatedArray.push(arr2[j]);
//     }
//     //Return the concatenated array
//     return concatenatedArray;
// }
// //Example usage:
// //Concatenate two arrays of numbers
// let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8,
//     9, 10, 11, 12, 13, 14, 15, 16, 17, 18
//     , 19, 20];
// let numbers2 = [21, 22, 23, 24, 25, 26, 27, 28,
//     29, 30, 31, 32, 33, 34, 35, 36, 37, 38
//     , 39, 40];
// let concatenatedNumbers = concatArrays(numbers1, numbers2);

//Fonction pour calculer la moyenne des nombres dans un tableau
// function calculateAverage(arr) {
//     // Initialize a variable to store the sum of the elements
//     let sum = 0;
//     // Iterate through each element in the array
//     for (let i = 0; i < arr.length; i++) {
//         // Add the current element to the sum
//         sum += arr[i];
//     }
//     // Calculate the average by dividing the sum by the number of elements
//     let average = sum / arr.length;
//     // Return the average
//     return average;
// }
// // Example usage:
// // Calculate the average of an array of numbers
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9
//     , 10, 11, 12, 13, 14, 15, 16, 17, 18,
//     19, 20];
// let average = calculateAverage(numbers);