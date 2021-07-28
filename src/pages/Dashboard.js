import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Graphics from '../components/Graphics';
import Table from '../components/Table';
import { colors } from '../components/theme/Colors';
import Footer from '../components/Footer';
import '@fontsource/roboto';
import '../assets/css/Pages.css';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    doContainer: {
        paddingTop: '65px',
        paddingLeft: '90px',
    },
    graphicsContainer: {
        paddingTop: '65px',
    },
}));

function Dashboard(props) {

    const classes = useStyles();

    const labels = [
        'Hecho',
        'Haciendo',
        'Por Hacer'
    ]

    const data = [1, 1, 3];
    
    const rows = [
        { id: 1, task: 'Backend de la app', start: '15-07-2021', end: '06-08-2021', responsable: 'Gustavo Rivero' },
        { id: 2, task: 'Frontend de la app', start: '15-07-2021', end: '06-08-2021', responsable: 'Luis Valladares' },
        { id: 3, task: 'Pruebas de calidad a la app', start: '06-08-2021', end: '12-08-2021', responsable: 'Maria Paredes' },
        { id: 4, task: 'Documentación de la app', start: '12-08-2021', end: '19-08-2021', responsable: 'Gustavo Rivero' },
        { id: 5, task: 'Entrega de la app', start: '19-08-2021', end: '26-08-2021', responsable: 'Todos' },
    ];
    
    return (
        <div className={ classes.root }>
            <Grid container spacing={ 2 } justify='center'>

                <Grid item xs={ 12 }>
                    <Navbar location='Dashboard' />
                </Grid>

                <Grid 
                    container 
                    xs={ 12 }
                    sm={ 12 }
                    md={ 9 } 
                    lg={ 9 } 
                    xl={ 9 }
                    className={ classes.doContainer }
                    spacing={ 1 }
                    justify='center'
                >

                    <Grid item xs={ 12 } sm={ 9 } md={ 6 } lg={ 4 } xl={ 4 }>
                        <Cards 
                            headerTitle='Hecho'
                            date='06 Agosto, 2021'
                            avatarDoing='G'
                            avatarColor={ colors[0] }
                            title='Backend de la app'
                            content='Desarrollar el backend de la app.'
                        />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 9 } md={ 6 } lg={ 4 } xl={ 4 }>
                        <Cards 
                            headerTitle='Haciendo'
                            date='06 Agosto, 2021'
                            avatarDoing='V'
                            avatarColor={ colors[2] }
                            title='Frontend de la app'
                            content='Desarrollar el frontend de la app.'
                        />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 9 } md={ 4 } lg={ 4 } xl={ 4 }>
                        <Cards 
                            headerTitle='Por Hacer'
                            date='12 Agosto, 2021'
                            avatarDoing='M'
                            avatarColor={ colors[3] }
                            title='Pruebas de calidad a la app'
                            content='Realizar pruebas de calidad a la app.'
                        />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 12 }>
                        <Table 
                            rows= { rows } 
                        />
                    </Grid>
                    
                </Grid>

                <Grid 
                    container 
                    xs={ 12 } sm={ 6 } md= { 3 } lg={ 3 } xl={ 3 }
                    className={ classes.graphicsContainer }
                    justify='center'
                >

                    <Graphics 
                        labels={ labels }
                        data={ data } 
                    />
                    
                </Grid>

                <Grid item xs={ 12 }>
                    <Footer />
                </Grid>

            </Grid>
        </div>
    );
}

export default Dashboard;