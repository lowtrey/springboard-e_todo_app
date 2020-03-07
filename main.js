// Add a new todo (by submitting a form)
const todoList = document.getElementById("todoList");
const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const deleteItem = document.createElement("button");
  const newListItem = document.createElement("li");
  const newTodoText = event.target.newTodo.value;

  newListItem.innerText = newTodoText;
  deleteItem.innerText = "X";
  newListItem.append(deleteItem);
  todoList.append(newListItem);

  event.target.newTodo.value = "";
});

// Mark a todo as completed (cross out the text of the todo)
todoList.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
  // Remove a todo
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
});

// Now that you have a functioning todo app, save your todos in localStorage!
// Make sure that when the page refreshes, the todos on the page remain there.
