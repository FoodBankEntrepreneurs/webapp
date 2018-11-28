import * as React from 'react';
import {Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField} from '@material-ui/core'
import axios from 'axios';
import moment from 'moment';

export class AddPaletteModal extends React.Component{
    state = {
        name: "",
        shipDate: new moment().format('YYYY-MM-DDThh:mm')
    }

    handleTextFieldChange = name => e => {
        this.setState({[name]: e.target.value});
    }

    submitNewPalette = () => {
        let url = "https://foodbankpallettracker.firebaseio.com/Palettes.json";
        let newPalette = {[this.state.name]: {
            name: this.state.name,
            date_created: new moment(),
            shipment_date: this.state.shipDate
        }}
        
        axios.patch(url, newPalette)
        .then(response => {
            console.log(response);
            this.props.closeDialog();
            this.setState({name: "", shipDate: new moment().format('YYYY-MM-DDThh:mm')})
        })
        .catch(e => {
            console.error(e);
        })
    }

    render(){
        return(
            <Dialog open={this.props.open} onClose={this.props.closeDialog}>
                <DialogTitle>Add a new Palette</DialogTitle>
                <DialogContent>
                    <TextField 
                        fullWidth 
                        variant="filled" 
                        label="Name" 
                        value={this.state.name} 
                        onChange={this.handleTextFieldChange('name')}
                        margin="normal"/>
                        <TextField 
                        fullWidth 
                        variant="filled" 
                        label="Shipment date and time" 
                        value={this.state.shipDate} 
                        onChange={this.handleTextFieldChange('shipDate')}
                        margin="normal"
                        type="datetime-local"/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.closeDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.submitNewPalette} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}