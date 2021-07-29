import React from 'react';
import * as RouterDom from 'react-router-dom';
import { Grid, IconButton, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '@fontsource/roboto';
import '../assets/css/Pages.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    container: {
        padding: '65px 20px 0px 110px',
    },
    header: {
        paddingTop: '125px',
        paddingLeft: '65px'
    },
    nextPage: {
        paddingLeft: '50px',
        paddingTop: '20px',
    }
}));

function Libraries(props) {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <Grid container spacing={ 2 }>

                <Grid item xs={ 12 }>
                    <Navbar location='Librerías' />
                </Grid>
                
                <Grid container spacing={ 2 } className={ classes.container }>
                    <Grid item xs={ 12 } className={ classes.header }>
                        <Typography variant='h2' component='h2'>
                            Librerías utilizadas
                        </Typography>
                    </Grid>
                </Grid>
    

                <Grid item xs={ 12 } justify='center'>
                    <Typography align='center' className={ classes.nextPage }>
                        <Tooltip title='Desarrollo' aria-label='Desarrollo'>
                            <IconButton component={ RouterDom.Link } to='/Development' color='primary'>
                                <NavigateBeforeIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Componentes' aria-label='Componentes'>
                            <IconButton component={ RouterDom.Link } to='/Components' color='primary'>
                                <NavigateNextOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </Typography>
                </Grid>

                <Grid item xs={ 12 } >
                    <Footer />
                </Grid>
                
            </Grid>
        </div>
    );
}

export default Libraries;