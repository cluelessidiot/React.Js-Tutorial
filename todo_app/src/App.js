import React from 'react'
import Todo from './components/Todo'
import './index.css'
import todo from './todos'
// function App(){
//         var name = "aathil";
// return <h1>hello {name}</h1>
// }
function App(){

        const todoList = todo.map(todoitem=>{
                return <Todo  key={todoitem.id} text={todoitem.text}/>
        })
        console.log(todoList)
        return <div className="todo-list">
                {todoList}
                </div>
}
export default App