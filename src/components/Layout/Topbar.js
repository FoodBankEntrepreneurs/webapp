import * as React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton, Badge, Menu, MenuItem} from '@material-ui/core';
import {teal} from '@material-ui/core/colors';
import {withStyles} from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';
import moment from 'moment';

const DashboardLink = props => <Link to="/" {...props} />
const PaletteLink = props => <Link to="/palettes" {...props} />
const ZoneLink = props => <Link to="/zones" {...props} />
//const ReportLink = props => <Link to="/reports" {...props} />

class Topbar extends React.Component{
    state = {
        anchorEl: null,
        zones: {}
      };
    
    zoneInterval = null;

    componentDidMount(){
        this.getZones();
        this.zoneInterval = setInterval(this.getZones, 4500);
    }

    componentWillUnmount(){
        clearInterval(this.zoneInterval);
    }

    getZones = () => {
        let url = "https://foodbankpallettracker.firebaseio.com/Zone.json";
        axios.get(url)
        .then(response => {
            this.setState({zones: response.data});
        })
        .catch(e => {
            console.error(e);
        })
    }
    
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

        let notificationNum = 0;

        let zonesState = this.state.zones;
        let notifications = null;

        if(zonesState)
            notifications = Object.keys(zonesState).map((key) => {
                let expectedPallets = null;
                if(zonesState[key].expected_pallets)
                    expectedPallets = zonesState[key].expected_pallets;

                let incorrectLoadedPallets = [];

                if(zonesState[key].loaded_pallets && expectedPallets){
                    incorrectLoadedPallets = zonesState[key].loaded_pallets.map((name) => {
                        if(!name.includes(key) || !expectedPallets.includes(name)){
                            notificationNum++;
                            return <MenuItem><Typography>{name} has been loaded to the incorrect truck</Typography></MenuItem>
                        }
                    });
                }

                let missedPallets = [];
                if(zonesState[key].loaded_pallets && expectedPallets){
                    missedPallets = zonesState[key].expected_pallets.map((name) => {
                        if(!zonesState[key].loaded_pallets.includes(name) && new moment(zonesState[key].departure_time).isBefore(new moment(), "minute")){
                            notificationNum++;
                            return <MenuItem><Typography>{name} is missing in truck {key}</Typography></MenuItem>
                        }
                    });
                }
                if(!zonesState[key].loaded_pallets && expectedPallets){
                    missedPallets = zonesState[key].expected_pallets.map((name) => {
                        if(new moment(zonesState[key].departure_time).isBefore(new moment(), "minute")){
                            notificationNum++;
                            return <MenuItem><Typography>{name} is missing in truck {key}</Typography></MenuItem>
                        }
                    });
                }



                return [...incorrectLoadedPallets, ...missedPallets];
        });

        if(notificationNum === 0)
            notifications = (<MenuItem>No new notifications</MenuItem>);

        const renderMenu = (
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMenuOpen}
              onClose={this.handleMenuClose}
            >
              {notifications}
            </Menu>
          );

        const renderNotificationIcon = 
            notificationNum>0 ?
            (
                <IconButton color="inherit" onClick={this.handleProfileMenuOpen}>
                    <Badge badgeContent={notificationNum} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            ):
            (
                <IconButton color="inherit" onClick={this.handleProfileMenuOpen}>
                    <NotificationsIcon />
                </IconButton>
            )


        return(
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h5" color="inherit">InventoryLab</Typography>
                    <Button component={DashboardLink} className={classNames(classes.button, classes.leftMargin)}>Dashboard</Button>
                    <Button component={PaletteLink} className={classes.button}>Pallets</Button>
                    <Button component={ZoneLink} className={classes.button}>Zones</Button>
                    <div style={{flexGrow: 1}}></div>
                    <div>
                        {renderNotificationIcon}
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