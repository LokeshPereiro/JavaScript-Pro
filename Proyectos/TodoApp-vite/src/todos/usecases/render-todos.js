import { createTodo } from "./";
/**
 *
 * @param {String} elementId (Target div element with class '.todo-list' )
 * @param {Array} todos
 */

let containerElement;

// Where to display and what
export const rederTodos = (elementId, todos = []) => {
  //   console.log({ elementId, todos });

  // Todo container
  // If todos container not selected then asign it by default
  if (!containerElement) containerElement = document.querySelector(elementId);
  if (!containerElement) throw new Error(`Element ${elementId} not found`);

  // Purge element once selected to avoid errors
  containerElement.innerHTML = "";

  // Once we have selected the todos container, insert each todo into it
  // This will create a div with [ select input ], label with todo and checked or not
  todos.forEach((todo) => {
    containerElement.append(createTodo(todo));
  });
};
