import { Todo } from "../todos/models/todo.model";

const Filters = {
  All: "all",
  Pending: "pending",
  Completed: "completed",
};

const state = {
  todos: [
    new Todo("Learn Angular"),
    new Todo("Learn TypeScript"),
    new Todo("Aprender Nextjs"),
    new Todo("Aprender Python"),
  ],
  // Default selection
  filter: Filters.All,
};

const initStore = () => {
  // console.log("Hello World 😁");
  loadStore();
};

const loadStore = () => {
  if (!localStorage.getItem("myTodos")) return;

  const { todos = [], filter = Filters.All } = JSON.parse(
    localStorage.getItem("myTodos")
  );
  state.todos = todos;
  state.filter = filter;
};

const savedStateLocalStorage = () => {
  localStorage.setItem("myTodos", JSON.stringify(state));
};

/**
 *
 * @param {String} descripcion
 * @param {String} todoId
 * @param {String} filter, newFilter
 */

// Default filter 'All'
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
  savedStateLocalStorage();
};

const toggleTodo = (todoId) => {
  // Every time new Todo pop up .map() will mapped it
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });
  savedStateLocalStorage();
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
  savedStateLocalStorage();
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => todo.done);
  savedStateLocalStorage();
};

/**
 *
 * @param {Filters} newFilter
 */
const setFilter = (newFilter = Filters.All) => {
  // JS method to trigger objs keys
  if (Object.keys(Filters).includes(newFilter)) {
    state.filter = newFilter;
  } else {
    throw new Error(`${newFilter} not found!`);
  }
  savedStateLocalStorage();
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
