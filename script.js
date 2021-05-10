const newBookEntry = document.getElementById('newEntry');

newBookEntry.addEventListener('submit', (e) => {
    const data = new FormData(newBookEntry);
    const title = data.get('title');
    const author = data.get('author');
    const pages = data.get('pages');
    const input = document.getElementById('input:checked');
    const read = radioChosen.value;
})

console.log(newBookEntry.title);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = 0;
    this.read = false;
    this.info = function(){
        return `"${this.title} by ${this.author}, ${this.pages} pages, ${this.read[true]?'already read': 'not read yet'}"`
    };
}

let myLibrary = [];


function addBookToLibrary(){

}