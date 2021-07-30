import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import HomeButtons from '../components/HomeButtons';
import DataList from '../components/DataList';
import Footer from '../components/Footer';
import '@fontsource/roboto';
import '../assets/css/Pages.css';

import DashboardImage from '../assets/img/dashboard.png';
import InstallationImage from '../assets/img/installation.png';
import DevelopmentImage from '../assets/img/programming.png';
import LibrariesImage from '../assets/img/libraries.jpeg';
import ComponentsImage from '../assets/img/components.jpg';
import Error404Page from '../assets/img/error404.png';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    container: {
        padding: '10px 20px 0px 110px',
    },
    header: {
        padding: '65px 20px 0px 110px',
    },
    buttons: {
        padding: '10px 20px 0px 110px',
        alignSelf: 'center'
    },
}));

function Home(props) {
    const classes = useStyles();
    
    const images = [
        {
            url: DashboardImage,
            title: 'Dashboard',
            width: '16.5%',
            to: '/Dashboard'
        },
        {
            url: InstallationImage,
            title: 'Instalación',
            width: '16.5%',
            to: '/Installation'
        },
        {
            url: DevelopmentImage,
            title: 'Desarrollo',
            width: '16.5%',
            to: '/Development'
        },
        {
            url: LibrariesImage,
            title: 'Librerías',
            width: '16.5%',
            to: '/Libraries'
        },
        {
            url: ComponentsImage,
            title: 'Componentes',
            width: '16.5%',
            to: '/Components'
        },
        {
            url: Error404Page,
            title: 'Error 404',
            width: '16.5%',
            to: '/error404'
        },
    ];
    
    return (
        <div className={ classes.root }>
            <Grid container spacing={ 2 } justify='center'>

                <Grid item xs={ 12 }>
                    <Navbar location='Inicio' />
                </Grid>

                <Grid item xs={ 12 } justify='center'>
                    <Typography align='center' variant='h5' component='h2' className={ classes.header }>
                        <b>Laboratorio II</b>
                        <Typography align='center' variant='body1' component='h3'>
                            Práctica de Framework: React.js
                        </Typography>
                    </Typography>
                    <Typography align='center' className={ classes.buttons }>
                        <HomeButtons images={ images } className={ classes.buttons } />
                    </Typography>
                </Grid>

                <Grid container className={ classes.container } xs={ 12 }>
                    <DataList />
                </Grid>
    
                <Grid item xs={ 12 } >
                    <Footer />
                </Grid>
                
            </Grid>
        </div>
    );
}

export default Home;