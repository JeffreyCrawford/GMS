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

const DisbursementLanding = () => {
    return(
        <div>
            <NewDisbursement />
        <div>
            <br />
        </div>
            <DisbursementExpansion />
        </div>
    )
}

export default DisbursementLanding