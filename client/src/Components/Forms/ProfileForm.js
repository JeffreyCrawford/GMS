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



class ProfileForm extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    organization: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

  

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
	  fetch("/api/profiles", {
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
		<Paper className={classes.paper} elevation={1}>
			<form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
			<ListItem>
				<TextField
					required
					id="name"
					label="Your Name"
					className={classes.textField}
					value={this.state.name}
					onChange={this.handleChange('name')}
					style = {{width: 300}}
					margin="normal"
				/>

				<TextField
					required
					id="email"
					label="Email"
					className={classes.textField}
					value={this.state.email}
					onChange={this.handleChange('email')}
					style = {{width: 300}}
					margin="normal"
				/>

				<TextField
					required
					id="phone"
					label="Contact Phone"
					className={classes.textField}
					value={this.state.phone}
					onChange={this.handleChange('phone')}
					style = {{width: 300}}
					margin="normal"
				/>
			</ListItem>

			<Divider />

			<ListItem>

				<TextField
					required
					id="organization"
					label="Organization Name"
					className={classes.textField}
					value={this.state.organization}
					onChange={this.handleChange('organization')}
					style = {{width: 300}}
					margin="normal"
				/>

				<TextField
					required
					id="address"
					label="Community Mailing Address"
					className={classes.textField}
					value={this.state.address}
					onChange={this.handleChange('address')}
					style = {{width: 300}}
					margin="normal"
				/>

			</ListItem>

			<ListItem>

				<TextField
					required
					id="city"
					label="City"
					className={classes.textField}
					value={this.state.city}
					onChange={this.handleChange('city')}
					style = {{width: 300}}
					margin="normal"
				/>

				<TextField
					required
					id="state"
					label="State"
					className={classes.textField}
					value={this.state.state}
					onChange={this.handleChange('state')}
					style = {{width: 300}}
					margin="normal"
				/>

				<TextField
					required
					id="zip"
					label="Zip Code"
					className={classes.textField}
					value={this.state.zip}
					onChange={this.handleChange('zip')}
					style = {{width: 300}}
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
		</Paper>
    );
  }
}

ProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileForm);