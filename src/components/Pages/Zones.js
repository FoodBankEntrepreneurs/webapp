import * as React from "react";
import { Grid, Typography, Divider, Paper } from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios';

class Zones extends React.Component{
    state = {
        zones: {}
    }

    zoneInterval = null;
    
    componentDidMount(){
        this.getZones();
        this.zoneInterval = setInterval(this.getZones, 2500);
    }

    getZones = () => {
        let url = "https://foodbankpallettracker.firebaseio.com/Zone.json";
        axios.get(url)
        .then(response => {
            //console.log(response.data);
            this.setState({zones: response.data});
        })
        .catch(e => {
            console.error(e);
        })
    }

    render(){
        let {classes} = this.props;
        let zonesState = this.state.zones;
        let zones = null;
        if(zonesState)
            zones = Object.keys(zonesState).map((key) => {
                let pallets = zonesState[key].current_pallets.map((name) => {
                    return <Paper className={classes.pallet}>{name}</Paper>
                })

                return (
                    <Grid item xs={6} className={classes.zone}>
                    {key}
                    {pallets}
                    </Grid>
                )
        });
        
        return(
            <div className={classes.root}>
                <Grid container spacing={16} className={classes.fluid}>
                    <Grid item xs={12} className={classes.row}><Typography variant="h3" >Zones</Typography><Divider /></Grid>
                    {zones}
                </Grid>
            </div>
        );
    }
}

const styles = {
    root: {
        flexGrow: 1,
        backgroundColor: '#f0f0f0'
    },
    fluid: {
        padding: '20px'
    },
    row: {
        marginBottom: '10px'
    },
    zone: {
        padding: '10px',
        border: '1px solid black'
    },
    pallet: {
        display: 'inline-block',
        width: '50px',
        height: '50px',
        margin: '10px',
        lineHeight: '50px',
        textAlign: 'center'
    }
}

export default withStyles(styles)(Zones);