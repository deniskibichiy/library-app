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

const powersOfLaw = createBook ("Robert Greene", "The Art of War", 576);
const atomicHabits = createBook("James Clear", "Atomic Habits", 898);
const disciplineFreedom = createBook("Jock Willink", "Discipline equals freedom", 98)
function displayBooks () {
    myLibrary.forEach((item)=> {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("bookDiv")
        const bookTitle = document.createElement("p");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        const readStatus = document.createElement("input");
        let readNode = document.createElement("p");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Book"
        readNode.textContent = `Read Status: `
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
disciplineFreedom.isRead = true;
//myLibrary.splice(2)
displayBooks()
const btn = document.querySelector(".btn");
let openDialog = document.querySelector("dialog");
const closeButton = document.querySelector("#submit");
btn.addEventListener("click",() => {
    openDialog.showModal();

})

closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    openDialog.close();
})