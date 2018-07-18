import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ProfileIcon from '@material-ui/icons/AccountBox';
import ProjectIcon from '@material-ui/icons/Build';
import DisbursementIcon from '@material-ui/icons/AttachMoney';
import HomeIcon from '@material-ui/icons/Home';
import MainBody from "./MainBody"



import HeaderText from "./HeaderText";
/* import MainBody from "./MainBody"; */
import blue from '@material-ui/core/colors/blue';
import {
BrowserRouter as Router,
Route,
Link,
Switch,
Redirect
} from 'react-router-dom'


const drawerWidth = 240;

const styles = theme => ({
root: {
flexGrow: 1,
height: 430,
zIndex: 1,
position: 'relative',
display: 'flex',
},
appBar: {
zIndex: theme.zIndex.drawer + 1,
backgroundColor: blue[600]
},
drawerPaper: {
position: 'relative',
width: drawerWidth,
},
content: {
flexGrow: 1,
backgroundColor: theme.palette.background.default,
padding: theme.spacing.unit * 3,
minWidth: 0, // So the Typography noWrap works
},
toolbar: theme.mixins.toolbar,
});

class UserTemplate extends React.Component {

render() {
    const { classes } = this.props;
    return (
    <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar>
                <Typography variant="title" color="inherit" noWrap>
                    <HeaderText />
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />
        <List component="nav">
            <ListItem button component="a" href="/">
                <ListItemIcon>
                <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component="a" href="/profile">
                <ListItemIcon >
                <ProfileIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button component="a" href="/applications">
                <ListItemIcon>
                <ProjectIcon />
                </ListItemIcon>
                <ListItemText primary="Applications" />
            </ListItem>
            <ListItem button component="a" href="/disbursements">
                <ListItemIcon>
                <DisbursementIcon />
                </ListItemIcon>
                <ListItemText primary="Disbursements" />
            </ListItem>
        </List>
        <Divider />
        <List component="nav">
            <ListItem button>
            <ListItemText primary="Log Out" />
            </ListItem>
            <ListItem button component="a" href="https://www.google.com">
            <ListItemText primary="Contact Us" />
            </ListItem>
        </List>
        </Drawer>
            <main className={classes.content}>
            <div className={classes.toolbar} />
                <MainBody />
            </main>
    </div>
    );
}
}

UserTemplate.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserTemplate);






