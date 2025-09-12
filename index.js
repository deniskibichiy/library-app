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
    newLibrary.push(newBook);
    return newBook;
}