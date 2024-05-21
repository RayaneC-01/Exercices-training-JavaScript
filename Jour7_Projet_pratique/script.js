// Jour 7
/*
Construire un jeu de pendu en JavaScript.
Développer un gestionnaire de tâches qui permet aux utilisateurs de créer, éditer et supprimer des tâches.
Créer un mini-jeu de mémoire qui affiche des cartes avec des images et demande aux joueurs de les associer.
Implémenter une calculatrice simple avec des opérations de base (addition, soustraction, multiplication, division).
Développer une application de chat en temps réel utilisant des technologies comme WebSocket ou Firebase Realtime Database.
*/

// Initialiser un tableau de mots à utiliser dans le jeu du pendu
const words = ["javascript", "programmation", "code"];

// Sélectionner un mot aléatoire dans le tableau
let selectedWord = words[Math.floor(Math.random() * words.length)];

// Remplacer chaque lettre du mot sélectionné par un tiret bas et stocker le résultat dans une variable
let displayWord = selectedWord.split('').map(letter => '_').join(' ');

// Initialiser un tableau vide pour stocker les lettres devinées
let guessedLetters = [];

// Afficher l'état initial du mot avec des tirets
document.getElementById('wordDisplay').innerText = displayWord;
// Fonction pour gérer la saisie utilisateur pour deviner une lettre
function guessLetter() {
    // Obtenir la saisie utilisateur et la convertir en minuscules
    let input = document.getElementById('letterInput').value.toLowerCase();

    // Vérifier si la saisie est un caractère unique et n'a pas été devinée auparavant
    if (input.length !== 1 || guessedLetters.includes(input)) return;

    // Ajouter la lettre devinée au tableau des lettres devinées
    guessedLetters.push(input);

    // Mettre à jour la variable displayWord pour afficher les lettres devinées
    let updatedDisplayWord = selectedWord.split('').map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');

    // Afficher le mot mis à jour
    document.getElementById('wordDisplay').innerText = updatedDisplayWord;

    // Vérifier si l'utilisateur a deviné le mot correctement
    if (updatedDisplayWord === selectedWord) {
        // Afficher un message de succès
        document.getElementById('message').innerText = "Félicitations! Vous avez deviné le mot.";
    }

    // Vider le champ de saisie
    document.getElementById('letterInput').value = '';
}

//Fonction Gestionnaire de Tache 
function addTask() {
    const taskText = document.getElementById('taskInput').value;
    if (taskText === '') return;

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerHTML = `
        <span>${taskText}</span>
        <button onclick="editTask(this)">Éditer</button>
        <button onclick="deleteTask(this)">Supprimer</button>
    `;
    document.getElementById('taskList').appendChild(taskDiv);
    document.getElementById('taskInput').value = '';
}
//Fonction Gestionnaire de Tache 
function editTask(button) {
    const taskSpan = button.parentElement.querySelector('span');
    const newTaskText = prompt("Modifier la tâche :", taskSpan.innerText);
    if (newTaskText !== null) {
        taskSpan.innerText = newTaskText;
    }
}
//Fonction Gestionnaire de Tache 
function deleteTask(button) {
    const taskDiv = button.parentElement;
    taskDiv.remove();
}

//Fonction Jeu de mémoire
const images = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const cards = [...images, ...images].sort(() => 0.5 - Math.random());
let firstCard, secondCard;

function flipCard(card) {
    if (card.innerText !== '' || secondCard) return;
    card.innerText = card.dataset.image;

    if (!firstCard) {
        firstCard = card;
    } else {
        secondCard = card;
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (firstCard.dataset.image === secondCard.dataset.image) {
        firstCard.style.backgroundColor = 'green';
        secondCard.style.backgroundColor = 'green';
    } else {
        firstCard.innerText = '';
        secondCard.innerText = '';
    }
    firstCard = null;
    secondCard = null;
}

const gameBoard = document.getElementById('gameBoard');
cards.forEach(image => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.image = image;
    card.onclick = () => flipCard(card);
    gameBoard.appendChild(card);
});

