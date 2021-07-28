import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, 
        Divider,
        Grid,
        List, 
        ListItem, 
        ListItemIcon, 
        ListItemText, 
        ListSubheader } from '@material-ui/core';
import HomeWorkSharpIcon from '@material-ui/icons/HomeWorkSharp';
import ImportContactsSharpIcon from '@material-ui/icons/ImportContactsSharp';
import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CardProfile from './CardProfile';
import { colors } from '../components/theme/Colors';
import Gustavo from '../assets/img/Gustavo.jpg';
import Valladares from '../assets/img/Valladares.jpg';
import Maria from '../assets/img/Maria.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    container: {
        padding: '15px 10px 10px 60px',
    },
}));

export default function NestedList(props) {
  const classes = useStyles();
  const [openUCLA, setOpenUCLA] = React.useState(false);
  const [openDCYT, setOpenDCYT] = React.useState(false);
  const [openSoft, setOpenSoft] = React.useState(false);
  const [openLab, setOpenLab] = React.useState(false);

  const handleUCLAClick = () => {
    setOpenUCLA(!openUCLA);
  };

  const handleDCYTClick = () => {
    setOpenDCYT(!openDCYT);
  };

  const handleSoftClick = () => {
    setOpenSoft(!openSoft);
  };

  const handleLabClick = () => {
    setOpenLab(!openLab);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Información adicional
        </ListSubheader>
      }
      className={classes.root}
    >
        <Divider />
        <ListItem button onClick={ handleUCLAClick }>
            <ListItemIcon>
                <SchoolSharpIcon />
            </ListItemIcon>
            <ListItemText primary='Universidad Centroccidental "Lisandro Alvarado"' />
            {openUCLA ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Divider />
        <Collapse in={ openUCLA } timeout="auto" unmountOnExit>
            <ListItem button onClick={ handleDCYTClick } >
                <ListItemIcon>
                    <HomeWorkSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Decanato de Ciencias y Tecnología" />
                {openDCYT ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Divider />
            <Collapse in={ openDCYT } timeout="auto" unmountOnExit>
                <ListItem button onClick={ handleSoftClick } >
                    <ListItemIcon>
                        <CodeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Programa de Ingeniería en Informática" />
                    {openSoft ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Divider />
                <Collapse in={openSoft} timeout="auto" unmountOnExit>
                    <ListItem button onClick={handleLabClick} >
                        <ListItemIcon>
                            <ImportContactsSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Laboratorio II" />
                        {openLab ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Divider />
                    <Collapse in={openLab} timeout="auto" unmountOnExit>
                        <Grid container className={ classes.container } justify='center' spacing={ 2 }>

                            <Grid item xs={ 12 } sm={ 9 } md={ 6 } lg={ 4 } xl={ 4 } >
                                <CardProfile 
                                    title='Gustavo Rivero'
                                    subheader={ new Date().toDateString() }
                                    image={ Gustavo }
                                    description='C.I: 26.772.857'
                                    color={ colors[0] }
                                />
                            </Grid>

                            <Grid item xs={ 12 } sm={ 9 } md={ 6 } lg={ 4 } xl={ 4 } >
                                <CardProfile 
                                    title='María Paredes'
                                    subheader={ new Date().toDateString() }
                                    image={ Maria }
                                    description='C.I: 26.799.116'
                                    color={ colors[3] }
                                />
                            </Grid>

                            <Grid item xs={ 12 } sm={ 9 } md={ 6 } lg={ 4 } xl={ 4 } >
                                <CardProfile 
                                    title='Luis Valladares'
                                    subheader={ new Date().toDateString() }
                                    image={ Valladares }
                                    description='C.I: 26.370.986'
                                    color={ colors[2] }
                                />
                            </Grid>

                        </Grid>
                    <Divider />
                    </Collapse>
                </Collapse>
            </Collapse>
        </Collapse>      
    </List>
  );
}