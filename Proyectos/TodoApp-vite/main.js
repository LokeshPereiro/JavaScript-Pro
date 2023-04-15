import "./style.css";
import { initApp } from "./src/todos/app";
import todoStore from "./src/store/todoStore";

todoStore.initStore();

// Main function to run a TodoApp
initApp();
