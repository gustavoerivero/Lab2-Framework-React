import React from 'react';
import { Button, 
        Dialog, 
        DialogActions, 
        DialogContent, 
        DialogContentText, 
        DialogTitle } from '@material-ui/core';

export default function AlertDialog(props) {

  return (
    <Dialog
      open={ props.open }
      onClose={ props.handleClose }
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{ props.title }</DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
          { props.description }
        </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ props.handleClose } color="primary">
            { props.decline } 
          </Button>
          <Button onClick={ props.handleClose } color="primary" autoFocus>
            { props.accept } 
          </Button>
        </DialogActions>
      </Dialog>
    );
  }