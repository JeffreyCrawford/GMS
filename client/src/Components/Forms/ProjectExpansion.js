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
    },

});



class ProjectExpansion extends React.Component {
  state = {
    expanded: null,
    projects: []
  };


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


getInitialState = () => {
    return {
      projects: []
    }
};

  componentDidMount = () => {
    var _this = this;
    fetch("/api/applications", {
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
            projects: res
        }) 
    });

    
  }

  

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;


    return (
        <div>
            <div className={classes.root}>
                {this.state.projects.map(project => {
                    return( 
                    <ExpansionPanel>
                            
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>{project.id} {project.project_name}</Typography>
                        <Typography className={classes.secondaryHeading}></Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                        <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">

                            <ListItem>
                                <TextField
                                    required
                                    id="projectName"
                                    label="Project Name"
                                    className={classes.textField}
                                    value={project.projectName}
                                    onChange={this.handleChange('projectName')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="address"
                                    label="Address"
                                    className={classes.textField}
                                    value={project.address}
                                    onChange={this.handleChange('address')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="city"
                                    label="City"
                                    className={classes.textField}
                                    value={project.city}
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
                                    value={project.state}
                                    onChange={this.handleChange('state')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="zip"
                                    label="Zip Code"
                                    className={classes.textField}
                                    value={project.zip}
                                    onChange={this.handleChange('zip')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="description"
                                    label="Project Description"
                                    className={classes.textField}
                                    value={project.description}
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
                                    value={project.environmentalImpact}
                                    onChange={this.handleChange('environmentalImpact')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="totalImpacted"
                                    label="Number of People Impacted"
                                    className={classes.textField}
                                    value={project.totalImpacted}
                                    onChange={this.handleChange('totalImpacted')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="fundsRequested"
                                    label="Funds Requested"
                                    className={classes.textField}
                                    value={project.fundsRequested}
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
                                    value={project.startDate}
                                    onChange={this.handleChange('startDate')}
                                    style = {{width: 457.5}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="endDate"
                                    label="Estimated End Date"
                                    className={classes.textField}
                                    value={project.endDate}
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

ProjectExpansion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectExpansion);