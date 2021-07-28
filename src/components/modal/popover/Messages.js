import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, 
        Box, 
        Divider, 
        Popover, 
        Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

export default function Messages(props, { children }) {
    const classes = useStyles();
    return (
        <div>
        <Popover
            disableScrollLock
            id={ props.id }
            open={ props.open }
            anchorEl={ props.anchorEl }
            onClose={ props.handleClose }
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <AppBar position="static" color="inherit" className={classes.noShadow}>
            <Box pt={1} pl={2} pb={1} pr={1}>
                <Typography variant="subtitle1">{ props.title }</Typography>
            </Box>
            <Divider className={classes.divider} />
            </AppBar>
            <Typography className={classes.typography}>{ props.description }</Typography>
        </Popover>
        </div>
    );
}