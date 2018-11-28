import * as React from "react";
import { Grid, Typography, Divider, Paper, List, ListItem, ListItemText } from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios';
import moment from 'moment';

class Dashboard extends React.Component{
    state = {
        pallets: null
    }

    componentDidMount(){
        this.getPallets();
    }
  
    getPallets = () => {
        let url = "https://foodbankpallettracker.firebaseio.com/Palettes.json";
        axios.get(url)
        .then(response => {
            this.setState({pallets: Object.values(response.data)});
        })
        .catch(e => {
            console.error(e);
        })
    }

    render(){
        let {classes} = this.props;

        let pallets = null;
        let numOfPallets = 0;

        if(this.state.pallets){
            pallets = this.state.pallets.map((pallet) => {
                if(new moment(pallet.shipment_date).isSame(new moment(), 'day')){
                    numOfPallets++;
                    return <ListItem divider><ListItemText>{pallet.name}</ListItemText></ListItem>
                }
                else return null;
            });
        }

        return(
            <div className={classes.root}>
                <Grid container spacing={16} className={classes.fluid}>
                    <Grid item xs={12} className={classes.row}><Typography variant="h3" >Dashboard</Typography><Divider /></Grid>
                    <Grid item xs={4} className={classes.row}>
                        <Typography variant="h6">Pallets shipping today</Typography>
                        <Paper className={classes.card}>
                            <Typography variant="h5" style={{textAlign: 'center'}}>{numOfPallets} pallet(s)</Typography>
                            <List>
                                {pallets}
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const styles = {
    root: {
        flexGrow: 1,
        backgroundColor: '#f0f0f0',
        minHeight: '100vh'
    },
    fluid: {
        padding: '20px'
    },
    row: {
        marginBottom: '10px'
    },
    card: {
        padding: '10px'
    }
}

export default withStyles(styles)(Dashboard);