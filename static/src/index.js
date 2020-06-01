/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


var name = "Craig";

var element = (
  <div>
  <h1>Hello, { name }.Welcome to Bearsy Land.< /h1>
  <p>Where the <b>bearsy</b> rules the roost.</p>
  <table>
    <tr><td>Pup</td><td>Bearsy</td></tr>
    <tr><td>0</td><td>5000</td></tr>
  </table>
  </div>
);

ReactDOM.render(
    element,
    document.getElementById("root")
);

//var i = 1;

//const element = <h1>{ (i == 1) ? 'Hello World!' : 'False!' } < /h1>;
const element = <App />;

ReactDOM.render(
    element,
    document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
