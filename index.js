const container = document.querySelector(".container");
const myLibrary = [];

class Book {
    constructor (author, title, pages) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.BookID = crypto.randomUUID();
        this.isRead = true;
    }
    toggleReadStatus() {
        if (this.isRead ==false) {
            this.isRead = true;
        } else {
            this.isRead = false;
        }
    }
}

function createBook (author, title, pages) {
    const newBook = new Book (author, title, pages);
    myLibrary.push(newBook);
    return newBook;
}
/*
Book.prototype.toggleReadStatus= function () {
    if (this.isRead ==false) {
        this.isRead = true;
    } else {
        this.isRead = false;
    }
} */

createBook("David Goggins", "Can't Hurt Me!", 498);
createBook("Dostoevsky", "Crime and Punishment", 398);
createBook("Viktor Frankl", "Man's Search for Meaning", 578);

function displayBooks (arr) {
    arr.forEach((item)=> {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("bookDiv");
        const bookTitle = document.createElement("p");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        const readStatus = document.createElement("input");
        let readNode = document.createElement("p");
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn-delete");
        let buttonsDiv = document.createElement("div");
        let toggleButton = document.createElement("button");
        toggleButton.setAttribute("data-id",`${item.BookID}` )
        toggleButton.classList.add("btn-toggle");
        toggleButton.textContent = "Change Read Status";
        deleteButton.textContent = "Delete Book";
        deleteButton.setAttribute("data-id", `${item.BookID}`);
        buttonsDiv.appendChild(deleteButton);
        buttonsDiv.appendChild(toggleButton);
        readNode.textContent = `Read Status: `;
        readStatus.setAttribute("type", "checkbox");
        for (let prop in item) {
        switch (prop) {
            case "author":
                bookAuthor.textContent = `Author: ${item[prop]}`;
                bookDiv.appendChild(bookAuthor);
                break;
            case "title":
                bookTitle.textContent = `Title: ${item[prop]}`;
                bookDiv.appendChild(bookTitle)
                break;
            case "pages":
                bookPages.textContent = `Number of pages: ${item[prop]}`;
                bookDiv.appendChild(bookPages);
                break;
            case "isRead":
                if(item.isRead) {
                    readStatus.setAttribute("checked", "");
                    }
                    readNode.appendChild(readStatus)
                    bookDiv.appendChild(readNode);
                };
    }
    bookDiv.appendChild(buttonsDiv);
    container.appendChild(bookDiv);
    })
};

displayBooks(myLibrary)
const btn = document.querySelector(".btn");
let openDialog = document.querySelector("dialog");
const closeButton = document.querySelector("#submit");
btn.addEventListener("click",() => {
    openDialog.showModal();

})

const cancelButton = document.querySelector(".cancel");
cancelButton.addEventListener("click", () => {
    openDialog.close();
})

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-delete")) {
    let itemId = event.target.dataset.id;
    //console.log(itemId)
    let bookToDelete = myLibrary.findIndex(bookObject => bookObject.BookID == itemId);
    myLibrary.splice(bookToDelete, 1);
    container.textContent = " "
    displayBooks(myLibrary);
     } else if (event.target.classList.contains("btn-toggle")) {
        let itemId = event.target.dataset.id;
        console.log(itemId)
        let bookToToggle = myLibrary.findIndex(bookObject => bookObject.BookID == itemId);
        myLibrary[bookToToggle].toggleReadStatus();
        container.textContent = " "
        displayBooks(myLibrary);
     }
});

// Creating a book from the form
closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    const authorValue = document.querySelector("#author").value;
    const titleValue = document.querySelector("#title").value;
    const pagesValue = document.querySelector("#pages").value;
     if (!authorValue || !titleValue || !pagesValue) {
        showError();
    } else {
    createBook(authorValue, titleValue, pagesValue);
    container.textContent = " ";
    displayBooks(myLibrary);
    document.querySelector(".form").reset();
    openDialog.close();
    }

})




function showError () {
    const author = document.querySelector("#author");
    const title = document.querySelector("#title");
    const pages = document.querySelector("#pages");

    const titleError = document.querySelector("#span-title");
    const authorError = document.querySelector("#span-author");
    const pagesError = document.querySelector("#span-pages");

    if(!author.validity.valid) {
        authorError.textContent = "Must have input Author's name!";
        authorError.classList.add("active");
    } else if (!title.validity.valid) {
        titleError.textContent = "Must have title value";
        titleError.classList.add("active");
    }
    else if (!pages.validity.valid) {
        pagesError.textContent = "Must have number of pages";
        pagesError.classList.add("active");
    }
}


//form validation

