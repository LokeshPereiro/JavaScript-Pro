import { Todo } from "../todos/models/todo.model";

// My filters obj
export const Filters = {
  All: "all",
  Pending: "pending",
  Completed: "completed",
};

// Global state that contain all my tasks and filters
const state = {
  todos: [
    new Todo("Learn Angular"),
    new Todo("Learn TypeScript"),
    new Todo("Learn Nodejs"),
  ],
  // Default selection
  filter: Filters.All,
};

const initStore = () => {
  // console.log("Hello World 😁");
  if (!localStorage.getItem("myTodos")) return;

  // Destructuring todos arr and filters from LocalStorage
  const { todos = [], filter = Filters.All } = JSON.parse(
    localStorage.getItem("myTodos")
  );
  state.todos = todos;
  state.filter = filter;
};

const savedStateLocalStorage = () => {
  // Every new change in state, will be saved in localstorage
  localStorage.setItem("myTodos", JSON.stringify(state));
};

/**
//  Asking for args
 * @param {String} tasks
 * @param {String} todoId
 * @param {String} filter newFilter arg for filtering funcionality
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

const addTodo = (tasks) => {
  if (!tasks) throw new Error("New Task is Mandatory!");
  state.todos.unshift(new Todo(tasks));
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
  state.todos = state.todos.filter((todo) => !todo.done);
  savedStateLocalStorage();
};

/**
 * @param {String} newFilter
 */
// So that we can filter between completed, pending, all
const setFilter = (newFilter = Filters.All) => {
  // JS method to trigger objs keys
  // if (Object.keys(Filters).includes(newFilter)) {
  //   state.filter = newFilter;
  //   savedStateLocalStorage();
  // } else {
  //   throw new Error(`${newFilter} not found!`);
  // }
  state.filter = newFilter;
  savedStateLocalStorage();
};

const getCurrentFilter = () => {
  return state.filter;
};

export default {
  initStore,
  getAllTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteCompleted,
  setFilter,
  getCurrentFilter,
};
