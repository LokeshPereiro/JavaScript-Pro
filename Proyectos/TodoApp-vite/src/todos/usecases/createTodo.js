/**
 * @param {Todo} todo
 */

export const createTodo = (todo) => {
  if (!todo) throw new Error("A Todo object is required!");
  const { id, description, done } = todo;

  const html = `<div class="view">
                    <input class="toggle" type="checkbox" ${
                      done ? "checked" : ""
                    }>
                    <label>${description}</label>
                    <button class="destroy"></button>
                </div>`;

  const liElement = document.createElement("li");
  liElement.innerHTML = html;
  // We need to set data-id in html so that we can target the element with unique todo id
  liElement.setAttribute("data-id", id);
  if (done) liElement.classList.add("completed");

  return liElement;
};
