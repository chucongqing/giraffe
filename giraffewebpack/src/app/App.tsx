import React from 'react';
import ReactDOM from 'react-dom';
import PrintMe from './print';
import Redux from 'redux'
import DataFecthApp from './datafecth';


function App(){
    return (
        <div>
            <DataFecthApp></DataFecthApp>
        </div>
    );
}

const root = document.createElement("root")
root.id = "react-root"
document.body.appendChild(root);

ReactDOM.render(
    <App></App>,
    root
)
