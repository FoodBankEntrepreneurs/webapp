import * as React from "react";
import { Grid, Typography, Divider, Button } from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import Table from '../Palettes/Table';

class Palettes extends React.Component{

    handleAddPalette = () => {

    }

    render(){
        let {classes} = this.props;
        return(
            <div className={classes.root}>
                <Grid container spacing={12} className={classes.fluid}>
                    <Grid item xs={12} className={classes.row}><Typography variant="h3" >Palettes</Typography><Divider /></Grid>
                    <Grid item xs={12} className={classes.row}>
                        <Button variant="contained" color="primary" onClick={this.handleAddPalette}>Add palette</Button>
                    </Grid>
                    <Grid item xs={12} className={classes.row}><Table/></Grid>
                </Grid>
            </div>
        );
    }
}

const styles = {
    root: {
        flexGrow: 1
    },
    fluid: {
        padding: '20px'
    },
    row: {
        marginBottom: '10px'
    }
}

export default withStyles(styles)(Palettes);