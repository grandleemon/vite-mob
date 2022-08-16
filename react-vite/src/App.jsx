import './App.css'
import { observer } from "mobx-react-lite"
import {useEffect, useState} from "react";
import {Timer} from "../store/counter/counter.js";
import {action} from "mobx";
import {Todos} from "../store/todos/todos.js";

const myTimer = new Timer()
const myTodos = new Todos()

const App = observer(() => {
    const [title, setTitle] = useState("")

    useEffect(() => {
        console.log(myTodos.todos)
    }, [myTodos.todos])

  return (
    <div className="App">
        {myTimer.secondsPassed}
        <button onClick={action(e => {
            myTimer.increaseCount()
        })}>+1</button>
        <button onClick={action(e => {
            myTimer.decreaseCount()
        })}>-1</button>

        <h2>todos</h2>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        <button onClick={action(e => myTodos.addTodo({title, id: myTodos?.todos.length + 1}))}>add</button>
        {myTodos.todos.map((item, key) => (
            <div>
                {item.name}
                {item.title}
                <button onClick={action(e => myTodos.deleteTodo({key}))}>X</button>
            </div>
        ))}
    </div>
  )
})

export default App
