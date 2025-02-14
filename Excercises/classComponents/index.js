/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

import React from "react"
import ReactDOM from "react-dom"

// #1
class App extends React.Component{
render() {
    return (
        <div>
            <Header username="ssss" />
            <Greeting />
        </div>
    )}}


// #2

  class  Header extends React.Component{
      
      render(){
         return (
        <header>
            <p>Welcome, {this.props.username}!</p>
        </header>
    )
    }
    }



// #3

class Greeting extends React.Component {
    render(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        this.timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        this.timeOfDay = "afternoon"
    } else {
        this.timeOfDay = "night"
    }
    return (
        <h1>Good {this.timeOfDay} to you, sir or madam!</h1>
    )}
}

ReactDOM.render(<App />, document.getElementById("root"))
