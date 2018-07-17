import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom'



const HeaderText = () => {
    return (
		<Router>
			<Switch>
				<div>
 					<Route path="/" exact={true} render={() => { return "Grant Homepage"}} />
					<Route path="/home" exact={true} render={() => { return "Grant Homepage"}} />
					<Route path="/profile" exact={true} render={() => { return "Organization Profile"}} />
					<Route path="/applications" exact={true} render={() => { return "Grant Applications"}} />
					<Route path="/disbursements" exact={true} render={() => { return "Disbursement Requests"}} /> 
				</div>
			</Switch>
		</Router>
    );
  }
  
  export default HeaderText;