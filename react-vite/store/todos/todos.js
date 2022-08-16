import {action, makeAutoObservable, observable} from "mobx";

export class Todos {
    todos = []

    constructor() {
        makeAutoObservable(this, {
            todos: observable,
            addTodo: action
        })
    }

    addTodo({title, status = false, id}){
        this.todos.push({title, status, id})
    }

    deleteTodo({key}){
        console.log(key)
        this.todos = this.todos.filter(todo => todo.id === key)
    }
}