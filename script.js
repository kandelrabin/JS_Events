const enterButton = document.querySelector("#enter");
const todoForm = document.querySelector("#todo-form");


todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newListItem = document.createElement("li");
    newListItem.innerText = event.target["new-todo"].value;
    todoForm.appendChild(newListItem);
});

