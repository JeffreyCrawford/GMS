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
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import ProjectForm from "./ProjectForm"

const styles = theme => ({
root: {
	width: '100%',
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
	}
});



class NewProject extends React.Component {
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
		fetch("/api/projects", {
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




			<div className={classes.root}>
			<ExpansionPanel>
			<ExpansionPanelSummary expandIcon={<AddIcon />}>
				<Typography className={classes.heading}>New Project</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<Typography>
					<ProjectForm />
				</Typography>
			</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>








			
		);
	}
}

NewProject.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewProject);