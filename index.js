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
function displayBooks () {
    myLibrary.forEach((item)=> {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("bookDiv")
        const bookTitle = document.createElement("p");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        const readStatus = document.createElement("input");
        readStatus.setAttribute("type", "checkbox");
        for (let prop in item) {
        switch (prop) {
            case "author":
                bookAuthor.textContent = `Author is ${item[prop]}`;
                bookDiv.appendChild(bookAuthor);
                break;
            case "title":
                bookTitle.textContent = `Title is ${item[prop]}`;
                bookDiv.appendChild(bookTitle)
                break;
            case "pages":
                bookPages.textContent = `Number of pages is ${item[prop]}`;
                bookDiv.appendChild(bookPages);
                break;
            case "isRead":
                console.log(`The Books's read status is ${item[prop]}`);
                break;
         };
    }
    container.appendChild(bookDiv);
    })
};

displayBooks()
