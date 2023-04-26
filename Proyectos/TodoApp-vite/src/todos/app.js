import todoStore from "../store/todoStore";
// Importing chuck of html code
import html from "./app.html?raw";
import { rederTodos } from "./usecases";

// Storing the app.html <ul> classes
const elementIDs = {
  TodoList: ".todo-list",
  NewTodoInput: "#new-todo-input",
};

// Generally, JS frameworks such as React, Vue, Angular they have this type of syntax to initialise their app
export const initApp = () => {
  // Showing all todos once our app has been launched
  const displayTodos = () => {
    // Display all todos + desired current filtered todos
    const todos = todoStore.getAllTodos(todoStore.getCurrentFilter());
    // li data-id set to be todo id, all todos
    rederTodos(elementIDs.TodoList, todos);
  };

  // Anonymous function is declared so that we can print out "index.html" elements inside the body element <div> with id called #app + security
  (() => {
    const div = document.querySelector("#app");

    // const app = document.createElement("div");
    // app.innerHTML = html;
    // document.querySelector(elementId).append(app);

    div.innerHTML = html;
    displayTodos();
  })();

  // HTMl Reference
  const newTodoDesc = document.querySelector(elementIDs.NewTodoInput);
  const ulTodoList = document.querySelector(elementIDs.TodoList);

  // Listeners
  newTodoDesc.addEventListener("keyup", (evt) => {
    // Once we press the Enter Btn stop registering more events
    if (evt.keyCode !== 13) return;
    // If the input field is empty return
    if (evt.target.value.trim().length === 0) return;

    todoStore.addTodo(evt.target.value);
    displayTodos();
    // Clean input field
    evt.target.value = "";
  });

  ulTodoList.addEventListener("click", (evt) => {
    // console.log(evt.target);
    // Targeting element father
    const fatherEle = evt.target.closest("[data-id]");
    // data-id value
    todoStore.toggleTodo(fatherEle.getAttribute("data-id"));
    displayTodos();
  });

  ulTodoList.addEventListener("click", (evt) => {
    const isDestroyEle = evt.target.className === "destroy";
    // console.log(isDestroyEle); true / false
    const fatherEle = evt.target.closest("[data-id]");

    if (!fatherEle || !isDestroyEle) return;

    // Send id
    todoStore.deleteTodo(fatherEle.getAttribute("data-id"));

    displayTodos();
  });
};
