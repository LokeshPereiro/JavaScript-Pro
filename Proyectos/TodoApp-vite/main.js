import "./style.css";
import { App } from "./src/todos/app";
import todoStore from "./src/store/todoStore";
todoStore.initStore();
App("#app");
