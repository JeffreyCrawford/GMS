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

const styles = theme => ({
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
    }

});



class DisbursementRequestForm extends React.Component {
	state = {
		name: "",
		fundsRequested: "",
		finalDisbursement: "",
		date: "",
		signature: "",
		status: ""
	};

  

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
	  fetch("/api/disbursementrequests", {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(this.state)
  })
  }

  render() {
    const { classes } = this.props;

    return (
			<form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
				<ListItem>
					<TextField
						required
						id="name"
						label="Project Name"
						className={classes.textField}
						value={this.state.name}
						onChange={this.handleChange('name')}
						style = {{width: 457.5}}
						margin="normal"
					/>
				</ListItem>
				<ListItem>

					<TextField
						required
						id="fundsRequested"
						label="Funds Requested"
						className={classes.textField}
						value={this.state.fundsRequested}
						onChange={this.handleChange('fundsRequested')}
						style = {{width: 457.5}}
						margin="normal"
					/>
				</ListItem>
				<ListItem>

					<TextField
						required
						id="finalDisbursement"
						label="Final Disbursement for this Project?"
						className={classes.textField}
						value={this.state.finalDisbursement}
						onChange={this.handleChange('finalDisbursement')}
						style = {{width: 457.5}}
						margin="normal"
					/>
				</ListItem>
				<ListItem>

					<TextField
						required
						id="signature"
						label="Signature"
						className={classes.textField}
						value={this.state.signature}
						onChange={this.handleChange('signature')}
						style = {{width: 457.5}}
						margin="normal"
					/>
				</ListItem>
				<ListItem>

					<TextField
						required
						id="date"
						label="Date"
						className={classes.textField}
						value={this.state.date}
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
    );
  }
}

DisbursementRequestForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisbursementRequestForm);