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
function triBulles(tab) {
    let i, j, temp;
    for (i = 0; i < tab.length; i++) {
        for (j = 0; j < tab.length - 1; j++) {
            if (tab[j] > tab[j + 1]) {
                temp = tab[j];
                tab[j] = tab[j + 1];
                tab[j + 1] = temp;
            }
        }
    }
    return tab;
}
const sortBubbles = ["Volvo", "Toyota", "Ford"];
console.log(triBulles(sortBubbles));