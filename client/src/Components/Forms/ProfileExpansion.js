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
    width: 300


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



class ProfileExpansion extends React.Component {
  state = {
    expanded: null,
    profiles: []
  };


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


getInitialState = () => {
    return {
      profiles: []
    }
};

  componentDidMount = () => {
    var _this = this;
    fetch("/api/profiles", {
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
            profiles: res
        }) 
    })
  }

  

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;


    return (
        <div>
            <div className={classes.root}>
                {this.state.profiles.map(profile => {
                    return( 
                    <ExpansionPanel  >
                        <Divider />
                            
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>{profile.id} {profile.name}</Typography>
                        <Typography className={classes.secondaryHeading}>{profile.community}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                        <ListItem>
                                <TextField
                                    disabled
                                    id="name"
                                    label="Your Name"
                                    className={classes.textField}
                                    value={profile.name}
                                    onChange={this.handleChange('name')}
                                    
                                    margin="normal"
                                />

                                <TextField
                                    disabled
                                    id="email"
                                    label="Email"
                                    className={classes.textField}
                                    value={profile.email}
                                    onChange={this.handleChange('email')}
                                    
                                    margin="normal"
                                />

                                <TextField
                                    disabled
                                    id="phone"
                                    label="Contact Phone"
                                    className={classes.textField}
                                    value={profile.phone}
                                    onChange={this.handleChange('phone')}
                                    
                                    margin="normal"
                                />
                            </ListItem>

                            <ListItem>

                                <TextField
                                    disabled
                                    id="community"
                                    label="Community Name"
                                    className={classes.textField}
                                    value={profile.community}
                                    onChange={this.handleChange('community')}
                                    
                                    margin="normal"
                                />

                                <TextField
                                    disabled
                                    id="county"
                                    label="County Where Community is Located"
                                    className={classes.textField}
                                    value={profile.county}
                                    onChange={this.handleChange('county')}
                                    
                                    margin="normal"
                                />


                                <TextField
                                    disabled
                                    id="address"
                                    label="Community Mailing Address"
                                    className={classes.textField}
                                    value={profile.address}
                                    onChange={this.handleChange('address')}
                                    
                                    margin="normal"
                                />

                            </ListItem>

                            <ListItem>

                                <TextField
                                    disabled
                                    id="city"
                                    label="City"
                                    className={classes.textField}
                                    value={profile.city}
                                    onChange={this.handleChange('city')}
                                    
                                    margin="normal"
                                />

                                <TextField
                                    disabled
                                    id="state"
                                    label="State"
                                    className={classes.textField}
                                    value={profile.state}
                                    onChange={this.handleChange('state')}
                                    
                                    margin="normal"
                                />

                                <TextField
                                    disabled
                                    id="zip"
                                    label="Zip Code"
                                    className={classes.textField}
                                    value={profile.zip}
                                    onChange={this.handleChange('zip')}
                                    
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
                            <Divider />
                            
                            <Divider />

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

ProfileExpansion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileExpansion);