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
                this.handleChange = this.handleChange.bind(this)
        }
        handleChange(id){
               
                this.setState(prevState=>{
                        const updatedTodoList = prevState.todos.map(todoitem=>{
                        if(todoitem.id === id){
                                todoitem.completed=!todoitem.completed
                        }
                        return todoitem;

                })
                return {todos:updatedTodoList}
        })
                // const updatedTodoList = this.state.todos.map(todoitem=>{
                //         if(todoitem.id === id){
                //                 todoitem.completed=!todoitem.completed
                //         }

                // })
        }
        render(){

               // console.log("ssss")
        const todoList = this.state.todos.map(todoitem=>{
                return <Todo  key={todoitem.id} id={todoitem.id} text={todoitem.text} event={this.handleChange} completed={todoitem.completed}/>
        })
        //console.log(todoList)
        return <div className="todo-list">
                {todoList}
                </div>
        }        
}
export default App