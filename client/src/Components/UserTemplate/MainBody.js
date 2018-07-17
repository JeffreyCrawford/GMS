import React, { Component } from 'react';
import Dashboard from "../Forms/Dashboard"
import DisbursementLanding from "../Forms/DisbursementLanding"
import ProfileForm from "../Forms/ProfileForm";
import ProjectForm from "../Forms/ProjectForm";
import ProjectLanding from "../Forms/ProjectLanding"
import UserTemplate from "./UserTemplate"
import UserLogin from "../Authentication/UserLogin"
import NotFound from "./NotFound"

import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom'



const MainBody = () => {
    return (
        <Router>
            <div>
                <Route path="/" exact={true} component={Dashboard} />
                <Route path="/home" exact={true} component={Dashboard} />
                <Route path="/profile" exact={true} component={ProfileForm} />
                <Route path="/applications" exact={true} component={ProjectLanding} />
                <Route path="/disbursements" exact={true} component={DisbursementLanding} />
            </div>
        </Router>
    );
}
  
export default MainBody;





/* class MainBody extends Component {
    render() {
        let body = "";
        switch(this.props.location) {
            case "":
                body = this.props.auth.isAuthenticated() ? <UserTemplate {...this.props} /> : <UserLogin {...this.props}/>
                break;
            case "profile":
                body = <ProfileForm {...this.props}/>;
                break;
            case "applications": 
                body = <ProjectLanding {...this.props}/>
                break;
            case "disbursements": 
                body = <DisbursementLanding {...this.props}/>
                break;
            default:
                body = <NotFound {...this.props}/>
        }
        
    
        return (
            <div>
                {body}
            </div>
        );
      }
}
  
export default MainBody; */