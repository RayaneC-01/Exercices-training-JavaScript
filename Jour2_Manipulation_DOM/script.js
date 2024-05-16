// Jour 2
/*
1.Créer une page HTML avec un bouton. En utilisant JavaScript, ajoutez un événement clic au bouton qui affiche une boîte de dialogue avec un message.
2.Écrire un script qui change la couleur de fond d'un élément de page lorsque l'utilisateur passe sa souris dessus.
3.Créer un formulaire simple avec un champ de texte et un bouton. À la soumission du formulaire, récupérez la valeur du champ de texte et affichez-la dans la console.
4.Construire une liste à puces à partir d'un tableau d'éléments à l'aide de JavaScript.
5.Créer un carrousel d'images simple qui change automatiquement toutes les quelques secondes.
*/

// Button Event
// let button = document.getElementById("myButton");
// Add an event listener to the button
// button.addEventListener("click", function () {
//     // Display an alert box with a message when the button is clicked
//     alert("You clicked the button!");
// });

//Hover change Bg-color
// const element = document.getElementById("myElement");
// console.log(myElement);

// element.addEventListener('mouseover', () => {
//     element.style.backgroundColor = 'yellow';
// });

// element.addEventListener('mouseout', () => {
//     element.style.backgroundColor = '#fff';
// });

//récupérer la valeur du champ de texte et afficher dans la console
// let form = document.getElementById("myForm");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     let textInput = document.getElementById("text");
//     console.log(textInput.value);
// });


// Liste à puces à partir d'un tableau d'éléments
const cars = ["Volvo", "Toyota", "Kia", "Audi", "Ferrari", "Peugeot"];
const ul = document.getElementById("myList");

// Boucle sur le tableau d'éléments
for (let i = 0; i < cars.length; i++) {
    // Crée un élément de liste (li)
    const li = document.createElement("li");

    // Ajoute le texte de l'élément de liste
    li.appendChild(document.createTextNode(cars[i]));

    // Ajoute l'élément de liste à la liste (ul)
    ul.appendChild(li);
}

//carrousel d'images simple qui change automatiquement toutes les quelques secondes

