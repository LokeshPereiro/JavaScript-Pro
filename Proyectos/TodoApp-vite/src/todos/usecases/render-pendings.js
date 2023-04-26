/**
 *
 * @param {String} elementId
 */

import todoStore, { Filters } from "../../store/todoStore";

let element;

export const renderPendings = (elementId) => {
  if (!element) element = document.querySelector(elementId);
  if (!element) throw new Error(`${elementId} not found!`);

  element.innerHTML = todoStore.getAllTodos(Filters.Pending).length;
};
