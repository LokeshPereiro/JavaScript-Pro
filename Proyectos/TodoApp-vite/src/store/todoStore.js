import { Todo } from "../todos/models/todo.model";

const Filters = {
  All: "all",
  Pending: "pending",
  Completed: "completed",
};

const state = {
  todos: [
    new Todo("Aprender Python"),
    new Todo("Learn TypeScript"),
    new Todo("Aprender Nextjs"),
    new Todo("Learn Laravel framework"),
  ],
  filter: Filters.All,
};

const initStore = () => {
  console.log(state);
  // console.log("Hello World 😁");
};

const loadStore = () => {
  throw new Error("Not implemented!");
};

/**
 *
 * @param {String} descripcion
 * @param {String} todoId
 * @param {String} filter, newFilter
 */

// Default filter will be set as 'All'
const getAllTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];

    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);

    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);

    default:
      throw new Error(`Options ${filter} not valid!`);
  }
};

const addTodo = (descripcion) => {
  // Mandatory to send new todo
  if (!descripcion) throw new Error("new Todo is Mandatory!");
  state.todos.push(new Todo(descripcion));
};

const toggleTodo = (todoId) => {
  // Every time new Todo pop up .map() will mapped it
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => todo.done);
};

/**
 *
 * @param {Filters} newFilter
 */
const setFilter = (newFilter = Filters.All) => {
  if (Object.keys(Filters).includes(newFilter)) {
    state.filter = newFilter;
  } else {
    throw new Error(`El filtro ${newFilter} no encontrado`);
  }
};

const getCurrentFilter = () => {
  return state.filter;
};

export default {
  initStore,
  loadStore,
  getAllTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteCompleted,
  setFilter,
  getCurrentFilter,
};
