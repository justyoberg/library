class Library {

  constructor() {
    this.books = [new Book("Test Title", "Test Author", "432", "Read")];
    this.library = document.querySelector(".library");
    this.addBookButton = document.querySelector(".add-book");
  }

  addBookToLibrary = (book) => {
    if (book.book && book.author && book.pages && book.read) {
      let newBook = new Book(book.book, book.author, book.pages, book.read);
      this.books.push(newBook);
    }
  }
  
  updateLibrary = () => {
    this.library.textContent = "";
    for (let book of this.books) {
      let cardDiv = document.createElement("div");
      let btnDiv = document.createElement("div");
      let titleDiv = document.createElement("h2");
      let authorDiv = document.createElement("div");
      let pagesDiv = document.createElement("div");
      let deleteBtn = document.createElement("button");
      let readToggle = document.createElement("button");
      btnDiv.className = ("card-buttons");
  
      titleDiv.textContent = `${book.title}`;
      authorDiv.textContent = `${book.author}`;
      pagesDiv.textContent = `${book.pages} pages`;
      readToggle.textContent = `${book.read}`;
      deleteBtn.textContent = "Delete";
  
      cardDiv.appendChild(titleDiv);
      cardDiv.appendChild(authorDiv);
      cardDiv.appendChild(pagesDiv);
      cardDiv.appendChild(readToggle);
      cardDiv.appendChild(deleteBtn);
      cardDiv.appendChild(btnDiv);
      btnDiv.appendChild(deleteBtn);
      btnDiv.appendChild(readToggle);
      
      readToggle.addEventListener("click", () => this.toggleReadStatus(this.books.indexOf(book)));
      deleteBtn.addEventListener("click", () => this.removeBook(this.books.indexOf(book)));

      this.library.appendChild(cardDiv);
    }
  }

  toggleReadStatus = (bookIndex) => {

    this.books[bookIndex].read === "Read" ? this.books[bookIndex].read = "Unread" : this.books[bookIndex].read = "Read";
    this.updateLibrary();

  }

  removeBook = (bookIndex) => {
    this.books.splice(bookIndex, 1);
    this.updateLibrary();
  }
  
}

class Book {

  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read.checked ? "Read" : "Unread";
  }

}

let myLibrary = new Library();
myLibrary.updateLibrary();

myLibrary.addBookButton.onclick = function(event) {
  let mainForm = document.getElementById("main-form");

  let formObject = new FormData(mainForm);
  formObject = Object.fromEntries(formObject);

  event.preventDefault();
  myLibrary.addBookToLibrary(formObject);
  myLibrary.updateLibrary();
  mainForm.reset();

}