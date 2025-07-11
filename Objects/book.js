
// Function to create and manage the books inventory
function createBookInventory() {
    let books = []; // Array to store books

    // Function to add a book to the inventory
    function addBook() {
        let title = prompt("Enter the book title:");
        let author = prompt("Enter the author's name:");
        // Create a book object and add it to the array
        let book = { title: title, author: author };
        books.push(book);

        alert("Book added successfully!");
    }

    // Function to display all books in the inventory
    function viewBooks() {
        if (books.length === 0) {
            alert("No books in the inventory.");
            return;
        }
        let list = "Books in Inventory:\n";
        for (let i = 0; i < books.length; i++) {
            list += (i + 1) + ". Title: " + books[i].title + ", Author: " + books[i].author + "\n";
        }
        alert(list);
    }

    // Function to delete a book by its title
    function deleteBook() {
        let title = prompt("Enter the title of the book to delete:");
        // Find the index of the book by title
        let index = books.findIndex(book => book.title.toLowerCase() === title.toLowerCase());
        if (index === -1) {
            alert("Book not found.");
        } else {
            books.splice(index, 1); // Remove the book from the array
            alert("Book deleted successfully.");
        }
    }

    // Return methods to interact with the inventory
    return {
        addBook,
        viewBooks,
        deleteBook
    };
}

// Create a book inventory instance
const myBookInventory = createBookInventory();

// Example usage
myBookInventory.addBook();  // Adds a new book
myBookInventory.viewBooks(); // Displays all books
myBookInventory.deleteBook(); // Deletes a book by title
