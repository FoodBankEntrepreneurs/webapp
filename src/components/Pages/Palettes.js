import * as React from "react";
import { Grid, Typography, Divider, Button, Paper } from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import Table from '../Palettes/Table';
import {AddPaletteModal} from '../Palettes/AddPaletteModal';

class Palettes extends React.Component{
    state = {
        open: false
    }

    handleAddPalette = () => {
        this.setState({open: true});
    }

    closeDialog = () => {
        this.setState({open: false});
    }

    render(){
        let {classes} = this.props;
        return(
            <div className={classes.root}>
                <Grid container spacing={16} className={classes.fluid}>
                    <Grid item xs={12} className={classes.row}><Typography variant="h3" >Pallets</Typography><Divider /></Grid>
                    <Grid item xs={12} className={classes.row}>
                        <Button variant="contained" color="primary" onClick={this.handleAddPalette}>Add pallet</Button>
                        <AddPaletteModal open={this.state.open} closeDialog={this.closeDialog}/>
                    </Grid>
                    <Grid item xs={12} className={classes.row}>
                        <Paper><Table data={this.state.pallets}/></Paper>
                    </Grid>
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
    }
}

export default withStyles(styles)(Palettes);