const addBookButton = document.querySelector(".add-book");
const library = document.querySelector(".library");

let myLibrary = [new Book("Test Title", "Test Author", "432", "Read")];
updateLibrary();

addBookButton.onclick = function(event) {

  event.preventDefault();
  addBookToLibrary();
  updateLibrary();
  document.getElementById("main-form").reset();

}

function Book(title, author, pages, read) {

  this.title = title
  this.author = author
  this.pages = pages
  this.read = read.checked ? "Read" : "Unread"

}

function addBookToLibrary() {

  if (book.value && author.value && pages.value) {
    let newBook = new Book(book.value, author.value, pages.value, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
  }

}

function updateLibrary() {
  library.textContent = "";
  for (let book of myLibrary) {
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
    readToggle.setAttribute("onclick", `toggleReadStatus(${myLibrary.indexOf(book)})`)
    deleteBtn.setAttribute("onclick", `removeBook(${myLibrary.indexOf(book)})`);

    library.appendChild(cardDiv);
  }
}

function removeBook(bookIndex) {
  myLibrary.splice(bookIndex, 1);
  updateLibrary();
}

function toggleReadStatus(bookIndex) {

  myLibrary[bookIndex].read === "Read" ? myLibrary[bookIndex].read = "Unread" : myLibrary[bookIndex].read = "Read";
  updateLibrary();
}