import * as React from 'react';
import ReactTable from "react-table";

const PaletteTable = (props) => {
    const data =  [];
    
    const columns = [{
        Header: 'Name',
        accessor: 'name'
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span>
      }, {
        id: 'friendName',
        Header: 'Friend Name',
        accessor: d => d.friend.name
      }, {
        Header: props => <span>Friend Age</span>,
        accessor: 'friend.age'
      }]
    
    return(
        <ReactTable
            data={data}
            columns={columns}
        />
    );
}

export default PaletteTable;