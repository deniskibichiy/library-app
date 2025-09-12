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
    for (let prop in item) {
        switch (prop) {
            case "author":
                console.log(`Author is ${item[prop]}`);
                break;
            case "title":
                console.log(`Title is ${item[prop]}`);
                break;
            case "pages":
                console.log(`Number of pages is ${item[prop]}`);
                break;
         };
    };
    })
};

displayBooks()
