import Todo from "../models/todo.js";
import store from "../store.js";
import todoService from "../services/todo-service.js";

//TODO Create the render function
function _drawTodos() {
  let template = ""
  store.State.todos.forEach(t => template += t.Template)
  document.getElementById("todos").innerHTML = template
  document.getElementById("currentTodos").innerHTML = Todo.currentTodoTemplate()
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    todoService.getTodos();
    store.subscribe("todos", _drawTodos)
  }

  addTodo(e) {
    e.preventDefault();
    let form = e.target;
    let todo = {
      description: form.todo.value
    };
    todoService.addTodoAsync(todo);
    form.reset();
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    todoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    todoService.removeTodoAsync(todoId);
  }
}
