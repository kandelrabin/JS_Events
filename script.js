const todoForm = document.querySelector("#todo-form");
const list = document.querySelector("#list");

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newListItem = document.createElement("li");
    newListItem.innerText = event.target["new-todo"].value;
    newListItem.id = newListItem.innerText;
    deleteButton = document.createElement("button");
    deleteButton.textContent = `delete ${newListItem.innerText}`;
    newListItem.appendChild(deleteButton);
    list.appendChild(newListItem);

    deleteButton.addEventListener("click", () => {
        list.removeChild(newListItem);
    });
    
});
