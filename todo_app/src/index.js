import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render( < div > <h1> Hello World </h1><p>This is a paragraph</p> </div>,document.getElementById("root"))
var newP = document.createElement("p");
newP.innerHTML="This is basics of React.js";
document.body.appendChild(newP);