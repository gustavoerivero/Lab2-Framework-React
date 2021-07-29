import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar,
        Collapse,
        CssBaseline,
        Divider,
        Drawer,
        IconButton,
        List,
        ListItem,
        ListItemIcon,
        ListItemText,
        MenuItem,
        MenuList,
        Toolbar,
        Tooltip,
        Typography } from '@material-ui/core';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import DetailsOutlinedIcon from '@material-ui/icons/DetailsOutlined';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import GroupSharpIcon from '@material-ui/icons/GroupSharp';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HomeWorkSharpIcon from '@material-ui/icons/HomeWorkSharp';
import ImportContactsSharpIcon from '@material-ui/icons/ImportContactsSharp';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';
import SettingsEthernetOutlinedIcon from '@material-ui/icons/SettingsEthernetOutlined';
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [openList, setOpenList] = React.useState(false);
  const [openList2, setOpenList2] = React.useState(false);
  const [openDetails, setOpenDetails] = React.useState(false);
  const [openDetails2, setOpenDetails2] = React.useState(false);
  
  const handleClickDetails = () => {
    setOpenDetails(!openDetails);
  }

  const handleClickDetails2 = () => {
    setOpenDetails2(!openDetails2);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpenList(!openList);
  };

  const handleClick2 = () => {
    setOpenList2(!openList2);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            { props.location }
          </Typography>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <MenuList>
          <Tooltip title='Inicio' placement='right'>
            <MenuItem component={ Link } to='/' >
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <Typography>
                Inicio
              </Typography>
            </MenuItem>
          </Tooltip>
          <Tooltip title='Dashboard' placement='right'>
            <MenuItem component={ Link } to='/Dashboard' >
              <ListItemIcon>
                <DashboardSharpIcon />
              </ListItemIcon>
              <Typography>
                Dashboard
              </Typography>
            </MenuItem>
          </Tooltip>
          <Tooltip title='Detalles' placement='right'>
            <ListItem button onClick={ handleClickDetails }>
              <ListItemIcon>
                <DetailsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Detalles' />
              {openDetails ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </Tooltip>
          <Collapse in={ openDetails } timeout="auto" unmountOnExit>
            <Tooltip title='Instalación' placement='right'>
            <MenuItem component={ Link } to='/Installation' >
                <ListItemIcon>
                  <CodeOutlinedIcon />
                </ListItemIcon>
                <Typography>
                  Instalación
                </Typography>
              </MenuItem>
            </Tooltip>
            <Tooltip title='Desarrollo' placement='right'>
              <MenuItem component={ Link } to='/Development' >
                <ListItemIcon>
                  <BuildOutlinedIcon />
                </ListItemIcon>
                <Typography>
                  Desarrollo
                </Typography>
              </MenuItem>
            </Tooltip>
            <Tooltip title='Características' placement='right'>
              <ListItem button onClick={ handleClickDetails2 }>
                <ListItemIcon>
                  <ListAltOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Características' />
                {openDetails2 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            </Tooltip>
            <Collapse in={ openDetails2 } timeout="auto" unmountOnExit>
              <Tooltip title='Librerías' placement='right'>
                <MenuItem component={ Link } to='/Libraries' >
                  <ListItemIcon>
                    <SettingsEthernetOutlinedIcon />
                  </ListItemIcon>
                  <Typography>
                    Librerías
                  </Typography>
                </MenuItem>
              </Tooltip>
              <Tooltip title='Componentes' placement='right'>
                <MenuItem component={ Link } to='/Components' >
                  <ListItemIcon>
                    <WidgetsOutlinedIcon />
                  </ListItemIcon>
                  <Typography>
                    Componentes
                  </Typography>
                </MenuItem>
              </Tooltip>
            </Collapse>
          </Collapse>
          <Tooltip title='Error 404' placement='right'>
            <MenuItem component={ Link } to='/error404'>
              <ListItemIcon>
                <ErrorOutlineOutlinedIcon />
              </ListItemIcon>
              <Typography>
                Error 404
              </Typography>
            </MenuItem>
          </Tooltip>
        </MenuList>
        <Divider />
        <List>
          <Tooltip title='UCLA' placement='right'>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <SchoolSharpIcon />
              </ListItemIcon>
              <ListItemText primary="UCLA" />
              {openList ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </Tooltip>
          <Collapse in={openList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Tooltip title='DCYT' placement='right'>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <HomeWorkSharpIcon />
                  </ListItemIcon>
                  <ListItemText primary="DCYT" />
                </ListItem>
              </Tooltip>
              <Tooltip title='Laboratorio II' placement='right'>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <ImportContactsSharpIcon />
                  </ListItemIcon>
                  <ListItemText primary="Laboratorio II" />
                </ListItem>
              </Tooltip>
              <Tooltip title='Desarrolladores' placement='right'>
                <ListItem button onClick={handleClick2} className={classes.nested}>
                  <ListItemIcon>
                    <GroupSharpIcon />
                  </ListItemIcon>
                  <ListItemText primary="Desarrolladores" />
                  {openList2 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
              </Tooltip>
              <Collapse in={openList2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Tooltip title='Gustavo Rivero' placement='right'>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <PersonOutlineOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Gustavo Rivero" />
                    </ListItem>
                  </Tooltip>
                  <Tooltip title='Luis Valladares' placement='right'>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <PersonOutlineOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Luis Valladares" />
                    </ListItem>
                  </Tooltip>
                  <Tooltip title='María Paredes' placement='right'>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <PersonOutlineOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="María Paredes" />
                    </ListItem>
                  </Tooltip>
                </List>
              </Collapse>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </div>
  );
}