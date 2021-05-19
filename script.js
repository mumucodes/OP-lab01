const container = document.getElementById('container');

//create HTML elements for DOM
// const style = document.querySelector('#stylelink');
const inputTitle = document.createElement('input');
const inputAuthor = document.createElement('input');
const inputPages = document.createElement('input');
const inputReadYes = document.createElement('input');
const inputReadNo = document.createElement('input');
const labelTitle = document.createElement('label');
const labelAuthor = document.createElement('label');
const labelPages = document.createElement('label');
const labelReadYes = document.createElement('label');
const labelReadNo = document.createElement('label');

//create radioInput Array

radioInput = [];
radioInput.push(inputReadYes, inputReadNo);

//add properties to radioInput Objects
inputReadYes.type = 'radio';
inputReadYes.value = '1';
inputReadYes.name = 'userInputRadio';

inputReadNo.type = 'radio';
inputReadNo.value = '2';
inputReadNo.name = 'userInputRadio';

//add text to labels
labelTitle.textContent = 'Title';
labelAuthor.textContent = 'Author';
labelPages.textContent = 'Pages';
labelReadNo.textContent = 'already read? no';
labelReadYes.textContent = 'yes';

//append elements to DOM
container.append(labelTitle, inputTitle, labelAuthor,inputAuthor, labelPages, inputPages, labelReadNo,inputReadNo, labelReadYes, inputReadYes);

//book constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        console.log (`"${this.title} by ${this.author}, ${this.pages} pages, ${this.read[true]?'already read': 'not read yet'}"`)
    };  
}

//set event listeners
const submit = document.querySelectorAll('input.type');

console.dir(submit)

//create variables for user input capture




firstbook = new Book('dog', 'george', 12, true);
console.log(firstbook)
firstbook.info();

firstbook.append;
let myLibrary = [];


function addBookToLibrary(){

}