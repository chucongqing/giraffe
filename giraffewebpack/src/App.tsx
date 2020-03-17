import React from 'react';
import ReactDOM from 'react-dom';
import PrintMe from './print'
// import $ from 'jquery';

function App(){
    return (
        <div>
            <h1>This is a React App!</h1>
        </div>
    );
}
console.log("App init")
console.log('> ' + PrintMe());
const root = document.createElement("root")
root.id = "react-root"
document.body.appendChild(root);

ReactDOM.render(
    <App></App>,
    root
)
