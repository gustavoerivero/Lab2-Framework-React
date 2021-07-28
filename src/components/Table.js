import * as React from 'react';
import { Paper } from '@material-ui/core';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import '../assets/css/Table.css';

const useStyles = makeStyles(() => ({
  root: {
      height: 320,
      minWidth: 370,
      maxWidth: 910,
      border: '#424242'
  },
}));

const columns = [
  {
    field: 'task',
    headerName: 'Tarea',
    width: 200,
    editable: true,
  },
  {
    field: 'start',
    headerName: 'Inicio',
    width: 130,
    editable: true,
  },
  {
    field: 'end',
    headerName: 'Entrega',
    width: 130,
    editable: true,
  },
  {
    field: 'responsable',
    headerName: 'Responsable',
    width: 200,
    editable: true,    
  },
];

export default function Table(props) {

  const classes = useStyles();

  const [pageSize, setPageSize] = React.useState(3);

  const handlePageSizeChange = (params) => {
    setPageSize(params.pageSize);
  };


  return (
    <Paper
      className={ classes.root }>
      <DataGrid
        className={ classes.root }
        rows={ props.rows }
        columns={ columns }
        checkboxSelection
        disableSelectionOnClick
        sortModel={[
          {
            field: 'end',
            sort: 'asc'
          }
        ]}
        components={{
          Toolbar: GridToolbar,
        }}
        pageSize={ pageSize }
        onPageSizeChange={ handlePageSizeChange }
        rowsPerPageOptions={ [3, 6, 9] }
        pagination
      />
    </Paper>
  );
}