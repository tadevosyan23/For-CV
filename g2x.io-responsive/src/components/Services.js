import React from 'react';
import { Container, Box, Typography, Grid ,  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import servicesBgImg from '../assects/img/services.png';

const useStyles = makeStyles((theme) =>({
    serviceRectangle:{
        background: "rgba(229,229,229,.31)",

    },
    servicesBgImg:{
        background:`url(${servicesBgImg})`,
        backgroundPosition:"center",
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        mixBlendMode:"hard-light",
        // height:"100vh",
    },
    services:{
        fontFamily:"'Exo', sans-serif",
        fontSize:16,
        fontWeight:"normal",
       
    },
   
    borderLeft:{
        borderLeft:"5px solid #e42a61",
        paddingLeft:theme.spacing(2),
    },
    servicesTopSection:{
        paddingTop:theme.spacing(8),
        marginBottom:theme.spacing(10),
        [theme.breakpoints.down('sm')]:{
          display:"flex",
          justifyContent:"center",  
        },
    },
    servicesBottomSection:{
       paddingBottom:theme.spacing(10),
       [theme.breakpoints.down('sm')]:{
        display:"flex",
        justifyContent:"center",  
      },
    }

    
}) )


function Services() {

    const classes = useStyles();
    return(
        <>
        
            <div className={classes.serviceRectangle}>
                <Container  id="services" >
                    <Grid className={classes.servicesBgImg} >
                        
                        <Grid container  className={classes.servicesTopSection} >
                            <Grid item xs={12} sm={8} md={4} lg={4} className={classes.services} >
                                <Box>
                                    <Box className={classes.borderLeft} >
                                        WEBSITE DESIGN & DEVELOPMENT 
                                    </Box>
                                    <Box textAlign="left" pl={2.5} pb={2.5} >
                                    Any organization acknowledges that its online 
                                    presence is a critical component to their
                                    marketingand corporate strategy. 
                                    A website is the window to an organization and its offerings.
                                    </Box>
                                </Box>
                               
                            </Grid>
                            <Grid item xs={12} sm={8} md={4} lg={4} className={classes.services} >
                                <Box className={classes.borderLeft} >
                                    APPLICATION DEVELOPMENT
                                </Box>
                                <Box textAlign="left" pl={2.5} pb={2.5} >
                                    Our mobile app developers with expertise in developing 
                                    outstanding mobile apps for iphone and android will 
                                    help you to convert your vision into reality.
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={8} md={4} lg={4} className={classes.services} >
                                <Box className={classes.borderLeft} >
                                    WEBSITE DESIGN & DEVELOPMENT 
                                </Box>
                                <Box textAlign="left" pl={2.5} pb={2.5} >
                                Any organization acknowledges that its online 
                                presence is a critical component to their
                                marketingand corporate strategy. 
                                A website is the window to an organization and its offerings.
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container  className={classes.servicesBottomSection} >
                            <Grid item xs={12} sm={8} md={4} lg={4} className={classes.services} >
                                <Box className={classes.borderLeft} >
                                    WEBSITE DESIGN & DEVELOPMENT 
                                </Box>
                                <Box textAlign="left" pl={2.5} pb={2} >
                                Any organization acknowledges that its online 
                                presence is a critical component to their
                                marketingand corporate strategy. 
                                A website is the window to an organization and its offerings.
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={8} md={4} lg={4} className={classes.services} >
                                <Box className={classes.borderLeft}  >
                                    WEBSITE DESIGN & DEVELOPMENT 
                                </Box>
                                <Box textAlign="left" pl={2.5}  pb={2} >
                                Any organization acknowledges that its online 
                                presence is a critical component to their
                                marketingand corporate strategy. 
                                A website is the window to an organization and its offerings.
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={8} md={4} lg={4} className={classes.services} >
                                <Box className={classes.borderLeft} >
                                    WEBSITE DESIGN & DEVELOPMENT 
                                </Box>
                                <Box textAlign="left" pl={2.5}  pb={2} >
                                Any organization acknowledges that its online 
                                presence is a critical component to their
                                marketingand corporate strategy. 
                                A website is the window to an organization and its offerings.
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )

}

export default Services;