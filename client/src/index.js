import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'   
import UserLogin from "./Components/Authentication/UserLogin"
import Auth from "./Components/Authentication/Auth"

const auth = new Auth();

let state = {};
window.setState = (changes) => {
    state = Object.assign({}, state, changes);

    ReactDOM.render(
    <App {...state}/>
    , document.getElementById('root'));

};
/* eslint no-restricted-globals: 0*/
let initialState = {
    name: "jeff",
    location: location.pathname.replace(/^\/?|\/$/g, ""),
    auth
}

window.setState(initialState)

registerServiceWorker();
