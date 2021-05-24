import React from "react";
import { Container, Box, Grid ,Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import servicesBgImg from '../assects/img/services.png';



 
const useStyles = makeStyles((theme) =>({
    aboutComany:{
        fontSize:50,
        letterSpacing: ".055em",
        lineHeight: 2.7,
        fontWeight: 300,
        textAlign: "center",
    },
    aboutMainText:{
        fontFamily:"'Exo', sans-serif",
        fontSize:16,
        fontWeight:"normal",

    },
 
    
}) )

function About() {
    const classes = useStyles();

    return(
        
        <>
            <Container  id="about" >
                <Box  className={classes.aboutComany}>
                    at g2x
                </Box> 
               <Grid container spacing={0} alignItems="center" justify="center" >
                    <Grid item xs={12} sm={8} md={4} lg={4}  >
                        <Box display="flex" justifyContent="center" textAlign="center" mb={5} >
                            <Typography className={classes.aboutMainText} >  
                                We aren’t just building the future – 
                                the work we are doing for industry players is defining it. 
                                And that, in turn, defines us. We are one of the most unique, 
                                algorithmically-centered  
                               <b > SOFTWARE DEVELOPMENT </b>
                                boutiques.
                            </Typography>
                        </Box>
                    </Grid>   
                </Grid> 
            </Container>
           
            
        </>
    )
}
export default About;