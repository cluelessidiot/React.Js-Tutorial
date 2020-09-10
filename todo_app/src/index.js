// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render( < div > <h1> Hello World </h1><p>This is a paragraph</p> </div>,document.getElementById("root"))
// var newP = document.createElement("p");
// newP.innerHTML="This is basics of React.js";
// document.body.appendChild(newP);

// import React from 'react';
// import ReactDOM from 'react-dom';
// const list = <ul>
//     <li> one</li>
//     <li> two </li>
//     <li> three</li>
//     </ul>;
// function MyApp(){

//     return list;
// }    
// ReactDOM.render(<MyApp />,document.getElementById("root"));

import React from 'react';
import ReactDOM  from 'react-dom';
import MyInfo from "./components/MyInfo.js";
import App from "./App"
ReactDOM.render(<App />,document.getElementById('root'))