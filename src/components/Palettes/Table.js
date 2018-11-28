import * as React from 'react';
import ReactTable from "react-table";
import axios from 'axios';

class PaletteTable extends React.Component{
  state = {
    pallets: []
  }

  palletInterval = null;

  componentDidMount(){
      this.getPallets();
      //this.palletInterval =  setInterval(this.getPallets, 2500)
  }

  componentWillUnmount(){
    clearInterval(this.palletInterval);
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
    const columns = [{
        Header: 'Date created',
        accessor: 'date_created'
      },{
        Header: 'Name',
        accessor: 'name'
      }, {
        Header: 'Expected ship date',
        accessor: 'shipment_date',
        Cell: props => <span className='number'>{props.value}</span>
      }]
    
    return(
        <ReactTable
            data={this.state.pallets}
            columns={columns}
            filterable
        />
    );
  }
}

export default PaletteTable;