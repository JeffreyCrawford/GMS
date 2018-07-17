import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import Auth from './Auth.js';




const styles = theme => ({
root: {
    display: 'flex',
    flexWrap: 'wrap',
},
margin: {
    margin: theme.spacing.unit,
},
withoutLabel: {
    marginTop: theme.spacing.unit * 3,
},
textField: {
    flexBasis: 200,
},
buttonLogin: {
    margin: theme.spacing.unit,
    backgroundColor: blue[600]
},
buttonForgot: {
    margin: theme.spacing.unit,
    backgroundColor: blue[600]
},
input: {
    display: 'none',
},
});


class UserLogin extends React.Component {





render() {
    const { classes } = this.props;

    return (
        
        <Button variant="contained" color="primary" onClick={this.props.auth.login} className={classes.buttonLogin}>
            Login
        </Button>

    );
}
}

UserLogin.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserLogin);