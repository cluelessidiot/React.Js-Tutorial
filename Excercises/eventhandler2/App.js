import React from "react"

function handleClick() {
    console.log("I was clicked")
}

// https://reactjs.org/docs/events.html#supported-events
const fx=()=>console.log("es6 function event handler");
function App() {
    return (
        <div>
            <img onMouseOver= {()=>console.log("onMouse")}   onMouseLeave={()=>console.log("leave")}src="http://www.fillmurray.com/140/100"/>
        
            <br />
            <br />
            <button onClick={fx}>Click me</button>
        </div>
    )
}

export default App
