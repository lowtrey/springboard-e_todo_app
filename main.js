// Add a new todo (by submitting a form)
const todoList = document.getElementById("todoList");
const form = document.getElementById("form");

const savedTodos = JSON.parse(localStorage.getItem("todos"));
todoList.innerHTML = savedTodos;

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

  const todos = JSON.stringify(todoList.innerHTML);
  localStorage.setItem("todos", todos);
});

// Mark a todo as completed (cross out the text of the todo)
todoList.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
    const todos = JSON.stringify(todoList.innerHTML);
    localStorage.setItem("todos", todos);
  }
  // Remove a todo
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
    const todos = JSON.stringify(todoList.innerHTML);
    localStorage.setItem("todos", todos);
  }
});
