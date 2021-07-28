import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '@fontsource/roboto';
import '../assets/css/Pages.css';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    container: {
        padding: '20px 20px 0px 110px',
    },
    header: {
        paddingTop: '65px',
    }
}));

function Installation(props) {
    const classes = useStyles();

    const preventDefault = (event) => event.preventDefault();
    
    return (
        <div className={ classes.root }>
            <Grid container spacing={ 2 }>

                <Grid item xs={ 12 }>
                    <Navbar location='Instalación' />
                </Grid>

                
    
                <Grid item xs={ 12 } >
                    <Footer />
                </Grid>
                
            </Grid>
        </div>
    );
}

export default Installation;