import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';


import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));




export default function Drwer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    // localStorage.clear();
    localStorage.removeItem("arrGames");
    localStorage.removeItem("arrFood");
    localStorage.removeItem("arrActivity");


  }
  const handelDelSubmit = () => {
    localStorage.removeItem("submit");

  }

  let arrGames = JSON.parse(localStorage.getItem("arrGames"));
  let arrFood = JSON.parse(localStorage.getItem("arrFood"))
  let arrActivity = JSON.parse(localStorage.getItem('arrActivity'))

  let submit = JSON.parse(localStorage.getItem("submit"))


  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
       <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap component="div">
            حياة التوحد
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <ShoppingBasketIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleDelete}><DeleteOutlineIcon /></MenuItem>
               {
                arrGames ?
                  
                arrGames.map(items => {
    
                    const {title, img} = items
                      return (
                        <MenuItem
                        onClick={handleClose}
                        key={title}
                        >
                          <img
                          style={{
                            width:'100px',
                            height:'100px'
                          }}
                           src={img} alt={title} />
                          <Typography variant='h6'>{title}</Typography>
                        </MenuItem>
                      )
                    })
                   
                :''
               }
                 {
                arrFood ?
                  
                arrFood.map(items => {
    
                    const {title, img} = items
                      return (
                        <MenuItem
                        onClick={handleClose}
                        key={title}
                        >
                          <img
                          style={{
                            width:'100px',
                            height:'100px'
                          }}
                           src={img} alt={title} />
                          <Typography variant='h6'>{title}</Typography>
                        </MenuItem>
                      )
                    })
                   
                :''
               }

                 {
                arrActivity ?
                  
                arrActivity.map(items => {
    
                    const {title, img} = items
                      return (
                        <MenuItem
                        onClick={handleClose}
                        key={title}
                        >
                          <img
                          style={{
                            width:'100px',
                            height:'100px'
                          }}
                           src={img} alt={title} />
                          <Typography variant='h6'>{title}</Typography>
                        </MenuItem>
                      )
                    })
                   
                :''
               }
              
              </Menu>
            </div>
          )}
            </Toolbar>
        
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {
          (submit === true) && (
            <List>
            {['food', 'activites', 'games',].map((text, index) => (
              <Link to={`${text}`} key={text}>
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {
                      // index == 0 ? <FastfoodIcon/> || index == 1 ? <FastfoodIcon/> : <FastfoodIcon />
                    }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
              </Link>
            ))}
             <Link
              to='/login'
              onClick={handelDelSubmit}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                  <ListItemIcon>
                  </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>

          </List>

          ) 
        }
        {
          (!submit) && (
            <List>
              <Link to='/login'>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText>Login</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          )
        }
       
        <Divider />
       
      </Drawer>

      
      <Main open={open}>
        <DrawerHeader />
        
      </Main>
    </Box>
  );
}