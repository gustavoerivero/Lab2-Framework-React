import React from 'react';
import { Box,
        Container, 
        Grid,
        IconButton,
        Tooltip,
        Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ListAltSharpIcon from '@material-ui/icons/ListAltSharp';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Footer(props) {

    const useStyles = makeStyles({
        footer: {
            paddingTop: '50px',
            paddingLeft: '50px',
            width: '100%',
            position: 'absolute',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
        },
        text: {
            color: '#424242',
            paddingBottom: '10px',
        }
    });

    const classes = useStyles();

    return (
        <footer className={ classes.footer } >
            <Box bgcolor='text.primary'>
                <Container maxWidth='lg'>
                    <Grid 
                        container 
                        spacing={ 2 }
                    >
                        <Grid item xs={ 12 }>
                            <Typography align='center' >
                                <Tooltip title="Inicio" aria-label="Inicio">
                                    <IconButton color='#424242' component={ Link } to='/'>
                                        <HomeOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Dashboard" aria-label="Dashboard">
                                    <IconButton color='#424242' component={ Link } to='/Dashboard'>
                                        <DashboardSharpIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Tareas" aria-label="Tareas">
                                    <IconButton color='#424242' component={ Link } to='/Tasks'>
                                        <ListAltSharpIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Mensajes" aria-label="Mensajes">
                                    <IconButton color='#424242' component={ Link } to='/Messages'>
                                        <MailIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Notificaciones" aria-label="Notificaciones">
                                    <IconButton color='#424242' component={ Link } to='/Notifications'>
                                        <NotificationsIcon />
                                    </IconButton>
                                </Tooltip>
                            </Typography>
                        </Grid>
                        <Grid item xs={ 12 }>
                            <Typography align='center' className={ classes.text } variant='p' component='h5' >
                                UCLA - DCYT - 2021
                                <br />
                                Ingeniería en Informática -&gt; Laboratorio II: 7832
                                <br />
                                Equipo Dinamita &copy;: Gustavo Rivero - María Paredes - Luis Valladares
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}
