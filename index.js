const myLibrary = [];



function addBookToLibrary (title, author, pages) {
    let bookId = crypto.randomUUID();
    let book = {
        bookId,
        title,
        author,
        pages,
        isRead: true
    }
    myLibrary.push(book);
}

const warOfArt = new Book("War of art", "Steven Pressfiled", 344);
const atomicHabits = new Book("Atomic Habits", "James Clear", 344);
function createBook (a, b, c) {
    new Book(a, b, c)
}

createBook("A", "sili", 567);
createBook ("48 Laws of Power", "Robert Greene", 890)

console.log(myLibrary)

Book.prototype.isRead === false;
