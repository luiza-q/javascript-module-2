/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

// 1:
const elem = document.querySelectorAll("p");

function pOfSix(p) {
    if (p.length === 6) {
        console.log(p)
    }
}

console.log(pOfSix(elem));

// 2:
const elem2 = document.querySelector("div");
console.log(elem2);

// 3:
const elem3 = document.querySelector("#jumbotron-text");
console.log(elem3);

// 4:
const elem4 = document.querySelectorAll(".primary-content p");

function lengthOf3 (x) {
    if (x.length === 3) {
        console.log(x);
    }
}

console.log(lengthOf3(elem4));

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

/*
const backgroundButton = document.querySelector("#bgrChangeBtn");
backgroundButton.addEventListener("click", changeColor);

function changeColor () {
    const backgr = document.querySelector("body");
    backgr.style.backgroundColor = 'yellow';
}
*/



/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const addTextButton = document.querySelector("#addTextBtn");

const addNewText = (e) => {
    e.preventDefault()
    generateNewTextDOM('some new text')
}

const generateNewTextDOM = (texto) => {
    const learnMoreArticles = document.querySelector('#mainArticles');
    const newArticle = document.createElement('article')
    const newP = document.createElement('p')

    learnMoreArticles.appendChild(newArticle);

    newArticle.classList.add('article');
    newArticle.appendChild(newP);

    newP.textContent = texto;
    newP.classList.add('article-lead');
}

addTextButton.addEventListener("click", addNewText);

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const largerLinksButton = document.querySelector('#largerLinksBtn');

const enlargeLinks = () => {
    const as = document.querySelectorAll('a');
    as.style.fontSize = '2em';
}

largerLinksButton.addEventListener('click', enlargeLinks);

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

const addInputTextButton = document.querySelector("#addArticleBtn");

addInputTextButton.addEventListener('click', () => { 
    const textBox = document.querySelector('.form-control');

    const text = textBox.value;
    textBox.value = '';

    if (text.length > 0) {
        generateNewTextDOM(text);
    } 

    
});



/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const bckgrColors = ['yellow', 'green', 'blue', 'red', 'grey'];

const backgroundButton = document.querySelector("#bgrChangeBtn");


let colorIndex = 0;

const changeColor = () => {
    const backgr = document.querySelector("body");
    backgr.style.backgroundColor = bckgrColors[colorIndex % 5];
    colorIndex++;
}

backgroundButton.addEventListener("click", changeColor);