import "./style.css";
import { App } from "./src/todos/app";
import todoStore from "./src/store/todoStore";

todoStore.initStore();

// Main function to run a TodoApp
/**
 * @param {String} #app --> index.html <div id="app"></div>
 */
App("#app");
