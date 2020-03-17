import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';


import _ from "lodash"
import printMe from 'app/print.js'
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button')
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    btn.innerHTML = 'Click me123';

    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }
  
  document.body.appendChild(component());