import store from "../store.js";
import Todo from "../models/todo.js";

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
    let todo = store.State.todos.find(todo => todo._id == todoId);

    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    todoApi.delete("todos/" + todoId).then(res => {
      this.getTodos()
    })
  }
}

const todoService = new TodoService();
export default todoService;
