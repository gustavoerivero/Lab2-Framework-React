import React from 'react';
import * as RouterDom from 'react-router-dom';
import { Grid, 
        IconButton, 
        Link, 
        Tooltip, 
        Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TreeRecursiveView from '../components/TreeView';
import { data } from '../components/Data.js';
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

function Development(props) {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <Grid container spacing={ 2 }>

                <Grid item xs={ 12 }>
                    <Navbar location='Desarrollo' />
                </Grid>
                
                <Grid container spacing={ 2 } className={ classes.container }>
                    <Grid item xs={ 12 } className={ classes.header }>
                        <Typography variant='h2' component='h2'>
                            Desarrollo de la práctica
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={ 3 } className={ classes.container }>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }> 
                        <Typography variant='body1' component='p'>
                            Para el desarrollo de la práctica, se utilizó el editor 
                            de texto&nbsp;<Link href='https://code.visualstudio.com/'>
                                Visual Studio Code
                            </Link>, junto con extensiones para
                            HTML, CSS, JavaScript, React.js y GitHub.
                            <br /><br />
                            Asimismo, una vez creado el proyecto, se abre la carpeta 
                            del mismo a través de Visual Studio Code y se comienza con
                            la reestructuración del proyecto y, la creación de los archivos
                            a utilizar.
                            <br /><br />
                            Cabe destacar que, todos los elementos que culminen con un punto ( . ) seguido
                            de alguna extensión, corresponde a archivos, mientras que, aquellos que no tengan
                            esto, representan las carpetas. También es importante mencionar que no se resaltan
                            los archivos en carpetas de imágenes y/o que proporcionan información para algunos
                            componentes.
                            <br /><br />
                            Tras eliminar, crear y reestructurar tanto las carpetas como los
                            archivos del proyecto, se comienza con el desarrollo de la aplicación.
                            <br /><br />
                            Como se está implementando el framework React.js para esta práctica,
                            se decide trabajar con la filosofía de esta biblioteca, es decir, diseño
                            por componentes. De esta manera, se fragmenta porciones de interfaces con
                            el fin de facilitar la legibilidad y mantenimiento de una página.
                            <br /><br />
                            Lo primero a realizar es la estructura de las páginas, por medio del 
                            componente "Grid" de Material UI, el cual implementar estructura de 
                            cuadros o Flex Box en una página y, a su vez, facilitar el diseño 
                            responsivo.
                            <br /><br />
                            De igual manera, React.js trabaja con la sintaxis JSX, lo que permite
                            la construcción de componentes de una forma similar a HTML, haciendo que
                            el código sea legible y fácil desarrollar.
                            <br /><br />
                            Luego de ello, se comenzó a desarrollar los componentes principales;
                            CardProfile.js, Cards.js, DataList.js, DialogImage.js, Footer.js, Graphics.js, 
                            HomeButtons.js, Navbar.js, Table.js y TreeView.js.
                            <br /><br />
                            Una vez desarrollados los componentes, a armar cada página, situando cada 
                            componente en el correspondiente "Grid", dándole forma a la página.
                            <br /><br />
                            Durante el proceso de desarrollo de cada página, se puede ir colocando las
                            rutas de redireccionamiento en el archivo Routes.js, con el fin de comprobar que
                            los redireccionamientos entre página funcionan sin inconvenientes.
                            <br /><br />
                            También, con la construcción de cada página se puede ir creando las hojas de estilo (CSS),
                            para darle mejor aspecto a las páginas o componentes que requieran una profunda modificación.
                            <br /><br />
                            Por último, se agregaron las páginas para el "Error 404", una carga visual de página en el 
                            tope superior y la configuración de colores para el tema de la página. La página de Error 
                            404 se le adjuntaron componentes de React VFX, para un aspecto más acorde con la temática 
                            escogida para la práctica. 
                            <br /><br />
                            De igual forma, para la carga de página ubicado en el tope superior, se realizó un componente
                            exclusivo para el archivo Route.js, el cual es el archivo CustomSwitch.js. Este componente
                            hace uso de la TopBarProgress de la librería "react-topbar-progress-indicator". Una vez desarrollado,
                            se adjunta al archivo Route.js como un componente que contendrá todas las rutas accesibles por la página.
                            <br /><br />
                            Por último, se definió el tema y la paleta de colores que utilizaría la práctica. Esto fue ubicado en
                            una carpeta llamada "theme" en el apartado de componentes. Allí se desarrolló un archivo Colors.js que
                            contiene la paleta de colores a utilizar, y otro archivo Theme.js, el cual define cada color para cada 
                            elemento que tendrá la paleta de colores.
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } justify='center'> 
                        <Typography>
                            La estructura de las carpetas y archivos quedarían de la siguiente forma:
                            <br /><br />
                        </Typography>
                        <TreeRecursiveView data={ data } />
                    </Grid>

                </Grid>

                <Grid item xs={ 12 } justify='center'>
                    <Typography align='center' className={ classes.nextPage }>
                        <Tooltip title='Instalación' aria-label='Instalación'>
                            <IconButton component={ RouterDom.Link } to='/Installation' color='primary'>
                                <NavigateBeforeIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Librerías' aria-label='Librerías'>
                            <IconButton component={ RouterDom.Link } to='/Libraries' color='primary'>
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

export default Development;