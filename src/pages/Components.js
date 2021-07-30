import React from 'react';
import * as RouterDom from 'react-router-dom';
import { Divider, 
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

import CardProfileImage from '../assets/img/cardprofile-image.png';
import CardProfileCode from '../assets/img/cardprofile-code.png';
import CardsImage from '../assets/img/cards-image.png';
import CardsCode from '../assets/img/cards-code.png';
import DataListImage from '../assets/img/datalist-image.png';
import DataListCode from '../assets/img/datalist-code.png';
import DialogImageImage from '../assets/img/dialogimage-image.png';
import DialogImageCode from '../assets/img/dialogimage-code.png';
import FooterImage from '../assets/img/footer-image.png';
import FooterCode from '../assets/img/footer-code.png';
import GraphicsImage from '../assets/img/graphics-image.png';
import GraphicsCode from '../assets/img/graphics-code.png';
import HomeButtonsImage from '../assets/img/homebuttons-image.png';
import HomeButtonsCode from '../assets/img/homebuttons-code.png';
import NavBarImage from '../assets/img/navbar-image.png';
import NavBarCode from '../assets/img/navbar-code.png';
import TableImage from '../assets/img/table-image.png';
import TableCode from '../assets/img/table-code.png';
import TreeViewImage from '../assets/img/treeview-image.png';
import TreeViewCode from '../assets/img/treeview-code.png';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

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

function Components(props) {
    const classes = useStyles();
    
    return (
        <div className={ classes.root }>
            <Grid container spacing={ 2 }>

                <Grid item xs={ 12 }>
                    <Navbar location='Componentes' />
                </Grid>

                <Grid container spacing={ 2 } className={ classes.container }>
                    <Grid item xs={ 12 } className={ classes.header }>
                        <Typography variant='h2' component='h2'>
                            Componentes usados en la práctica
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Typography variant='body1' component='p'>
                            La filosofía que maneja React.js es la del uso de componentes,
                            simplificando el desarrollo de aplicaciones fragmentando los
                            proyectos en partes. Para la práctica se implementó esta filosofía,
                            lo que facilitó enormemente el desarrollo, optimizando el tiempo
                            de programación de la práctica.
                            <br /><br />
                            En este sentido, los componentes implementados fueron los siguientes:
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>CardProfile</b>
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Este componente permite mostrar una variante del
                            componente Card de Material UI. en el que permite
                            mostrar un autor, la fecha actual, un icono de 
                            avatar con la primera letra del autor, una imagen y 
                            el color del fondo que tomará el avatar, todo este 
                            contenido almacenado en un elemento acordeón.
                            Toda esta información es suministrada por <i>props</i>
                            <br /><br />
                            Este componente tiene animaciones de cambio de color de fondo
                            al pasar el mouse por encima del elemento, oscureciendo el fondo.
                            De igual manera sucede con el botón en forma de corazón, cambiando 
                            su color original a un color rojo.
                            <br /><br />
                            <DialogImage 
                                button={ <img src={ CardProfileCode } alt='Llamada del componente CardProfile' width='400px' /> } 
                                modalTitle='Llamada del componente CardProfile'
                                content={ <img src={ CardProfileCode } alt='Llamada del componente CardProfile' width='460px' /> }
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ CardProfileImage } alt='Componente CardProfile' height='400px' /> } 
                            modalTitle='Componente CardProfile'
                            content={ <img src={ CardProfileImage } alt='Componente CardProfile' height='460px' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>Cards</b>
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Este componente permite mostrar una variante del
                            componente Card de Material UI. en el que permite
                            mostrar un avatar junto con su color, un encabezado y 
                            fecha, el título y una descripción. 
                            Toda esta información es suministrada por <i>props</i>
                            <br /><br />
                            <DialogImage 
                                button={ <img src={ CardsCode } alt='Llamada del componente Cards' width='400px' /> } 
                                modalTitle='Llamada del componente Cards'
                                content={ <img src={ CardsCode } alt='Llamada del componente Cards' width='460px' /> }
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ CardsImage } alt='Componente Cards' width='400px' /> } 
                            modalTitle='Componente Cards'
                            content={ <img src={ CardsImage } alt='Componente Cards' width='460px' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>DataList</b>
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Este componente es utilizado una única vez. Permite
                            mostrar información en forma de lista desplegable. En
                            su último nivel se encuentran tres componentes de CardProfile
                            con la información de los desarrolladores de la práctica.
                            <br /><br />
                            <DialogImage 
                                button={ <img src={ DataListCode } alt='Llamada del componente DataList' width='150px' /> } 
                                modalTitle='Llamada del componente DataList'
                                content={ <img src={ DataListCode } alt='Llamada del componente DataList' width='460px' /> }
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ DataListImage } alt='Componente DataList' width='400px' /> } 
                            modalTitle='Componente DataList'
                            content={ <img src={ DataListImage } alt='Componente DataList' width='460px' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>DialogImage</b>
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Este componente genera un botón el cual permite mostrar
                            un componente modal con otro contenido.
                            Toda esta información es suministrada por <i>props</i>
                            <br /><br />
                            <DialogImage 
                                button={ <img src={ DialogImageCode } alt='Llamada del componente DialogImage' width='400px' /> } 
                                modalTitle='Llamada del componente DialogImage'
                                content={ <img src={ DialogImageCode } alt='Llamada del componente DialogImage' width='460px' /> }
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ DialogImageImage } alt='Componente DialogImage' width='400px' /> } 
                            modalTitle='Componente DialogImage'
                            content={ <img src={ DialogImageImage } alt='Componente DialogImage' width='460px' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>Footer</b>
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Este componente genera el Footer de la página. Al ser
                            un footer posee información fija y no requiere el uso <i>props</i>.
                            <br /><br />
                            <DialogImage 
                                button={ <img src={ FooterCode } alt='Llamada del componente Footer' width='225px' /> } 
                                modalTitle='Llamada del componente DialogImage'
                                content={ <img src={ FooterCode } alt='Llamada del componente Footer' width='460px' /> }
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ FooterImage } alt='Componente Footer' width='400px' /> } 
                            modalTitle='Componente Footer'
                            content={ <img src={ FooterImage } alt='Componente Footer' width='460px' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>Graphics</b>
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Este componente genera el Gráfico doble mostrado en la página de 
                            Dashboard.
                            <br /><br />
                            Para su implementación, se le deben pasar en forma de <i>props</i>.
                            las etiquetas y los datos que van a mostrar en los dos gráficos.
                            <br /><br />
                            Este componente genera un gráfico de dona al exterior y en su interior,
                            un gráfico de torta. Maneja la misma información y toma los colores 
                            suministrados por el tema definido para la práctica.
                            <br /><br />
                            <DialogImage 
                                button={ <img src={ GraphicsCode } alt='Llamada del componente Graphics' width='225px' /> } 
                                modalTitle='Llamada del componente Graphics'
                                content={ <img src={ GraphicsCode } alt='Llamada del componente Graphics' width='460px' /> }
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ GraphicsImage } alt='Componente Footer' width='300px' /> } 
                            modalTitle='Componente Footer'
                            content={ <img src={ GraphicsImage } alt='Componente Footer' height='460px' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>HomeButtons</b>
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Este componente genera los botones gráficos ubicados en la 
                            página principal de la práctica.
                            <br /><br />
                            Para su implementación, se le deben pasar en forma de <i>props</i>.
                            una variable que contenga la dirección de las imágenes, su respectivo id,
                            el título que contendrá el botón y la dirección a la cual va a redirigir.
                            <br /><br />
                            <DialogImage 
                                button={ <img src={ HomeButtonsCode } alt='Llamada del componente HomeButtons' width='400px' /> } 
                                modalTitle='Llamada del componente HomeButtons'
                                content={ <img src={ HomeButtonsCode } alt='Llamada del componente HomeButtons' width='460px' /> }
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ HomeButtonsImage } alt='Componente HomeButtons' width='400px' /> } 
                            modalTitle='Componente HomeButtons'
                            content={ <img src={ HomeButtonsImage } alt='Componente HomeButtons' width='460px' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>Navbar</b>
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Este componente genera el navbar ubicado al tope superior de la 
                            práctica como también el dawer posicionado al lateral izquierdo.
                            <br /><br />
                            Para su implementación, se le deben pasar en forma de <i>props</i>.
                            únicamente el título de la página en la que se encuentra.
                            <br /><br />
                            <DialogImage 
                                button={ <img src={ NavBarCode } alt='Llamada del componente Navbar' width='400px' /> } 
                                modalTitle='Llamada del componente Navbar'
                                content={ <img src={ NavBarCode } alt='Llamada del componente Navbar' width='460px' /> }
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ NavBarImage } alt='Componente Navbar' width='400px' /> } 
                            modalTitle='Componente Navbar'
                            content={ <img src={ NavBarImage } alt='Componente Navbar' width='460px' /> }
                        />
                    </Grid>

                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>Table</b>
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Este componente genera la tabla ubicada en la página del Dashboard.
                            <br /><br />
                            Para su implementación, se le deben pasar en forma de <i>props</i>.
                            una variable que contenga la matriz con la información que plasmará
                            la tabla.
                            <br /><br />
                            <DialogImage 
                                button={ <img src={ TableCode } alt='Llamada del componente Table' width='250px' /> } 
                                modalTitle='Llamada del componente Table'
                                content={ <img src={ TableCode } alt='Llamada del componente Table' width='460px' /> }
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ TableImage } alt='Componente Table' width='400px' /> } 
                            modalTitle='Componente Navbar'
                            content={ <img src={ TableImage } alt='Componente Table' width='460px' /> }
                        />
                    </Grid>
                    <Grid item xs={ 12 }>
                        <Divider />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 }>
                        <Typography variant='h4' component='h4'>
                            <b>TreeView</b>
                        </Typography>
                        <Typography variant='body1' component='p'>
                            Este componente genera la tabla ubicada en la página del Dashboard.
                            <br /><br />
                            Para su implementación, se le deben pasar en forma de <i>props</i>.
                            una variable que contenga la matriz con la información que plasmará
                            la tabla.
                            <br /><br />
                            <DialogImage 
                                button={ <img src={ TreeViewCode } alt='Llamada del componente TreeView' width='250px' /> } 
                                modalTitle='Llamada del componente TreeView'
                                content={ <img src={ TreeViewCode } alt='Llamada del componente TreeView' width='460px' /> }
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 } xl={ 6 } align='center'>
                        <DialogImage 
                            button={ <img src={ TreeViewImage } alt='Componente TreeView' width='150px' /> } 
                            modalTitle='Componente TreeView'
                            content={ <img src={ TreeViewImage } alt='Componente TreeView' height='350px' /> }
                        />
                    </Grid>

                </Grid>
        
                <Grid item xs={ 12 } justify='center'>
                    <Typography align='center' className={ classes.nextPage }>
                        <Tooltip title='Librerías' aria-label='Librerías'>
                            <IconButton component={ RouterDom.Link } to='/Libraries' color='primary'>
                                <NavigateBeforeIcon />
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

export default Components;