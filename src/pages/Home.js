import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import DataList from '../components/DataList';
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

function Home(props) {
    const classes = useStyles();

    const preventDefault = (event) => event.preventDefault();
    
    return (
        <div className={ classes.root }>
            <Grid container spacing={ 2 }>

                <Grid item xs={ 12 }>
                    <Navbar location='Inicio' />
                </Grid>

                <Grid item xs={ 12 }>
                    <Typography align='center' variant='h4' component='h2' className={ classes.header }>
                        <b>Laboratorio II</b>
                    </Typography>
                    <Typography align='center' variant='h6' component='h3'>
                        <b>Práctica de Framework:</b> React.js
                    </Typography>
                    <Typography align='center' variant='h6' component='h5'>
                        <b>- Librerías utilizadas -</b>
                    </Typography>
                    <Typography align='center' variant='body1' component='h6'>
                        <Link href='https://es.reactjs.org/' onClick={ preventDefault }>
                            React 
                        </Link>    
                        <br />
                        <Link href='https://reactrouter.com/web/guides/quick-start' onClick={ preventDefault }>
                            react-router-dom 
                        </Link>
                        <br />
                        <Link href='https://material-ui.com/' onClick={ preventDefault }>
                            Material UI 
                        </Link>
                        <br />
                        <Link href='https://www.npmjs.com/package/react-vfx' onClick={ preventDefault }>
                            react-vfx 
                        </Link>
                        <br />
                        <Link href='https://www.npmjs.com/package/react-topbar-progress-indicator' onClick={ preventDefault }>
                            react-topbar-progress-indicator
                        </Link>
                    </Typography>
                </Grid>

                <Grid container className={ classes.container } xs={ 12 }>
                    <DataList className={ classes.dataList } />
                </Grid>
    
                <Grid item xs={ 12 } >
                    <Footer />
                </Grid>
                
            </Grid>
        </div>
    );
}

export default Home;