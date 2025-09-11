# library-app
A small Library app.
## Requirements
1. All the book items are going to be stored in an array and will therefore need a `Book` constructor. A separate function inside the script but out of the constructor takes the arguments for the book details, creates the book and adds the new book object into the array.
2. A function that loops the array and displays each book on the page, with each book being displayed in its own card. 
3. A "New Book" button that brings up a form for the user to fill up the details of the book on the form. The form to be displayed using a modal dialogue box and a submit button which will have a `event.preventDefault()` on it since for now there is no database to submit the data to. 
4. A button to each of the book's display that will remove the book from the library. 
5. A button on each book's display that changes its read status. This will be associated with a `Book` prototype function that will toggle a books instance's read status. 
6. At this point in the project there is no requirement for any type of storage to save information between page reloads. One to watch out for in the near future. 