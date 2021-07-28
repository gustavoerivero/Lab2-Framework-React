import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar,
        Badge,
        Collapse,
        CssBaseline,
        Divider,
        Drawer,
        IconButton,
        List,
        ListItem,
        ListItemIcon,
        ListItemText,
        Menu,
        MenuItem,
        MenuList,
        Toolbar,
        Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import GroupSharpIcon from '@material-ui/icons/GroupSharp';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HomeWorkSharpIcon from '@material-ui/icons/HomeWorkSharp';
import ImportContactsSharpIcon from '@material-ui/icons/ImportContactsSharp';
import ListAltSharpIcon from '@material-ui/icons/ListAltSharp';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';

import AlertDialog from './modal/AlertDialog';
import Messages from './modal/popover/Messages';

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
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [openSession, setOpenSession] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [openList, setOpenList] = React.useState(false);
  const [openList2, setOpenList2] = React.useState(false);
  const [anchorElMsg, setAnchorElMsg] = React.useState(null);
  const [anchorElNot, setAnchorElNot] = React.useState(null);
  
  const handleClickMsg = (event) => {
    setAnchorElMsg(event.currentTarget);
  };

  const handleCloseMsg = () => {
    setAnchorElMsg(null);
  };

  const openMsg = Boolean(anchorElMsg);
  const idMsg = open ? 'messages' : undefined;

  
  const handleClickNot = (event) => {
    setAnchorElNot(event.currentTarget);
  };

  const handleCloseNot = () => {
    setAnchorElNot(null);
  };

  const openNot = Boolean(anchorElNot);
  const idNot = open ? 'notifications' : undefined;
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClick = () => {
    setOpenList(!openList);
  };

  const handleClick2 = () => {
    setOpenList2(!openList2);
  };

  const handleClickOpenSession = () => {
    setOpenSession(true);
  };

  const handleCloseSession = () => {
    setOpenSession(false);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={ handleMenuClose }>
        Mi Perfil
      </MenuItem>
      <MenuItem onClick={ handleClickOpenSession }>Cerrar Sesión</MenuItem>
      <AlertDialog 
        open={ openSession } 
        handleClose={ handleCloseSession } 
        title='¿Desea cerrar sesión?'
        description='Debe confirmar si desea cerrar su sesión. 
                      Una vez cerrada su sesión, deberá ingresar 
                      nuevamente sus credenciales de acceso.'
        decline='No'
        accept='Sí'
        handleMenuClose={ handleMenuClose }
      />
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={ handleClickMsg }>
        <IconButton aria-label="Mostrar mensajes" color="inherit">
          <Badge variant='dot' color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Mensajes</p>
      </MenuItem>
      <Messages 
        id={ idMsg } 
        open={ openMsg } 
        anchorEl={ anchorElMsg } 
        handleClose={ handleCloseMsg } 
        title='Mensajes'
        description='No hay mensajes por ver.'
      />
      <MenuItem onClick={ handleClickNot }>
        <IconButton aria-label="Mostrar notificaciones" color="inherit">
          <Badge variant='dot' color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notificaciones</p>
      </MenuItem>
      <Messages 
        id={ idNot } 
        open={ openNot } 
        anchorEl={ anchorElNot } 
        handleClose={ handleCloseNot } 
        title='Notificaciones'
        description='No hay notificaciones por ver.'
      />
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  );

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
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show new mails" color="inherit" onClick={ handleClickMsg }>
              <Badge variant='dot' color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <Messages 
              id={ idMsg } 
              open={ openMsg } 
              anchorEl={ anchorElMsg } 
              handleClose={ handleCloseMsg } 
              title='Mensajes'
              description='No hay mensajes por ver.'
            />
            <IconButton aria-label="show new notifications" color="inherit" onClick={ handleClickNot }>
              <Badge variant='dot' color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Messages 
              id={ idNot } 
              open={ openNot } 
              anchorEl={ anchorElNot } 
              handleClose={ handleCloseNot } 
              title='Notificaciones'
              description='No hay notificaciones por ver.'
            />
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
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
          <MenuItem component={ Link } to="/">
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <Typography>
              Inicio
            </Typography>
          </MenuItem>
          <MenuItem component={ Link } to={{ pathname: "/Dashboard" }}>
            <ListItemIcon>
              <DashboardSharpIcon />
            </ListItemIcon>
            <Typography>
              Dashboard
            </Typography>
          </MenuItem>
          <MenuItem component={ Link } to='/Tasks'>
            <ListItemIcon>
              <ListAltSharpIcon />
            </ListItemIcon>
            <Typography>
              Tareas
            </Typography>
          </MenuItem>
          <MenuItem component={ Link } to='/Messages'>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <Typography>
              Mensajes
            </Typography>
          </MenuItem>
          <MenuItem component={ Link } to='/Notifications'>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <Typography>
              Notificaciones
            </Typography>
          </MenuItem>
        </MenuList>
        <Divider />
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <SchoolSharpIcon />
            </ListItemIcon>
            <ListItemText primary="UCLA" />
            {openList ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <HomeWorkSharpIcon />
                </ListItemIcon>
                <ListItemText primary="DCYT" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ImportContactsSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Laboratorio II" />
              </ListItem>
              <ListItem button onClick={handleClick2} className={classes.nested}>
                <ListItemIcon>
                  <GroupSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Equipo de Trabajo" />
                {openList2 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openList2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PersonOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Gustavo Rivero" />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PersonOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Luis Valladares" />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PersonOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="María Paredes" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Collapse>
        </List>
      </Drawer>
      { renderMobileMenu }
      { renderMenu }
    </div>
  );
}