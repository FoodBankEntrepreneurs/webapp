import * as React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton, Badge, Menu, MenuItem} from '@material-ui/core';
import {teal} from '@material-ui/core/colors';
import {withStyles} from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

const DashboardLink = props => <Link to="/" {...props} />
const PaletteLink = props => <Link to="/palettes" {...props} />
const ZoneLink = props => <Link to="/zones" {...props} />
const ReportLink = props => <Link to="/reports" {...props} />

class Topbar extends React.Component{
    state = {
        anchorEl: null
      };
    
    handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
      };    

    render(){
        let {anchorEl} = this.state;
        let {classes} = this.props;
        const isMenuOpen = Boolean(anchorEl);

        const renderMenu = (
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMenuOpen}
              onClose={this.handleMenuClose}
            >
              <MenuItem onClick={this.handleMenuClose}>stuff</MenuItem>
              <MenuItem onClick={this.handleMenuClose}>stuff 2</MenuItem>
            </Menu>
          );

        return(
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h5" color="inherit">Inventory App</Typography>
                    <Button component={DashboardLink} className={classNames(classes.button, classes.leftMargin)}>Dashboard</Button>
                    <Button component={PaletteLink} className={classes.button}>Palettes</Button>
                    <Button component={ZoneLink} className={classes.button}>Zones</Button>
                    <Button component={ReportLink} className={classes.button}>Reports</Button>
                    <div style={{flexGrow: 1}}></div>
                    <div>
                        <IconButton color="inherit" onClick={this.handleProfileMenuOpen}>
                            <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </div>
                    {renderMenu}
                </Toolbar>
            </AppBar>
        );
    }
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