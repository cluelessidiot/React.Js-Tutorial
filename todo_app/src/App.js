import React from 'react'
import Todo from './components/Todo'
import './index.css'
import todo from './todos'
// function App(){
//         var name = "aathil";
// return <h1>hello {name}</h1>
// }
class App extends React.Component{
        constructor(){
                super();
                this.state={todos:todo}
        }
        
        render(){

        const todoList = this.state.todos.map(todoitem=>{
                return <Todo  key={todoitem.id} text={todoitem.text}/>
        })
        console.log(todoList)
        return <div className="todo-list">
                {todoList}
                </div>
        }        
}
export default App