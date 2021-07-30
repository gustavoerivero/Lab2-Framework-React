import React from 'react';
import * as RouterDom from 'react-router-dom';
import { Button, 
        Divider, 
        Grid, 
        IconButton, 
        Tooltip, 
        Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DialogImage from '../components/modal/DialogImage';
import '@fontsource/roboto';
import '../assets/css/Pages.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';

import ReactRouterPage from '../assets/img/react-router-dom.png';
import MaterialUIPage from '../assets/img/material-ui.png';
import ReactChartjs2Page from '../assets/img/react-chartjs-2.png';
import ReactVFXPage from '../assets/img/react-vfx.png';
import Error404Page from '../assets/img/error404.png';
import RepoTopBar from '../assets/img/repoTopbar.png';
import TopBarProgress from '../assets/img/TopBarProgress.png';
import GHPages from '../assets/img/gh-pages.png';

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
            <Grid container spacing={ 3 }>

                <Grid item xs={ 12 }>
                    <Navbar location='Librerías' />
                </Grid>
                
                <Grid container spacing={ 2 } className={ classes.container }>
                    <Grid item xs={ 12 } className={ classes.header }>
                        <Typography variant='h2' component='h2'>
                            Librerías utilizadas
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Typography variant='body1' component='p'>
                            Además de hacer uso del framework React.js, también se implementaron
                            algunos componentes, elementos y funciones de otras librerías para el
                            desarrollo de la práctica.
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>React Router Dom </b>
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Esta librería se utilizó con el fin de facilitar el redireccionamiento
                            entre las páginas desarrolladas para esta práctica.
                            <br /><br />
                            Su instalación es por medio del comando 'npm i react-router dom', el cual
                            debe ejecutarse en el interior de la carpeta del proyecto.
                            <br /><br />
                            Para su uso, basta con importar el componente a utilizar al inicio del archivo
                            con extensión js.
                            <br /><br />
                            El material de apoyo utilizado es la documentación que se encuentra en su 
                            página oficial:
                            <br /><br />
                            <Typography align='center'>
                                <Button variant='contained' color='primary' href='https://reactrouter.com/'>
                                    React Router Dom
                                </Button>
                            </Typography>
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ ReactRouterPage } alt='Página de React Router Dom' width='400px' /> } 
                            modalTitle='Página oficial de React Router Dom'
                            content={ <img src={ ReactRouterPage } alt='Página de React Router Dom' width='565px' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>Material UI</b>
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Material UI es una librería para React.js de componentes gráficos
                            altamente personalizables, sin necesidad de una configuración rigurosa
                            en el proyecto a desarrollar.
                            <br /><br />
                            Su instalación es por medio del comando 'npm i @material-ui/core', el cual
                            debe ejecutarse en el interior de la carpeta del proyecto.
                            <br /><br />
                            Asimismo, la página oficial de Material UI recomienda utilizar como fuente
                            "Roboto", la cual se puede instalar por medio del comando 'npm i @fontsource/roboto'.
                            Posterior a ello, para que la fuente aparezca en el proyecto, se llama en el archivo
                            js que redizará la página por medio de la línea de código "import '@fontsource/roboto';".
                            <br /><br />
                            También se implementaron los iconos que provee Material UI, para ello se requiere 
                            instalar la librería de iconos con el comando 'npi i @material-ui/icons'. Para su 
                            uso basta con importar el icono deseado al comienzo del archivo js en donde se vaya 
                            a implementar.
                            <br /><br />
                            Por último, también se utilizaron componentes experimentales de la librería "El Laboratorio"
                            de Material UI. Al igual que la instalación de las librerías anteriores, para utilizar estos
                            componentes habría que instalar la librería con el comando 'npi i @material-ui/lab'.
                            <br /><br />
                            El material de apoyo utilizado fue toda la documentación que se puede encontrar en su 
                            página oficial.
                            <br /><br />
                            <Typography align='center'>
                                <Button variant='contained' color='primary' href='https://material-ui.com/'>
                                    Material UI
                                </Button>
                            </Typography>
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ MaterialUIPage } alt='Página de Material UI' width='400px' /> } 
                            modalTitle='Página oficial de Material UI'
                            content={ <img src={ MaterialUIPage } alt='Página de Material UI' width='565px' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>react-chartjs-2</b>
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Una librería que provee componentes para generar gráficos de manera
                            sencilla.
                            <br /><br />
                            Para la implementación de los componentes de esta librería basta con generar
                            un archivo js con las configuraciones necesarias por el desarrollador y 
                            proveerle los datos para así construir el gráfico deseado.
                            <br /><br />
                            El material de apoyo utilizado es el provisto por su repositorio en GitHub.
                            <br /><br />
                            <Typography align='center'>
                                <Button variant='contained' color='primary' href='https://reactchartjs.github.io/react-chartjs-2/#/'>
                                    react-chartjs-2
                                </Button>
                            </Typography>
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ ReactChartjs2Page } alt='Página de react-chartjs-2' width='400px' /> } 
                            modalTitle='Página oficial de react-chartjs-2'
                            content={ <img src={ ReactChartjs2Page } alt='Página de react-chartjs-2' width='565px' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>React VFX</b>
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Una pequeña librería con el propósito de añadir animaciones estilo
                            VFX a ciertos elementos gráficos tales como texto, imágenes y/o vídeos.
                            <br /><br />
                            La instalación de esta librería procede mediante el comando 'npm i react-vfx'.
                            <br /><br />
                            Los componentes de esta librería fueron utilizados únicamente para la página del
                            Error 404 de esta práctica, precisamente en la imagen del cono y en el texto que
                            informa el error ocurrido, añadiéndole efectos "Glitch" a estos elementos.
                            <br /><br />
                            El material de apoyo utilizado fueron los ejemplos mostrados en la página oficial
                            y el repositorio de la librería en GitHub de React VFX.
                            <br /><br />
                            <Typography align='center'>
                                <Button variant='contained' color='primary' href='https://amagi.dev/react-vfx/'>
                                    React VFX
                                </Button>
                            </Typography>
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ ReactVFXPage } alt='Página de React VFX' width='400px' /> } 
                            modalTitle='Página oficial de React VFX'
                            content={ <img src={ ReactVFXPage } alt='Página de React VFX' width='565px' /> }
                        />
                        <DialogImage 
                            button={ <img src={ Error404Page } alt='Página del Error 404' width='400px' /> } 
                            modalTitle='Página del Error 404 de la práctica'
                            content={ <img src={ Error404Page } alt='Página del Error 404' width='565px' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>React Top Bar Progress Indicator</b>
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Por último, la librería React Top Bar Progress Indicator; 
                            esta librería indica el progreso de carga de la página que 
                            se espera visualizar.
                            <br /><br />
                            Para instalar esta librería hay que ejecutar el comando 
                            'npm i react-topbar-progress-indicator'.
                            <br /><br />
                            Este componente fue utilizado en el archivo CustomSwitch.js,
                            el componente que sutituyó al Switch provisto por la librería 
                            React Router Dom.
                            <br /><br />
                            <Typography align='center'>
                                <Button variant='contained' color='primary' href='https://github.com/MoOx/react-topbar-progress-indicator'>
                                    React Top Bar Progress Indicator
                                </Button>
                            </Typography>
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ RepoTopBar } alt='Repositorio de la Top Bar Progress utilizada' width='400px' /> } 
                            modalTitle='Repositorio de la Top Bar Progress utilizada'
                            content={ <img src={ RepoTopBar } alt='Repositorio de la Top Bar Progress utilizada' width='565px' /> }
                        />
                        <DialogImage 
                            button={ <img src={ TopBarProgress } alt='Barra de Progresso de la Práctica' width='400px' /> } 
                            modalTitle='Barra de Progresso de la Práctica'
                            content={ <img src={ TopBarProgress } alt='Barra de Progresso de la Práctica' width='565px' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>GitHub Pages</b>
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Esta librería se utilizó con el propósito de realizar deploy
                            con GitHub Pages.
                            <br /><br />
                            Para su instalación, se debe ejecutar el comando 'npm i gh-pages'.
                            Posterior a ello, se debe ajustar el archivo package.json, en donde,
                            justo debajo de la línea de "name", se coloca "homepage" seguido del
                            url que se supone que tendrá la página. Este url está conformado por 
                            "https://" seguido del usuario que creó el repositorio seguido de ".github.io/"
                            y por último el nombre del repositorio.
                            <br /><br />
                            Para este caso, el url es "https://gustavoerivero.github.io/Lab2-Framework-React".
                            <br /><br />
                            De igual manera, en el apartado de scripts del mismo archivo package.json, se colocan:
                            <br/><br />
                            "predeploy": "npm run build",<br/>
                            "deploy": "gh-pages -d build"
                            <br /><br />
                            Para finalizar, se actualizan los cambios del repositorio haciendo "git push" y se ejecutan
                            los comandos "npm run build" seguido de "gh-pages -d build"
                            <br /><br />
                            El material de apoyo aquel que se encuentra en su repositorio:
                            <br /><br />
                            <Typography align='center'>
                                <Button variant='contained' color='primary' href='https://www.npmjs.com/package/gh-pages'>
                                    GitHub Pages
                                </Button>
                            </Typography>
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ GHPages } alt='Página de npm con la información de gh-pages' width='400px' /> } 
                            modalTitle='Página de npm con la información de gh-pages'
                            content={ <img src={ GHPages } alt='Página de npm con la información de gh-pages' width='565px' /> }
                        />
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