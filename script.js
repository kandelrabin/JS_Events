const todoForm = document.querySelector("#todo-form");
const list = document.querySelector("#list");
const showDateButton = document.querySelector("#date-button");
const textOutput = document.querySelector("#text-output");
const completedList = document.querySelector("#completed-list");

showDateButton.addEventListener("click", () => {
    const date = new Date().toLocaleDateString();
    textOutput.innerText = date;
});

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newListItem = document.createElement("li");
    newListItem.innerText = event.target["new-todo"].value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    const completedButton = document.createElement("button");
    completedButton.textContent = "mark as complete";
    const completedText = document.createElement("span");

    newListItem.appendChild(completedButton);
    newListItem.appendChild(deleteButton);
    newListItem.appendChild(completedText);
    list.appendChild(newListItem);

    deleteButton.addEventListener("click", () => {
        deleteElement(newListItem);
    });

    completedButton.addEventListener("click", () => {
        completedText.innerText = "Completed!";
        newListItem.style.color = "grey";
        completedList.appendChild(newListItem);
    });

   
});

const deleteElement = (itemToDelete) => {
    itemToDelete.parentNode.removeChild(itemToDelete);
};

