const todoForm = document.querySelector("#todo-form");
const list = document.querySelector("#list");
const showDateButton = document.querySelector("#date-button");
const textOutput = document.querySelector("#text-output");

showDateButton.addEventListener("click", () => {
    const date = new Date().toLocaleDateString();
    textOutput.innerText = date;
});

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newListItem = document.createElement("li");
    newListItem.innerText = event.target["new-todo"].value;
    deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    completedButton = document.createElement("button");
    completedButton.textContent = "mark as complete";
    newListItem.appendChild(deleteButton);
    list.appendChild(newListItem);

    deleteButton.addEventListener("click", () => {
        deleteElement(list, newListItem);
    });
    
});

const deleteElement = (listToDeleteFrom, itemToDelete) => {
    listToDeleteFrom.removeChild(itemToDelete);
};

