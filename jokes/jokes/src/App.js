import React from 'react';
import logo from './logo.svg';
import './App.css';
import JokesData from './jokesdata'
import Jokes from './jokes'
function App() {
  const jokeComponents = JokesData.map(jokes=><Jokes question={jokes.question} punchLine={jokes.punchLine} />)
    console.log(jokeComponents)
    return ( <div > 
      {jokeComponents}
    </div>

    );
}

export default App;