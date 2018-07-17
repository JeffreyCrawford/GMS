import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';

import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import Paper from '@material-ui/core/Paper';
import StatusButton from './StatusButton';

const styles = theme => ({
  root: {
    width: '70%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    margin: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
  buttonSubmit: {
	margin: theme.spacing.unit,
	backgroundColor: blue[600]
  },
  buttonCancel: {
	margin: theme.spacing.unit,
	backgroundColor: yellow[700]
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 1000
    },

});



class DisbursementExpansion extends React.Component {
  state = {
    expanded: null,
    disbursementrequests: []
  };


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


getInitialState = () => {
    return {
      disbursementrequests: []
    }
};

  componentDidMount = () => {
    var _this = this;
    fetch("/api/disbursementrequests", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
      
    })
    .then(function(res) {
        return res.json()
    })
    .then(function(res) {
        console.log(res)
        _this.setState({
            disbursementrequests: res
        }) 
    })
  }

  

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;


    return (
        <div>
            <div className={classes.root}>
                {this.state.disbursementrequests.map(disbursementrequest => {
                    return( 
                    <ExpansionPanel>
                            
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>{disbursementrequest.id} {disbursementrequest.name}</Typography>
                        <Typography className={classes.secondaryHeading}></Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
                                <ListItem>
                                    <TextField
                                        disabled
                                        id="name"
                                        label="Project Name"
                                        className={classes.textField}
                                        value={disbursementrequest.name}
                                        onChange={this.handleChange('name')}
                                        style = {{width: 457.5}}
                                        margin="normal"
                                    />
                                </ListItem>
                                <ListItem>

                                    <TextField
                                        disabled
                                        id="fundsRequested"
                                        label="Funds Requested"
                                        className={classes.textField}
                                        value={disbursementrequest.fundsRequested}
                                        onChange={this.handleChange('fundsRequested')}
                                        style = {{width: 457.5}}
                                        margin="normal"
                                    />
                                </ListItem>
                                <ListItem>

                                    <TextField
                                        disabled
                                        id="finalDisbursement"
                                        label="Final Disbursement for this Project?"
                                        className={classes.textField}
                                        value={disbursementrequest.finalDisbursement}
                                        onChange={this.handleChange('finalDisbursement')}
                                        style = {{width: 457.5}}
                                        margin="normal"
                                    />
                                </ListItem>
                                <ListItem>

                                    <TextField
                                        disabled
                                        id="signature"
                                        label="Signature"
                                        className={classes.textField}
                                        value={disbursementrequest.signature}
                                        onChange={this.handleChange('signature')}
                                        style = {{width: 457.5}}
                                        margin="normal"
                                    />
                                </ListItem>
                                <ListItem>

                                    <TextField
                                        disabled
                                        id="date"
                                        label="Date"
                                        className={classes.textField}
                                        value={disbursementrequest.date}
                                        onChange={this.handleChange('date')}
                                        style = {{width: 457.5}}
                                        margin="normal"
                                    />

                                </ListItem>

                                <ListItem>
                                <Button variant="contained" color="primary" className={classes.buttonCancel}>
                                    Cancel
                                </Button>
                                <Button type="submit"  variant="contained" color="primary" className={classes.buttonSubmit}>
                                    Submit
                                </Button>
                                </ListItem>
                    
                            </form>


                        </Typography>

                        </ExpansionPanelDetails>

                    </ExpansionPanel>
                    )}
                )} 
            </div>
            
        </div>

    );
  }
}

DisbursementExpansion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisbursementExpansion);