import store from "../store.js";
import Todo from "../models/todo.js";
import TodoController from "../controllers/todo-controller.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Kayden/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    todoApi.get("todos").then(res => {
      console.log(res);
      store.commit("todos", res.data.data.map(rawTodoData => new Todo(rawTodoData))
      )
    }).catch(err => console.error(err))
    console.log("Getting the Todo List");
  }

  addTodoAsync(todo) {
    todoApi.post("todos", todo).then(res => {
      this.getTodos()
    }).catch(err => console.error(err))

  }

  toggleTodoStatusAsync(todoId) {

    let todo = store.State.todos.find(todo => todo.id == todoId);
    if (todo.completed == true) {
      todo.completed = false

    } else {
      todo.completed = true
    }


    todoApi.put("todos/" + todoId, todo).then(res => {
      this.getTodos()
    }).catch(err => console.error(err))



  }

  removeTodoAsync(todoId) {
    todoApi.delete("todos/" + todoId).then(res => {
      this.getTodos()
    })
  }
}

const todoService = new TodoService();
export default todoService;
