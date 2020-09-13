import React from "react"

function handleClick() {
    console.log("I was clicked")
}

// https://reactjs.org/docs/events.html#supported-events
const fx=()=>console.log("es6 function event handler");
function App() {
    return (
        <div>
            <img src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={fx}>Click me</button>
        </div>
    )
}

export default App
