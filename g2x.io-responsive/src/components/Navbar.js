import React,{ useState , useEffect } from 'react';
import './Navbar.css';
import { AppBar, Container, Toolbar, Box, IconButton  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon  from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import BrandLogo from '../assects/img/brand-logo.png' ;
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarTrasparent:{
    background:'transparent',
    boxShadow:'none',
    transition:"all 0.3s ease"
  },
  appBarSolid: {
    backgroundColor: "#242222",
    transition:"all 0.3s ease"
  },
  appBarContainer:{
  padding:theme.spacing(0),
  // margin:theme.spacing(0),
  [theme.breakpoints.down("sm")] :{
    maxWidth:"100%",
    padding:theme.spacing(0),
  }

  },
  brandLogo:{ 
    flexGrow:1,
    padding:theme.spacing(1),
  },

  logo: {
    maxWidth:"180px",
     [theme.breakpoints.down("sm")] :{
      maxWidth:"125px",
      padding:theme.spacing(1),
  },
  [theme.breakpoints.down("xs")] :{
    maxWidth:"110px",
    padding:theme.spacing(0),
  }
  },
   navLink: {
    paddingRight:theme.spacing(3),
    paddingLeft:theme.spacing(3),
    color:"#fff",
    paddingBottom:theme.spacing(1),
    cursor:"pointer",
    fontFamily:"'Exo', sans-serif",
    fontSize:"16px",
    [theme.breakpoints.down("sm")] :{
      fontSize:"25px",
      padding:theme.spacing(1),
      paddingLeft:theme.spacing(3),
      paddingRight:theme.spacing(3),
      marginBottom:theme.spacing(3),
      border:"1px solid #fff",
      borderRadius:"30px",
      boxShadow :"0 0 15px #ccc",
      color:"#000",
      backgroundColor:"#fff",
      [theme.breakpoints.down("xs")] :{
        fontSize:"20px",
        color:"#000",
        backgroundColor:"#fff",
        fontWeight:"bold"
      },
  }
   },
   iconButton:{
    cursor:'pointer',
     
   },
  iconMenu: {
    display:'none',
    color:"#fff",
    fontSize:"40px",
    border:"1px solid #fff",
    borderRadius:"50px",
    zIndex:2000,
    padding:theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      display:"block",
      fontSize:"30px",
    },
   
  },
 
  
}))



function Navbar() {
  
const [click, setClick] =  useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
const [navBackground , setNavBackground]  = useState('appBarTrasparent');

const navRef = React.useRef()

navRef.current = navBackground

useEffect(()=>{

  const handleScroll = () => {
    const show = window.scrollY >= 100
    if (show) {
      setNavBackground('appBarSolid')
    } else {
      setNavBackground('appBarTrasparent')
    }

  }
  document.addEventListener('scroll',handleScroll)
  return()=>{
    document.addEventListener('scroll',handleScroll)
  }

},[])

  

  
  const classes = useStyles();
    return (
        <>
             <AppBar position="fixed" className={classes[navRef.current]}   >
             <Container fixed className={classes.appBarContainer}  >
              <Toolbar  >
                <Box className={classes.brandLogo} >
                  <img src={BrandLogo} alt="Kangooro" className={classes.logo}  />
                </Box>
               
                <Box className={click ? 'nav-menu active' : 'nav-menu'} >
                

                  <Link
                    className={classes.navLink}
                    onClick={closeMobileMenu}
                    underline = "none" 
                    activeClass="scroll"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1500}>
                    HOME
                  </Link>
                  <Link
                    className={classes.navLink}
                    onClick={closeMobileMenu}
                    underline = "none" 
                    activeClass="scroll"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1500}>
                    ABOUT
                  </Link>
                  <Link
                    className={classes.navLink}
                    onClick={closeMobileMenu}
                    underline = "none" 
                    activeClass="scroll"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1500}>
                    SERVICES
                  </Link>
                  <Link
                    className={classes.navLink}
                    onClick={closeMobileMenu}
                    underline = "none" 
                    activeClass="scroll"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1500}>
                    CONTACTS
                  </Link>

                </Box>
                    <IconButton onClick = {handleClick} className = {classes.iconButton}  >
                     { click  ?  <CloseIcon className = {classes.iconMenu} />  :  <MenuIcon  className = {classes.iconMenu} /> }  
                    </IconButton>
              </Toolbar>
             </Container>
           </AppBar>
        </>
    )
}

export default Navbar;