import { createTodo } from "./";
/**
 *
 * @param {String} elementId (Target div element with class '.todo-list' )
 * @param {Array} todos
 */

//This fuction will contain all todos
export const rederTodos = (elementId, todos = []) => {
  //   console.log({ elementId, todos });

  let element;
  // If todos container not selected then asign it by default
  if (!element) element = document.querySelector(elementId);
  if (!element) throw new Error(`Element ${elementId} not found`);

  // Purge element once selected to avoid errors
  element.innerHTML = "";

  // Once we have selected the todos container, insert each todo into it
  // This will create a div with select input, label with todo and checked ot not
  todos.forEach((todo) => {
    element.append(createTodo(todo));
  });
};
