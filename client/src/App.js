// src/App.js

import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import Auth from "./Components/Authentication/Auth"
import UserLogin from './Components/Authentication/UserLogin';
import UserTemplate from "./Components/UserTemplate/UserTemplate"
import NotFound from "./Components/UserTemplate/NotFound"
import Callback from "./Components/UserTemplate/Callback"
import AdminTemplate from "./Components/AdminTemplate/AdminTemplate"



class App extends Component {


  render() {
	let mainComponent = "";
	switch(this.props.location) {
		case "":
			mainComponent = this.props.auth.isAuthenticated() ? <UserTemplate {...this.props} /> : <UserLogin {...this.props}/>
			break;
		case "login":
			mainComponent = <UserLogin {...this.props}/>;
			break;
		case "callback": 
			mainComponent = <Callback {...this.props}/>
			break;
		case "profile": 
			mainComponent = <UserTemplate {...this.props}/>
			break;
		case "applications": 
			mainComponent = <UserTemplate {...this.props}/>
			break;
		case "disbursements": 
			mainComponent = <UserTemplate {...this.props}/>
			break;
		case "admin": 
		mainComponent = this.props.auth.isAuthenticated() ? <AdminTemplate {...this.props} /> : <UserLogin {...this.props}/>
			break;
		case "admin/users": 
			mainComponent = <AdminTemplate {...this.props}/>
			break;
		case "admin/applications": 
			mainComponent = <AdminTemplate {...this.props}/>
			break;
		case "admin/disbursements": 
			mainComponent = <AdminTemplate {...this.props}/>
			break;
		default:
			mainComponent = <NotFound {...this.props}/>
	}
    

    return (
		<div>
			{mainComponent}
		</div>
    );
  }
}

export default App;