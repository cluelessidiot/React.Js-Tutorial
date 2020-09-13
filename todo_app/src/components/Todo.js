import React from 'react'

function Todo(props) {
    return <div className="todo-item">
        
        <input type = "checkbox" checked={props.completed} onChange={()=>props.event(props.id)}/>
        <p> {props.text} </p> 
        </div>
}
export default Todo