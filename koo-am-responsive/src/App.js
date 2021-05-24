// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './index.css';
import React , {useState} from 'react';
 import { AppBar, Container, Toolbar, 
  IconButton, Typography, Link ,
  Grow , Paper, Popper, Grid,
  MenuItem , MenuList ,Table , TableBody, 
  TableCell , TableContainer , TableHead, TableRow } from '@material-ui/core';
 import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuIcon  from '@material-ui/icons/Menu';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Box from '@material-ui/core/Box/Box';
import Button from '@material-ui/core/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import  ReactLogo  from './assects/img/Kangaroo_Logo.png';
import  arm  from './assects/img/arm.png';
import  rus  from './assects/img/ru.png';
import  eng  from './assects/img/us.png';
import CourierCar from './assects/img/CourierCar.png';
import FooterTop from './assects/img/FooterTop.svg';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import iconsBack from './assects/img/HowItWorks1.svg';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import arca from './assects/img/arca.png';
 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navBar : {
    padding : theme.spacing(1),
    boxShadow: "0 1px 10px rgba(0,0,0,.18)",
    backgroundColor: "#fff",
    display:"flex",
    justifyContent: "center",
    alignItems: 'center',
   
  },
  navContainer:{
    [theme.breakpoints.down('md')]:{
      width:"100%",
      margin:theme.spacing(0),
      padding:theme.spacing(0),
    },
  },
  mainBox: {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    [theme.breakpoints.down('md')]:{
      display:"flex",
      flexWrap:"wrap",
    }
    
  },
 
  brandLogo: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('md')]:{
      marginRight:theme.spacing(2),
    },
  },
 
  navLinks: {
    marginRight: theme.spacing(4),
    fontSize:"13px",
    color: "rgba(0,0,0,.87)",
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      color:'#fff',
      fontSize:'18px',
      textShadow:'0 0 10px #fff',
      marginRight: theme.spacing(0),

    },
     
  },
  middleName: {
    marginRight: theme.spacing(4),
    fontSize:"13px",
    color: "rgba(0,0,0,.87)",
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]:{
      marginTop:theme.spacing(2),
      marginBottom:theme.spacing(2),
      marginRight: theme.spacing(0),
      color:"#fff",
      textShadow:'0 0 10px #fff',
      fontSize:'18px',
    }

  },
  toggleButton : {
   flexGrow:1,
   zIndex:1,
  },
  langImg: {
    marginRight: theme.spacing(1),
  },
  webNumber: {
     color:"#000000",
     opacity:"87%",
     fontSize:"14px",
     [theme.breakpoints.down('md')]: {
      display:"none",
    },
  },
  loginBtn: {
    backgroundColor:"inherit",
    color : "#ff8c00",
    border:"1px solid #ff8c00;",
    borderRadius: "55px",
    textTransform : "capitalize",
    fontSize: "14px",
    [theme.breakpoints.down('sm')]:{
      marginTop:theme.spacing(1),
      marginBottom:theme.spacing(1),
    },
  },
  iconMenu: {
    color:"#ff8c00",
    display:'none',
    [theme.breakpoints.down("sm")]: {
     display:"block"
    }
  },
  mainFuturesPost : {
    position:'relative',
    marginTop:theme.spacing(17),
    boxShadow:"none",
    [theme.breakpoints.down("sm")]:{
      marginTop:theme.spacing(15),
    },
    [theme.breakpoints.down(340)]:{
      marginTop:theme.spacing(20),
    }
  },
  mainFuturesPostContent : {
    position:'relative',
    padding:theme.spacing(8),
    [theme.breakpoints.down("md")]:{
      padding:theme.spacing(2),
    }
    
  },
  courierImg:{
    backgroundImage: `url(${CourierCar})`,
    backgroundSize: "100%",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    height:"415px",
    [theme.breakpoints.down('sm')]:{
      height:"320px",
    },
    [theme.breakpoints.down(380)]:{
      height:"200px",
    },
  },
  leftMainButton: {
    color:"#fff",
    backgroundColor:"#ff8c00",
    border:"1px solid #ff8c00",
    borderRadius:"55px",
    marginRight:theme.spacing(2),
    textTransform:"capitalize",
    fontSize:"14px",
    [theme.breakpoints.down(400)]:{
      marginBottom:theme.spacing(2)
    },
    '&:hover': {
      backgroundColor:"#ff8c00",
      color:"#fff",
   },  
  },
  rightMainButton: {
    color:"#ff8c00",
    backgroundColor:"#fff",
    border:"1px solid #ff8c00",
    borderRadius:"55px",
    textTransform:"capitalize",
    fontSize:"14px",
    '&:hover': {
      backgroundColor:"#fff",
      color:"#ff8c00 ", 
   },
  },

  circleBox: {
    border: "2px solid #ff8c00",
    borderRadius:"60px",
    backgroundColor:"#fff",
    height: "120px",
    width: '120px',
    '&:hover':{
      backgroundColor:"#fff",
    },
    [theme.breakpoints.down(960)]:{
      margin:theme.spacing(3),
    },
     
  },
  circleIcon: {
    fontSize : "56px",
    color:"#ff8c00",
    fontWeight:"bold",
    zIndex:2,
    
  }, 
  iconsBack: {
    backgroundImage:`url(${iconsBack})`,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    marginTop:theme.spacing(5),
    height:"150px",
    [theme.breakpoints.down(960)]:{
      background:"none",
    }
  },
  iconSection:{
    marginTop:theme.spacing(-17),
    [theme.breakpoints.down(960)]:{
      marginTop:theme.spacing(-20),
    },
    [theme.breakpoints.down('xs')]:{
      border:"2px solid #ff8c00",
      borderRadius:"30px",
      boxShadow: "0 2px 38px rgba(0,0,0,.50)",
      paddingTop:theme.spacing(2),
      paddingBottom:theme.spacing(3),
    },
     
  },
  aboutUsComany :{
    marginTop:theme.spacing(20),
    marginBottom:theme.spacing(5),
    [theme.breakpoints.down('sm')]:{
      marginTop:theme.spacing(15),
 
    }
  },
  aboutUs : {
    boxShadow: "0 2px 20px rgba(0,0,0,.08)",
    padding:theme.spacing(2),
    [theme.breakpoints.down('xs')]:{
      border:"2px solid #ff8c00",
      borderRadius:"30px",
      boxShadow: "0 2px 38px rgba(0,0,0,.50)"
    }
  },
  badBar:{
    color:"#ff8c00",
    borderBottom:"1px solid rgba(112,112,112,.1)",
    [theme.breakpoints.down(1190)]:{
      paddingLeft:theme.spacing(0),
    },
    [theme.breakpoints.down('sm')]:{
      textAlign:"left",
      paddingLeft:theme.spacing(5),
    },
     
  },
  leftBar : {
    color:"#ff8c00",
    borderBottom:"1px solid rgba(112,112,112,.1)",
    [theme.breakpoints.down('sm')]:{
      textAlign:"left",
    }
  },
  rightBar : {
    borderBottom:"1px solid rgba(112,112,112,.1)",
    
  },
  otherBar : {
    color:"#ff8c00",
    [theme.breakpoints.down("sm")]:{
      textAlign:"left",
      borderBottom:"1px solid rgba(112,112,112,.1)",

    }
  },
   
  
  deliveryOptions: {
    boxShadow: "0 2px 20px rgba(0,0,0,.08)",
    height:"450px",
    [theme.breakpoints.down("xs")]:{
      border:"2px solid #ff8c00",
      borderRadius:"30px",
      boxShadow: "0 2px 38px rgba(0,0,0,.50)"

    }
  },
  footer:{
    marginTop:theme.spacing(10)
  },
  footerTop:{
    backgroundImage:`url(${FooterTop})`,
    backgroundSize: "100%",
    backgroundPositionY: "top",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    height:"380px",
    width:"100%",
    marginTop:theme.spacing(5),
    [theme.breakpoints.down('sm')]:{
      display:"none",
    }
  },
  footerBox: {
    boxShadow:"none",
    textAlign:"left",
    [theme.breakpoints.down('md')]:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center"

    }
  }
})) 

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);
  const [click, setClick] =  useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData(  "0 - 3կմ",  "800 դրամ",  "1000 դրամ"	,  "1200 դրամ"  ),
    createData(  "3 - 8կմ", "1000 դրամ"	,   "1200 դրամ"	, "1400 դրամ" ),
    createData(  "8 - 13" + " կմ"	,"1200 դրամ"	, "1400 դրամ"	, "1700 դրամ"  ),
    createData(  "13 կմ և ավել"	, "1500 դրամ"	, "1700 դրամ"	, "2000 դրամ"  ),

  ];
  return (
    <>
     <AppBar position="fixed" className = {classes.navBar} >
       <Container fixed  className = {classes.navContainer}>
        <Toolbar className = {classes.mainBox}>
          <Box className={classes.brandLogo}>
            <img src={ReactLogo} width = "113" alt="Kangooro" />
          </Box>
          <IconButton className = {classes.iconMenu} onClick = {handleClick}  >
             <MenuIcon/>  
          </IconButton>
          <Box className={click ? 'nav-menu active' : 'nav-menu'}>
              <Link to='/' 
              underline = "none"  
              className = {classes.navLinks}  
              onClick={closeMobileMenu}>
              Ինչպես է այն աշխատում
              </Link>
              <Link
                to='/services'
                underline = "none" 
                my = {3}
                className = {classes.middleName}
                onClick={closeMobileMenu}>
                <span  >Մեր մասին</span>
              </Link>
              <Link
                to='/products'
                underline = "none" 
                className = {classes.navLinks}
                onClick={closeMobileMenu}>
                Առաքման տարբերակներ
              </Link>
          </Box>
          <Box className = {classes.toggleButton} >    
              <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                style={{ color:"#000000",opacity:"87%",fontSize:"14px" }}
              >
                <img className = {classes.langImg} alt="arm" src = {arm} /> ՀԱՅ <KeyboardArrowDownIcon color="action" fontSize="small" />
              </Button>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                          <MenuItem onClick={handleClose} style = {{fontSize:"14px"}} ><img className = {classes.langImg} src = {arm} alt = "arm"/> ՀԱՅ</MenuItem>
                          <MenuItem onClick={handleClose} style = {{fontSize:"14px"}} ><img className = {classes.langImg} src = {rus} alt = "ru"/> ՌՈՒՍ</MenuItem>
                          <MenuItem onClick={handleClose} style = {{fontSize:"14px"}} ><img className = {classes.langImg} src = {eng} alt = "us"/> ԱՆԳ</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
          </Box>
          <Typography className = {classes.webNumber} >+374 77 292827</Typography>
          <Box mx = {2} >
            <Button variant="outlined" className = {classes.loginBtn} >Մուտք / Գրանցվել</Button>
          </Box>
        </Toolbar>
       </Container>
     </AppBar>
    <main>
      <Container fixed  className = {classes.mainFuturesPost}>
        <Grid container
        direction="row"
        justify="center"
        alignItems="center">
          <Grid item md = {5} xs = {12} >
              <div className= {classes.mainFuturesPostContent}>
                  <Box fontSize = {30}>
                    Հայաստանում առաջին
                    առաքման online հարթակը
                  </Box>
                  <Box fontSize={16} my = {4}  lineHeight={1.5}>
                    ԿԵՆԳՈՒՐՈՒ-ի շնորհիվ դուք հենց այս պահին էլ կարող եք գրանցվել, 
                    և սկսել առաքել ձեր ծանրոցը մեկ կետից մյուսը, կամ դառնալով առաքիչ, 
                    գումար վաստակել կատարելով առաքումներ Հայաստանի տարածքում:
                  </Box>
                  
                  <Button variant = "contained" className = {classes.leftMainButton} >Դառնալ առաքիչ</Button>
                  <Button variant = "contained" className = {classes.rightMainButton} >Դառնալ հաճախորդ</Button>
              </div>
            </Grid>
            <Grid item md = {7} xs = {12} >
              <div className={classes.courierImg}></div>                
            </Grid>
        </Grid>
      </Container>
    </main>
    <Container maxWidth = "lg">
      <Box my = {5}>
        <Box textAlign="center" fontSize={34}>
          Ինչպես է այն աշխատում
        </Box>
        <Box mt={2} mb={3} textAlign="center" fontSize={14}>
          Կենգուրու դելիվերին աշխատում է շատ պարզ և ճկուն:
          Ընդհամենը անհրաժեշտ է գրանցվել և ավելացնել պատվեր.
        </Box>
      </Box>
     </Container>
     <Box className= {classes.iconsBack}></Box>
     <Container >
      <Grid container  className={classes.iconSection}>
        <Grid item md = {4} xs = {12} >
          <Box textAlign='center' >
            <IconButton  className= {classes.circleBox} >
              <PersonAddOutlinedIcon  className= {classes.circleIcon} />
            </IconButton>
            <Box fontWeight={600} fontSize={20} mx={8} lineHeight={1.5} >
              Գրանցվեք և դարձեք հաճախորդ
            </Box>
          </Box>
        </Grid>
        <Grid item md = {4} xs = {12}>
          <Box  textAlign='center' >
            <IconButton className= {classes.circleBox}>
              <RoomOutlinedIcon  className= {classes.circleIcon} />
            </IconButton>
            <Box fontWeight={600} fontSize={20} mx={8} lineHeight={1.5} >
              Նշեք պատվերի մանրամասները
            </Box>
          </Box>
        </Grid>
        <Grid item md = {4} xs = {12}>
          <Box  textAlign='center' >
            <IconButton className= {classes.circleBox}>
              <LocalShippingOutlinedIcon  className= {classes.circleIcon}/>
            </IconButton>
            <Box fontWeight={600} fontSize={20} mx={8} lineHeight={1.5} >
              Ստացեք Ձեր ծանրոցը շատ արագ
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
    <Container>
      <Box textAlign = "center" fontSize = {34} className={classes.aboutUsComany}   >
        Մեր մասին
      </Box>
      <Grid container  className = {classes.aboutUs}   >
        <Grid item md = {3} sm = {12} xs={12} >
          <Box textAlign="right"   pl = {5} py = {5}  className={classes.leftBar}   >Ո՞վ ենք մենք</Box>    
        </Grid>
        <Grid item md = {9} sm = {12}  xs={12}>
          <Box textAlign="left" pl = {4}  py = {5}  className={classes.rightBar}>ԿԵՆԳՈՒՐՈՒ-ն Հայաստանում առաջին առաքման online հարթակն է</Box>    
        </Grid>
        <Grid item md = {3} sm = {12}  xs={12} >
          <Box textAlign="right" pl = {5} py = {5} className={classes.badBar}  >Ի՞նչ ենք մենք առաջարկում</Box>    
        </Grid>
        <Grid item md = {9} sm = {12} xs={12} >
          <Box textAlign="left" pl = {4}  py = {5} className={classes.rightBar}  >Ձեր ապրանքի առաքում մեկ կետից մյուսը ամբողջ Երևանում` 24/7 սկզբունքով</Box>    
        </Grid> 
        <Grid item md = {3} sm = {12} xs={12} >
          <Box textAlign="right" pl = {5} py = {6.5} className={classes.leftBar}   >Ո՞րն է մեր նպատակը</Box>    
        </Grid>
        <Grid item md = {9} sm = {12} xs={12} >
          <Box textAlign="left" pl = {4}  py = {5} className={classes.rightBar}  >Հեշտացնել ձեր կյանքը, հնարավորություն ստեղծելով ապրանքը մեկ կետից մյուսը հասցնել սեղմ ժամկետում` ապահով և մատչելի</Box>    
        </Grid> 
 
        <Grid item md = {3} sm = {12} xs={12} >
          <Box textAlign="right" pl = {5} py = {5} className={classes.otherBar} >Ի՞նչու մենք</Box>    
        </Grid>
        <Grid item md = {9} sm = {12} xs={12} >
          <Box textAlign="left"  pl = {4}  py = {5}      >- Քանի որ մենք առաքում ենք ամենակարճ ժամկետում, իսկ պատվերը տեղադրվում է կայքում կամ հավելվածում` 
                                  միջինը մեկ րոպեի ընթացքում: <br />
                                  - Հնարավորություն ենք տալիս աշխատել գումար նաև ազատ ժամանակ, 
                                  այն ինչ ձեզ պետք է` հեռախոս և ինտերնետ <br />
                                  - Մենք նպաստում ենք խցանումների կրճատմանը և շրջակա միջավայրի բարելավմանը, քանի որ մեր առաքիչները նաև ոտքով և 
                                  հեծանիվով են առաքումը իրականացնում:</Box>    
        </Grid> 
      </Grid>
    </Container>
    <Container>
      <Box textAlign = "center" fontSize = {34} mt = {15} mb = {5}   >
        Առաքման տարբերակներ
      </Box>
      <Grid container spacing={3} justify="center" direction="row" alignItems="center"  >
        <Grid item xs = {12} sm = {8} md = {8} lg={4} >
          <Paper className={classes.deliveryOptions} >
            <Box textAlign="center"  pt={5} px={5}   >
              <IconButton  >
                <EmojiPeopleIcon style={{color:"#ff8c00", fontSize:"70px"}} />
              </IconButton>
              <Box fontSize={20}  pt={3} px={0} pb={4} >Ոտքով առաքում</Box>
              <Box fontSize={14}>
                Առաքման այս տարբերակը կատարվում է ոտքով,
                այդ թվում քաղաքային տրանսպորտով: 
                Այն ամենամատչելին է, և չի պահանջում վարորդական իրավուքի առկայություն:
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs = {12} sm = {8} md = {8} lg={4}>
          <Paper  className={classes.deliveryOptions}>
            <Box textAlign="center"  pt={5} px={5}  >
              <IconButton>
                <MotorcycleIcon style={{color:"#ff8c00", fontSize:"70px"}} /> 
              </IconButton>
              <Box fontSize={20} pt={3} px={0} pb={4}>Հեծանիվով առաքում</Box>
              <Box fontSize={14} >
                Խցանումների ժամանակ, առաքման այս տարբերակը ամենաարդյունավետն է: 
                Առաքման այս տարբերակի համար առաքիչները կա՛մ պետք է ունենան իրենց անձնական հեծանիվը,
                կա՛մ կարող են օգտվել մեր գործընկերների առաջարկած փոխադրամիջոցներից,
                մեր հարթակում գրանցված առաքիչների համար` զեղչված արժեքներով:
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs = {12} sm = {8} md = {8} lg={4}>
          <Paper  className={classes.deliveryOptions}>
            <Box   textAlign="center"  pt={5} px={5}>
              <IconButton>
                <DriveEtaIcon style={{color:"#ff8c00", fontSize:"70px"}} />
              </IconButton>
              <Box fontSize={20}  pt={3} px={0} pb={4}>Մեքենայով առաքում</Box>
              <Box fontSize={14}>
                Մեքենայով առաքումը ամենաարագն է, եթե քաղաքում չկան խցանումներ: 
                Առաքիչները պետք է ունենան վարորդական իրավունք և սեփական ավտոմեքենա:
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    <Container>
      <Box textAlign = "center" fontSize = {34} mt = {10} mb = {5}   >
        Սակագներ
      </Box>  
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell align="center"><b>Հեռավորություն</b></TableCell>
              <TableCell align="center"><b>Ոտքով առաքում</b></TableCell>
              <TableCell align="center"><b>Հեծանիվով առաքում</b></TableCell>
              <TableCell align="center"><b>Մեքենայով առաքում</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    <Grid container className={classes.footerTop}></Grid>
    <Container>
      <Grid container spacing={3} justify="center" direction="row" className={classes.footer} >
        <Grid item xs = {12} sm = {8} md = {8} lg={4} >
          <Paper className={classes.footerBox}   >
            
              <Box>
                <img src={ReactLogo} alt = "Kangaroo Logo" />
              </Box>
              <Box>
                Արագությունը և հուսալիությունը
                մենք երաշխավորում ենք 
              </Box>
              <Box>
                <IconButton>
                  <FacebookIcon />
                  <TwitterIcon />
                  <InstagramIcon />
                </IconButton>
              </Box>
              <Box>
                Մենք ընդունում ենք
              </Box>
              <Box>
                <img src={arca} alt="Cards" />
              </Box>
             
          </Paper>
        </Grid>
        <Grid item xs = {12} sm = {8} md = {8} lg={4}>
          <Paper  className={classes.footerBox} textAlign="left">
            
              
              <Box>Հղումներ</Box>
              <Link to='/' 
              underline = "none"  
              className = {classes.footerLinks}  
               >
              Ընդհանուր դրույթներ և պայմաններ
              </Link>  <br />
              <Link
                underline = "none"
                className = {classes.footerLinks}
               >
                Չեղյալ հայտարարման և վերադարձի պայմանները 
              </Link> <br />
              <Link
              
                underline = "none" 
                className = {classes.footerLinks}
               >
                Գաղտնիության քաղաքականություն

              </Link> <br />
              <Link
             
                underline = "none" 
                className = {classes.footerLinks}
               >
                Կազամակերպությունների համար
              </Link> <br />
              <Link
                
                underline = "none" 
                className = {classes.footerLinks}
               >
                Մեր մասին
              </Link> <br />
              <Link
               
                underline = "none" 
                className = {classes.footerLinks}
               >
                Օգնություն
              </Link>
             
            
          </Paper>
        </Grid>
        <Grid item xs = {12} sm = {8} md = {8} lg={4}>
        <Paper  className={classes.footerBox}>
            
              <Box  > Հետադարձ կապ</Box>
              <Box  > Հասցե: Կոմիտաս 65, 2</Box>
              <Box  >Էլ. հասցե: info@koo.am </Box>
              <Box  >Հեռ: +374 77 292827 </Box>
                  
               
           
          </Paper>
        </Grid>
      </Grid>
    </Container>
  
      <Box textAlign="center" mt={7} py={3}  style={{borderTop: "1px solid rgba(0,0,0,.1)"}}    >
      Կենգուրու դելիվերի - © 2021. Բոլոր իրավունքերը պաշտպանված են
      </Box>
     
    
</>
  );
}

export default App;
