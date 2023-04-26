import "./style.css";
import todoStore from "./src/store/todoStore";
import { initApp } from "./src/todos/app";

// initStore() will display all my tasks saved in Local Storage
todoStore.initStore();

// Main function to run App. Contain all my Listeners
initApp();
