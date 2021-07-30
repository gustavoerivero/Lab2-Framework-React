import React from 'react';
import * as RouterDom from 'react-router-dom';
import { Divider, 
        IconButton, 
        Grid, 
        Link, 
        Tooltip, 
        Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DialogImage from '../components/modal/DialogImage';
import '@fontsource/roboto';
import '../assets/css/Pages.css';

import NodePage from '../assets/img/nodejs_page.png';
import ReactLogo from '../assets/img/react.png';
import ConsoleNpx from '../assets/img/console_npx.png';
import ConsoleNpxEnd from '../assets/img/console_npx_end.png';
import NpmInstall from '../assets/img/npm_install.png';

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

function Installation(props) {
    const classes = useStyles();
        
    return (
        <div className={ classes.root }>
            <Grid container spacing={ 2 }>

                <Grid item xs={ 12 }>
                    <Navbar location='Instalación' />
                </Grid>

                <Grid container spacing={ 3 } className={ classes.container }>
                    <Grid item xs={ 12 } className={ classes.header }>
                        <Typography variant='h2' component='h2'>
                            Instalación del framework: React.js
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }> 
                        <Typography variant='body1' component='p'>
                            Para el uso del framework React.js no se requiere de una
                            instalación complicada. Lo único que se debe hacer es
                            seguir los siguientes pasos:
                            <ul>
                                <li>Instalar la última versión estable de&nbsp;
                                    <Link href='https://nodejs.org/en/'>
                                       Node.js
                                    </Link>
                                </li>
                                <li>Correr por consola el comando 'npx create-react-app'</li>
                                <li>¡Comenzar a programar con React.js!</li>
                            </ul>
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } justify='center' align='center'> 
                        <DialogImage 
                            button={ <img src={ ReactLogo } width='150em' height='150em' alt='React.js' /> } 
                            modalTitle='Logo de React.js'
                            content={ <img src={ ReactLogo } width='450px' alt='React.js' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Typography variant='h3' component='h3'>
                            <b>Paso a paso:</b>
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>1. </b>Instalar Node.js
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Dirigirse a la página oficial de&nbsp;
                            <Link href='https://nodejs.org/en/'>
                                Node.js
                            </Link> 
                            &nbsp;y descargar la última versión estable de este entorno de ejecución
                            de JavaScript.
                            <br /><br />
                            Una vez descargado el instalador de Node.js, realizar el procedimiento
                            de instalación correspondiente.
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ NodePage } alt='Página de Node.js' width='400px' /> } 
                            modalTitle='Página oficial de Node.js'
                            content={ <img src={ NodePage } alt='Página de Node.js' width='565px' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>2. </b>Crear un nuevo proyecto
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Una vez instalado Node.js, se procede a abrir la consola
                            e ingresar el comando 'npx create-react-app' junto al 
                            nombre del proyecto a desarrollar.
                            <br /><br />
                            El comando hará que el gestor de paquetes de Node.js, "npm",
                            configure el ambiente de trabajo con las últimas características
                            de JavaScript mediante el instalador de paquetes "npx". Esto 
                            permitirá elaborar una aplicación con React.js sin problemas.
                            <br /><br />
                            Existen otros comandos para configurar el entorno de trabajo para
                            el proyecto dependiendo las necesidades del desarrollador, tales como&nbsp;
                            <Link href='https://nextjs.org/'>
                                Next.js
                            </Link> o&nbsp;
                            <Link href='https://www.gatsbyjs.com/'>
                                Gatsby
                            </Link>, sin embargo, para esta práctica se utilizó&nbsp;
                            <Link href='https://github.com/facebook/create-react-app'>
                                "Create React App"
                            </Link>&nbsp;debido a que no implica grandes configuraciones.
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center' >
                        <DialogImage 
                            button={ <img src={ ConsoleNpx } alt='Consola' width='400px' /> } 
                            modalTitle='Creación de nuevo proyecto'
                            content={ <img src={ ConsoleNpx } alt='Consola' width='565px' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>3. </b>Comenzar a programar en React.js
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Tras haber completado el proceso de configuración realizado por
                            "npm", se ha culminado la instalación de las dependencias necesarias
                            para programar usando el framework React.js.
                            <br /><br/>
                            Lo siguiente sería dirigirse a la carpeta creada para el proyecto,
                            eliminar los archivos innecesarios y comenzar con la programación
                            del proyecto, lo cual es indicado de igual manera al final de la 
                            ejecución de la configuración.
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ ConsoleNpxEnd } alt='Fin de la ejecución de "Create React App' width='400px' /> } 
                            modalTitle='Fin de la ejecución del comando create-react-app'
                            content={ <img src={ ConsoleNpxEnd } alt='Fin de la ejecución de "Create React App' width='565px' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>4. </b>Instalación de librerías (Opcional)
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Ahora bien, para la instalación de las librerías utilizadas para
                            el desarrollo de la práctica es necesario situarse en la carpeta raíz
                            del proyecto mediante el comando 'cd' y el nombre de la carpeta
                            del proyecto. Luego de ello, instalar cada una de las librerías por
                            medio del comando 'npm i' y el nombre de la librería.
                            <br /><br/>
                            Para este proyecto, se utilizaron las siguientes librerías:
                            <ul>
                                <li>
                                    <b>React Router Dom</b>
                                    <ul>
                                        <li>
                                            npm i react-router-dom
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <b>Material UI</b>
                                    <ul>
                                        <li>
                                            Para los componentes:
                                            <ul>
                                                <li>
                                                    npm i @material-ui/core
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Para los iconos:
                                            <ul>
                                                <li>
                                                    npm i @material-ui/icons
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Para componentes de El Laboratorio:
                                            <ul>
                                                <li>
                                                    npm i @material-ui/lab
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Para la fuente (Roboto):
                                            <ul>
                                                <li>
                                                    npm i @fontsource/roboto
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <b>React VFX</b>
                                    <ul>
                                        <li>
                                            npm i react-vfx
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <b>React Top Bar Progress Indicator</b>
                                    <ul>
                                        <li>
                                            npm i react-topbar-progress-indicator
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ NpmInstall } alt='Instalación de dependencias' width='400px' /> } 
                            modalTitle='Instalación de librerías'
                            content={ <img src={ NpmInstall } alt='Instalación de dependencias' width='565px' /> }
                        />
                    </Grid>

                </Grid>

                <Grid item xs={ 12 } justify='center'>
                    <Typography align='center' className={ classes.nextPage }>
                        <Tooltip title='Desarrollo' aria-label='Desarrollo'>
                            <IconButton component={ RouterDom.Link } to='/Development' color='primary'>
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

export default Installation;