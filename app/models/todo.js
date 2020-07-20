import store from "../store.js"

export default class Todo {
    constructor(data) {
        this.id = data.id || data._id
        this.description = data.description
        this.user = data.user
        this.completed = data.completed || false


    }


    get Template() {
        return /*html*/`
                        <div class="row p-2">
                        <button type="button" class="btn btn-outline-danger px-1 mb-2 py-0"
                        onclick="app.todoController.removeTodo('${this.id}')"><i class="fa fa-trash"></i></button>
                        
	<button type="button" class="btn btn-outline-success px-1 mx-1 mb-2 py-0"
                        onclick="app.todoController.toggleTodoStatus('${this.id}')"><i class="fa fa-check"></i></button>
                                            <h4 class="${this.completed == true ? 'strikethrough' : ''}">${this.description}</h4>
                                            
	
									
                        </div>	`


    }


    static currentTodoTemplate() {
        return `
    <div class="row">
					<div class="col-6">
                        <h5><u>TO-DOs:</u> ${store.State.todos.length}</h5>
                        
                    </div>
                    
				</div>`
    }

}