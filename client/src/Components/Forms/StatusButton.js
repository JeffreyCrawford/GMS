
import NavigationIcon from '@material-ui/icons/Navigation';





import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import Paper from '@material-ui/core/Paper';
import NewDisbursement from './NewDisbursement';
import DisbursementExpansion from './DisbursementExpansion';
import green from '@material-ui/core/colors/green';
import ApprovedIcon from '@material-ui/icons/CheckCircle';


const styles = theme => ({
    button: {
      color: green[500]
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

class StatusButton extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <div>

                Approved <ApprovedIcon className={classes.button} />
            </div>
        )
    }
}

StatusButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(StatusButton);