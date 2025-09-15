const container = document.querySelector(".container");
const myLibrary = [];

function Book (author, title, pages) {
    this.author = author,
    this.title = title,
    this.pages = pages,
    this.BookID = crypto.randomUUID();
    this.isRead = true;
};

function createBook (author, title, pages) {
    const newBook = new Book (author, title, pages);
    myLibrary.push(newBook);
    return newBook;
}

createBook ("Robert Greene", "The Art of War", 576);
createBook("James Clear", "Atomic Habits", 898);
createBook("Jock Willink", "Discipline equals freedom", 98)
createBook("Dostoevsky", "Crime and Punishment", 398);


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
        deleteButton.textContent = "Delete Book";
        deleteButton.setAttribute("data-id", `${item.BookID}`);
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
    bookDiv.appendChild(deleteButton)
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

closeButton.addEventListener("click", () => {
    //event.preventDefault();
    openDialog.close();
})

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-delete")) {
    let itemId = event.target.dataset.id;
    console.log(itemId)
    let bookToDelete = myLibrary.findIndex(bookObject => bookObject.BookID == itemId);
    myLibrary.splice(bookToDelete, 1);
    console.log(myLibrary);
    container.textContent = " "
    displayBooks(myLibrary);
     }
});