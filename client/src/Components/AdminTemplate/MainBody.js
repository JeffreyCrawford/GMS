import React, { Component } from 'react';
import Dashboard from "../Forms/Dashboard"
import DisbursementLanding from "../Forms/DisbursementLanding"
import ProfileForm from "../Forms/ProfileForm";
import ProjectForm from "../Forms/ProjectForm";
import ProjectLanding from "../Forms/ProjectLanding"
import AdminTemplate from "./AdminTemplate"
import UserLogin from "../Authentication/UserLogin"
import NotFound from "./NotFound"
import UsersTable from "./UsersTable"
import ApplicationsTable from "./ApplicationsTable"
import DisbursementsTable from "./DisbursementsTable"

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
                <Route path="/admin/users" exact={true} component={UsersTable} />
                <Route path="/admin/applications" exact={true} component={ApplicationsTable} />
                <Route path="/admin/disbursements" exact={true} component={DisbursementsTable} />
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