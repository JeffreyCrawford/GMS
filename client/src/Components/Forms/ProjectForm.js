import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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



class ProjectForm extends React.Component {
	state = {
        projectName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        description: "",
        environmentalImpact: "",
        totalImpacted: "",
        fundsRequested: "",
        startDate: "",
        endDate: "",
        status: ""
        };
  

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = event => {
	event.preventDefault();
	  fetch("/api/applications", {
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
                id="projectName"
                label="Project Name"
                className={classes.textField}
                value={this.projectName}
                onChange={this.handleChange('projectName')}
                style = {{width: 300}}
                margin="normal"
            />

            <TextField
                required
                id="address"
                label="Address"
                className={classes.textField}
                value={this.address}
                onChange={this.handleChange('address')}
                style = {{width: 300}}
                margin="normal"
            />

            <TextField
                required
                id="city"
                label="City"
                className={classes.textField}
                value={this.city}
                onChange={this.handleChange('city')}
                style = {{width: 300}}
                margin="normal"
            />
        </ListItem>

        <ListItem>
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
                value={this.zip}
                onChange={this.handleChange('zip')}
                style = {{width: 300}}
                margin="normal"
            />

            <TextField
                required
                id="description"
                label="Project Description"
                className={classes.textField}
                value={this.description}
                onChange={this.handleChange('description')}
                style = {{width: 300}}
                margin="normal"
            />
        </ListItem>

        <ListItem>
            <TextField
                required
                id="environmentalImpact"
                label="Environmental Impact"
                className={classes.textField}
                value={this.environmentalImpact}
                onChange={this.handleChange('environmentalImpact')}
                style = {{width: 300}}
                margin="normal"
            />

            <TextField
                required
                id="totalImpacted"
                label="Number of People Impacted"
                className={classes.textField}
                value={this.totalImpacted}
                onChange={this.handleChange('totalImpacted')}
                style = {{width: 300}}
                margin="normal"
            />

            <TextField
                required
                id="fundsRequested"
                label="Funds Requested"
                className={classes.textField}
                value={this.fundsRequested}
                onChange={this.handleChange('fundsRequested')}
                style = {{width: 300}}
                margin="normal"
            />
        </ListItem>

        <ListItem>
            <TextField
                required
                id="startDate"
                label="Estimated Start Date"
                className={classes.textField}
                value={this.startDate}
                onChange={this.handleChange('startDate')}
                style = {{width: 457.5}}
                margin="normal"
            />

            <TextField
                required
                id="endDate"
                label="Estimated End Date"
                className={classes.textField}
                value={this.endDate}
                onChange={this.handleChange('endDate')}
                style = {{width: 457.5}}
                margin="normal"
            />
        </ListItem>



        <ListItem>
            <Button variant="contained" color="primary" className={classes.buttonCancel}>
                Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary" className={classes.buttonSubmit}>
                Submit
            </Button>
        </ListItem>

    </form>
    );
  }
}

ProjectForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectForm);