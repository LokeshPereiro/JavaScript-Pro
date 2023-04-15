# TodoApp milestones

```
1. initApp() declared in app.js will contain both displayTodos() and Anonymous self-invoked function

2. Anonymous function is created to run the whole app following the standard syntax of the JS frameworks such as React, Angular & Vue and will be called in main.js

3. displayTodos() needs DOM element where to place all the tasks + the tasks themselves.

    3.1. Create todo.model.js with *Class* called *Todo* so that we can extend or inherite that specific class properties where, 'description' prop is mandatory.

    3.2. Once created, import it in our Store & go ahead with basic CRUD operations

4. At this point, we should be able to get all methods defined in our store. displayTodos() will send as args to renderTodos() DOM container id and all todos/tasks

5. renderTodos() will receive container html reference and an array of todos. These todos are rendered through arr forEach method. However, each obj are send to createTodo() function so that we can we obj as HTML elements in DOM.

```
