// Jour 7
/*
Construire un jeu de pendu en JavaScript.
Développer un gestionnaire de tâches qui permet aux utilisateurs de créer, éditer et supprimer des tâches.
Créer un mini-jeu de mémoire qui affiche des cartes avec des images et demande aux joueurs de les associer.
Implémenter une calculatrice simple avec des opérations de base (addition, soustraction, multiplication, division).
Développer une application de chat en temps réel utilisant des technologies comme WebSocket ou Firebase Realtime Database.
*/

//Fonction pour Jeu de pendu
function pendu() {
    let mot = "poulet";
    let motCacher = mot.split("");
    let motAfficher = motCacher.join("_");
    let lettre = prompt("Entrez une lettre");
    let lettreCacher = motCacher.join(" ");
    let lettreAfficher = motCacher.join(" ");
    let lettresTrouvees = new Array(50).fill(0);

}