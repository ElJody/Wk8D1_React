import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AlignHorizontalCenterTwoToneIcon from '@mui/icons-material/AlignHorizontalCenterTwoTone';
import AlignVerticalCenterTwoToneIcon from '@mui/icons-material/AlignVerticalCenterTwoTone';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AllInclusiveSharpIcon from '@mui/icons-material/AllInclusiveSharp';
import ThemeSwitch from './ThemeSwitch';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';
import SubjectBar from './SubjectBar';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
  );
  
  export default function NavBar({children}) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    const handleDrawerOpen = () => {
      setOpen(true);
    };
    
    const handleDrawerClose = () => {
      setOpen(false);
  };
  
  // const menuChoices =  [
  //   {label:'Cart', path:'/cart', icon: <Badge badgeContent={cart?.length} color="primary"><AllInclusiveSharpIcon sx={{color:'white'}}/> </Badge>},
  //   {label:'Shop', path:'/shop', icon:<AlignHorizontalCenterTwoToneIcon  sx={{color:'white'}}/>}
  // ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <AlignVerticalCenterTwoToneIcon />
          </IconButton>
          <Box sx={{mr:1, flexGrow: 1, ...(open&&{display:'none'})}}>
            <Link to="/">
            <img alt="Book Logo" style={{maxHeight:'60px'}}
            className='p2' src="https://res.cloudinary.com/jsheff/image/upload/e_bgremoval,r_0/a_0/v1660959370/Screen_Shot_2022-08-19_at_8.35.29_PM_iecfpg.png"/>
            </Link>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User Options">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Please Login" src="https://res.cloudinary.com/jsheff/image/upload/v1661444321/Infinty_plus_one_vgy9if.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/login" style={{textDecoration   :'none', color:'black'}}>
                  <Typography textAlign="center">Login </Typography>
                  </Link>
                </MenuItem>
            
            </Menu>
          </Box>
        </Toolbar>
        
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Box sx={{color:"#C2C5AA", backgroundColor:"#936639", background:"linear-gradient(to bottom, rgba(0, 0, 0, 1.6)rgba(0, 0, 0, 100.6))", backgroundSize:"contain", flexGrow:1}}>
          <DrawerHeader>
          ||| JOBU ||| BOOKS |||
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronRightIcon sx={{color:"white"}}/> : <ChevronLeftIcon sx={{color:"white"}}/>}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[{label:'Your List', path:'/booklist', icon:<AllInclusiveSharpIcon sx={{color:'white'}}/>}].map((navItem, index) => (
              <ListItem key={navItem.label} disablePadding sx={{ display: 'block', ml:2, mb:2 }}>
                <div style={{display:"flex", marginTop:"15px"}}>
                <Link to={navItem.path} style={{display:"flex", color: 'inherit', textDecoration: 'none'}}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                  {navItem.icon}
                  </ListItemIcon>
                  <ListItemText primary={navItem.label} sx={{ opacity: open ? 1 : 0 }} />
                </Link>
                  </div>
              </ListItem>
            ))}
         
            {[{label:'Browse Books', path:'/bookbrowser', icon:<AlignHorizontalCenterTwoToneIcon sx={{color:'white'}}/>}].map((navItem, index) => (
              <ListItem key={navItem.label} disablePadding sx={{ display: 'block', ml:2, mb:2 }}>
                <div style={{display:"flex", marginTop:"15px"}}>
                <Link to={navItem.path} style={{display:"flex", color: 'inherit', textDecoration: 'none'}}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                  {navItem.icon}
                  </ListItemIcon>
                  <ListItemText primary={navItem.label} sx={{ opacity: open ? 1 : 0 }} />
                </Link>
                  </div>
              </ListItem>
            ))}
            
          </List>
          
        </Box>
        { open ?
          <ListItem sx={{postion:"absolute", bottom:'0px', alignContent: 'center', justifyContent: 'center', backgroundColor:'#936639'}}>
            <ThemeSwitch />
          </ListItem>  
          : ''}  
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <SubjectBar/>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

