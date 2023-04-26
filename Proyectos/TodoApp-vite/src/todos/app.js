import todoStore, { Filters } from "../store/todoStore";
// Importing chunck of html code
import html from "./app.html?raw";
import { rederTodos, renderPendings } from "./usecases";

// Storing the app.html classes
const elementIDs = {
  TodoList: ".todo-list",
  NewTodoInput: "#new-todo-input",
  ClearCompletedBtn: ".clear-completed",
  TodoFilters: ".filtro",
  PendingCount: "#pending-count",
};

// Generally, JS frameworks such as React, Vue, Angular they have this type of syntax to initialise their app
export const initApp = () => {
  // Showing all todos once our app has been launched
  const displayTodos = () => {
    // Display all todos + desired current filtered todos
    const todos = todoStore.getAllTodos(todoStore.getCurrentFilter());
    rederTodos(elementIDs.TodoList, todos);
    updatePendings();
  };

  const updatePendings = () => {
    renderPendings(elementIDs.PendingCount);
  };

  // Anonymous function is declared so that we can print out "index.html" elements inside the body element <div> with id called #app + security
  (() => {
    // const app = document.createElement("div");
    // app.innerHTML = html;
    // document.querySelector(elementId).append(app);
    const div = document.querySelector("#app");
    div.innerHTML = html;
    displayTodos();
  })();

  // HTMl Reference
  const newTodoDesc = document.querySelector(elementIDs.NewTodoInput);
  const ulTodoList = document.querySelector(elementIDs.TodoList);
  const removeCompletedTasks = document.querySelector(
    elementIDs.ClearCompletedBtn
  );
  const filtersLI = document.querySelectorAll(elementIDs.TodoFilters);

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
    // console.log(fatherEle);
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

  removeCompletedTasks.addEventListener("click", () => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  //We have more tan 1 ele with same class. DOM will provide us in Arr
  filtersLI.forEach((element) => {
    element.addEventListener("click", (element) => {
      // Apart from 'All' filter, nothing is selected
      filtersLI.forEach((ele) => ele.classList.remove("selected"));
      element.target.classList.add("selected");

      // console.log(element.target.text);
      switch (element.target.text) {
        case "All":
          todoStore.setFilter(Filters.All);
          break;

        case "Pending":
          todoStore.setFilter(Filters.Pending);
          break;

        case "Completed":
          todoStore.setFilter(Filters.Completed);
          break;
      }
      // After filtering, render Todos with new state changes
      displayTodos();
    });
  });
};
