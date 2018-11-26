import * as React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import {teal} from '@material-ui/core/colors';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

const DashboardLink = props => <Link to="/" {...props} />
const PaletteLink = props => <Link to="/palettes" {...props} />
const ZoneLink = props => <Link to="/zones" {...props} />
const ReportLink = props => <Link to="/reports" {...props} />

const Topbar = ({classes}) => {
    return(
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h5" color="inherit">Inventory App</Typography>
                <Button component={DashboardLink} className={classNames(classes.button, classes.leftMargin)}>Dashboard</Button>
                <Button component={PaletteLink} className={classes.button}>Palettes</Button>
                <Button component={ZoneLink} className={classes.button}>Zones</Button>
                <Button component={ReportLink} className={classes.button}>Reports</Button>
            </Toolbar>
        </AppBar>
    );
}

const styles = theme => ({
    button: {
        color: theme.palette.getContrastText(teal[500]),
        backgroundColor: teal[500],
        '&:hover': {
            backgroundColor: teal[500],
            borderBottom: 'solid 2px white'
        }
    },
    leftMargin: {
        marginLeft: '50px'
    }
})

export default withStyles(styles)(Topbar);