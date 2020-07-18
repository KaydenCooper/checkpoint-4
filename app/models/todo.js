import store from "../store.js"

export default class Todo {
    constructor(data) {
        this._id = data._id
        this.description = data.description
        this.user = data.user
        this.completed = data.completed

    }


    get Template() {
        return /*html*/`
                        <div class="row p-2">
                        <button type="button" class="btn btn-outline-danger px-1 mb-2 py-0"
                        onclick="app.todoController.removeTodo('${this._id}')"><i class="fa fa-trash"></i></button>
                        <input id="checked" type="checkbox" class="mb-2 mx-1 custom" onclick="app.todoController.toggleTodoStatus('${this._id}')">
	
                                            <h4>${this.description}</h4>
                                            
	
									
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