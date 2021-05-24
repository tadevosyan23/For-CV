import React , {useState} from 'react';

import { Container , Box, Grid, Button, Typography,Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import homeBackground from '../assects/img/banner.jpg';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
 
const useStyles = makeStyles((theme) => ({
    homeBackground:{
        backgroundImage:`url(${homeBackground})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        mixBlendMode: "hard-light",
        backgroundRepeat: "no-repeat",
        height:"100vh",
        [theme.breakpoints.down('sm')]:{
            backgroundPosition:"left",
            height:"415px",
        },
        [theme.breakpoints.down('640')]:{
            backgroundPosition:"left",
            height:"100vh",
        },
    },
    overlayBackground :{
        height:"100vh",
        backgroundColor: "rgba(3,3,14,.7)",
        [theme.breakpoints.down('sm')]:{
          
            height:"415px",
        },
        [theme.breakpoints.down("640")]:{
            
            height:"100vh",
        },
    },
    mainTitleBox:{
        paddingTop:theme.spacing(25),
        [theme.breakpoints.down('sm')]:{
            paddingTop:theme.spacing(12),
            marginLeft:theme.spacing(3),
        },
        // [theme.breakpoints.up('1024')]:{
        //     paddingTop:theme.spacing(20),
        //     marginLeft:theme.spacing(6),
        // },
        // [theme.breakpoints.up('1026')]:{
        //     paddingTop:theme.spacing(15),
        //     marginLeft:theme.spacing(3),
        // },
        [theme.breakpoints.down('xs')]:{
            paddingTop:theme.spacing(15),
        },
        [theme.breakpoints.down('321')]:{
            paddingTop:theme.spacing(10),
        },
    },
    mainTitle: {
        color:"#fff",
        fontSize: "50.4673px",
        lineHeight: "138.91%",
        letterSpacing: ".2em",
        fontFamily:"'Audiowide', cursive",
        [theme.breakpoints.down('sm')]:{
            fontSize: "25px",
            lineHeight: "80%",
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: "25px",
            lineHeight: "138.91%",
        },
    },
    smallTitle :{
        borderLeft:"5px solid #e42a61",
        fontFamily:"'Exo', sans-serif",
        fontWeight: "normal",
        fontSize: "25px",
        color:"#fff",
        letterSpacing:"3.5px",
        [theme.breakpoints.down('sm')]:{
            marginTop:theme.spacing(1),
            fontSize: "20px",
        },
        [theme.breakpoints.down('xs')]:{
            
        },
    },

    secondaryBox:{
        marginTop:theme.spacing(10),
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center",
        // [theme.breakpoints.up('1024')]:{
        //     flexDirection:"column-reverse",
        // },
        // [theme.breakpoints.up('1026')]:{
        //     flexDirection:"row",
        // },
        [theme.breakpoints.down("md")]:{
          
 
            // justifyContent: "center",
            flexDirection: "row",
            
            
        },
        [theme.breakpoints.down("sm")]:{
            marginTop:theme.spacing(2),
            marginLeft:theme.spacing(2),
            justifyContent: "center",
            flexDirection: "row",
            
            
            
        },
        [theme.breakpoints.down("640")]:{
            marginTop:theme.spacing(3),
            marginLeft:theme.spacing(3),
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "flex-start",
        },
        
      
    },
    mainButtonBox:{
        // marginTop:theme.spacing(10),
        [theme.breakpoints.down('sm')]:{
            marginLeft:theme.spacing(5) ,
            marginRight:theme.spacing(5) ,
          
        },
        [theme.breakpoints.down('640')]:{
            marginLeft:theme.spacing(0)  ,
            marginRight:theme.spacing(0) ,
             
            
        },
        
    },
    mainButton: {
        backgroundColor:"#e42a61",
        color:"#fff",
        fontSize:"20px",
        fontFamily:"'Audiowide', cursive",
        paddingTop:theme.spacing(3),
        paddingBottom:theme.spacing(3),
        paddingLeft:theme.spacing(12),
        paddingRight:theme.spacing(12),
        letterSpacing:theme.spacing(0.5),
        '&:hover':{
            color:"#000",
            backgroundColor:"#e42a61",
        },
        [theme.breakpoints.down('xs')]:{
            fontSize:"18px",
            paddingLeft:theme.spacing(4),
            paddingRight:theme.spacing(4),
            // marginLeft:theme.spacing(3),
        },
        [theme.breakpoints.down('sm')]:{
            fontSize:"16px",
            paddingLeft:theme.spacing(2),
            paddingRight:theme.spacing(2),
            // marginLeft:theme.spacing(3),
        },
        // [theme.breakpoints.up('1024')]:{
        //     paddingLeft:theme.spacing(6),
        //     paddingRight:theme.spacing(6),
        //     paddingTop:theme.spacing(4),
        //     paddingBottom:theme.spacing(4),
        //     fontSize:"40px",
        // },
        
    },
    homeIcons:{
        color:"#fff",
        display:"flex",

        flexDirection:"column",
        // paddingTop:theme.spacing(10),
        // [theme.breakpoints.up('1024')]:{
        //     flexDirection:"row",
        // },
        // [theme.breakpoints.up('1026')]:{
        //     flexDirection:"column",
        // },
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column",
            marginRight:theme.spacing(0),
        },
        [theme.breakpoints.down("640")]:{
            flexDirection:"row",
            
        },
        
        
    },
    socialIcon:{
        padding:theme.spacing(0.5),
        marginBottom:theme.spacing(4),
        borderRadius:"30px",
        border:"1px solid #fff",
        color:"#000",
        backgroundColor:"#fff",
        cursor:"pointer",
        '&:hover':{
           
            borderColor:"#e42a61",
            color:"#e42a61",
            transition:"all 0.3s"
        },
        // [theme.breakpoints.up('1024')]:{
        //     color:"#e42a61",
        //     flexDirection:"row",
        //     fontSize:"60px",
        //     padding:theme.spacing(1),
        //     margin:theme.spacing(2),
        // },
        [theme.breakpoints.down("sm")]:{
            
            color:"#e42a61",
            borderColor:"#e42a61",
            marginBottom:theme.spacing(1),
            fontSize:"22px",
        },
        [theme.breakpoints.down("640")]:{
            
           
            marginRight:theme.spacing(3),
            marginBottom:theme.spacing(3),
            fontSize:"30px",
        },
       
    },
    rightComanyBox:{
        [theme.breakpoints.down("sm")]:{
            textAlign:"right",
        },
        [theme.breakpoints.down("640")]:{
            textAlign:"left",
            marginTop:theme.spacing(3),
        },
        // [theme.breakpoints.up('1024')]:{
        //     textAlign:"center",
            
        // },
    },
    rightComany:{
        display:"inline-block",
        fontFamily:"'Audiowide', cursive",
        fontSize: "33px",
        lineHeight: 1.5,
        letterSpacing: "1.44px",
        background:"linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(228,42,97,1) 47%, rgba(228,42,97,1) 100%)",
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        [theme.breakpoints.down("sm")]:{
            fontSize: "20px",

        },
        [theme.breakpoints.down("xs")]:{
            fontSize: "25px",
        },
        // [theme.breakpoints.up('1024')]:{
        //     fontSize: "50px",
            
        // },
    },
   
 
}))
function Home() {
const classes = useStyles();
    return(
        <>
        
        <div className={classes.homeBackground}>
            <div className={classes.overlayBackground}>
            <Container  id="home" >
                <Box className={classes.mainTitleBox}>
                    <Box className={classes.mainTitle} mb={2} > 
                        SOFTWARE  
                    </Box>
                    <Box className={classes.mainTitle} > 
                        DEVELOPMENT 
                    </Box>
                    <Box className={classes.smallTitle} mt={6} pl={2}  >
                        Transform Today’s World Through Ideas Of Tomorrow
                    </Box>
                </Box>
                <Grid container >
                    <Grid container className = {classes.secondaryBox} >
                        <Box  className={classes.homeIcons}  >
                            <FacebookIcon className={classes.socialIcon} /> 
                            <InstagramIcon className={classes.socialIcon} />
                            <YouTubeIcon className={classes.socialIcon} />                                    
                        </Box>
                        
                        <Box className={classes.mainButtonBox} >
                            <Button variant="contained" className={classes.mainButton}  >
                                    Explore <ArrowForwardIosIcon style={{fontSize:"22px"}} /> 
                            </Button>
                        </Box>
                        
                       
                        <Box textAlign = "right" className={classes.rightComanyBox}  >
                            <span className={classes.rightComany}  > HERE & NOW </span> <br  />
                            <span className={classes.rightComany}> GET IN FRONT OF CHANGE </span>
                        </Box>
                        
                    </Grid>
                </Grid>
            </Container>
            </div>
        </div>
        </>

    )
}



export default Home;