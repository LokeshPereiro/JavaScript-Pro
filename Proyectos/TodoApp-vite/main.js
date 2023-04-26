import "./style.css";
import todoStore from "./src/store/todoStore";
import { initApp } from "./src/todos/app";

todoStore.initStore();

// Main function to run a TodoApp
initApp();
