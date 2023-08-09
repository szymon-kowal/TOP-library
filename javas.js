let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

// let elementToRemove = 3;
// function removeBookFromLibrary() {
//     myLibrary = myLibrary.filter(item => item !== elementToRemove);
// }

function displayLibrary() {
    const container = document.querySelector('.grid-container');

    let html = '';
    for (const book of myLibrary) {
        html += `<div class="grid-element">
                    <p>"${book.title}"</p>
                    <p>${book.author}</p>
                    <p>${book.pages}</p>
                    <div class="buttons-grid">
                        <button class="butt ${book.read === "true" ? "read" : "nonread"}">Read</button>
                        <button class="butt">Remove</button>
                    </div>
                </div>`
    }
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
    // Displaying the modal
    const buttonAdd = document.querySelector(".add-book");

    buttonAdd.addEventListener('click', function() {
        const modal = document.querySelector('.modal');
        modal.style.display = "block";

        const overlay = document.querySelector('.overlay');
        overlay.style.display = "block";

        overlay.addEventListener('click', function(){
            overlay.style.display = "none";
            modal.style.display = 'none';
        });
    });
    // Adding fuctionality to submit button
    const form = document.querySelector('.add-book-form');
    const buttonSubmit = form.querySelector('.submit');

    const titleInput = form.querySelector('.title');
    const authorInput = form.querySelector('.author');
    const pagesInput = form.querySelector('.pages');
    const checkboxInput = form.querySelector('.checkbox');
        
    buttonSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        const title = titleInput.value;
        const author = authorInput.value;
        const pages= pagesInput.value;
        const checkbox = checkboxInput.checked ? "true" : "false";
        let book = new Book(title, author, pages, checkbox);
        addBookToLibrary(book);
        console.log(myLibrary);
        displayLibrary();
    })
    // Display of elements in library.
    displayLibrary();
});