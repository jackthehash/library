const myLibrary = [];

function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLibrary(title, author, page, read) {
    const book = new Book(title, author, page, read);
    myLibrary.push(book);
}

addBookToLibrary("1984", "George Orwell", "368", true);
addBookToLibrary("The Song of Achilles", "Madeline Miller", "408", true);

const library = document.querySelector('.library');

function refresh() {
    let numb = library.childElementCount;
    for (let i = 1; i < numb; i++) {
        library.removeChild(library.lastChild);
    }
    for (const item of myLibrary) {
        const card = document.createElement('div');
        card.classList.add('card');
        const title = document.createElement('p');
        title.textContent = item.title;
        card.appendChild(title);
        const author = document.createElement('p');
        author.textContent = item.author;
        card.appendChild(author);
        const page = document.createElement('p');
        page.textContent = `${item.page} pages`;
        card.appendChild(page);
        const read = document.createElement('p');
        if (item.read === true) {
            read.textContent = "Finished";
        } else {
            read.textContent = "Not finished";
        }
        card.appendChild(read);
        const buttons = document.createElement('div');
        buttons.classList.add('buttons');
        const toggle = document.createElement('button');
        toggle.textContent = "Read";
        toggle.classList.add('toggle');
        toggle.addEventListener('click', () => {
            if (read.textContent === "Finished") {
                read.textContent = "Not finished";
            } else {
                read.textContent = "Finished";
            }
        })
        buttons.appendChild(toggle);
        const del = document.createElement('button');
        del.textContent = "Delete";
        del.classList.add('delete');
        del.addEventListener('click', () => {
            library.removeChild(card);
        })
        buttons.appendChild(del);
        card.appendChild(buttons);
        library.append(card);
    }
}

refresh();

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add");
const closeButton = document.querySelector("#cancel");
const summitButton = document.querySelector("#submit");
const form = document.querySelector("#form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const page = document.querySelector("#page");
const read = document.querySelector("#read");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

summitButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(title.value, author.value, page.value, read.checked);
    refresh();
    form.reset();
    dialog.close();
})