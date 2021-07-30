import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Grid, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { VFXProvider, VFXImg, VFXSpan } from 'react-vfx';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import dontWork from '../assets/img/dontWork.png';
import '../assets/css/Error404.css';
import '../assets/css/Pages.css';
import '@fontsource/roboto';

const useStyles = makeStyles(() => ({
    root: {
        alignItems: 'center',
        alignContent: 'center',
        padding: '50px 50px 0px 50px',
    },
}));

export default function PageNotFound(props) {
    const classes = useStyles();
    return (
        <VFXProvider>
            <Grid 
                container spacing={ 2 } 
                justify='center'
                className={ classes.root }
            >
                <Grid item xs={ 12 } sm={ 12 } md={ 9 } lg={ 6 } xl={ 6 }>
                    <VFXImg src={ dontWork } shader='rgbShift' overflow />
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                    <Typography variant='h2'>
                        ¡Lo sentimos!
                    </Typography>
                    <Typography variant='h5'>
                        No pudimos encontrar la página que estás buscando.
                    </Typography>
                    <Typography variant='h7'>
                        Deberías intentar volver al inicio a ver si encuentras aquello que deseas.
                    </Typography>
                    <Typography align='center'>
                        <Tooltip title='Inicio' aria-label='Inicio'>
                            <IconButton component={ Link } to='/' color='primary' variant='contained'>
                                <HomeOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </Typography>
                    <Typography variant='h6'>
                        <VFXSpan shader='rgbShift'>_____Error:_404._Page_Not_Found_____</VFXSpan>
                    </Typography>
                </Grid>
            </Grid>
        </VFXProvider>
    )
}
