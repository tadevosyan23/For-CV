import React from 'react';
import '../App.css';
import { Container, Grid,
		 Box, TextField, Button,
		 IconButton } from '@material-ui/core';
import ContactSectionBackground from '../assects/img/contact.png';
import { makeStyles } from '@material-ui/core/styles';
import officeAddress from '../assects/img/officeAddress.png';
import telphoneIcon from '../assects/img/telphoneIcon.png';
 


const useStyles = makeStyles((theme) =>({

	contactBackground:{
        background:`url(${ContactSectionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat:" no-repeat",
	},
	form:{
		display:"flex",
		flexDirection:"column",
		[theme.breakpoints.down('md')]:{
			marginRight:theme.spacing(10),
			marginLeft:theme.spacing(10),

		},
		[theme.breakpoints.down('sm')]:{
			marginRight:theme.spacing(5),
			marginLeft:theme.spacing(5),
		},
		[theme.breakpoints.down('xs')]:{
			marginRight:theme.spacing(1),
			marginLeft:theme.spacing(1),

		}
	},
	textField:{
		marginTop:theme.spacing(5),
		fontSize:32,
	 
	 
	},
	input:{
		color:"#fff",
		border:"2px solid #fff",
		 
	},
	inputTextArea:{
		display:"block", 
		height:"25vh",
		color:"#fff",
		border:"2px solid #fff",
	 

	},
	formButton:{
		marginTop:theme.spacing(5),
		marginBottom:theme.spacing(10),
		background:"transparent",
		color:"white",
		textTransform:"unset",
		border:"2px solid #fff",
		padding:theme.spacing(2),
		'&:hover':{
			backgroundColor:"#fff",
			color:"#000"
		}
	},
	contactRightBar:{
		background:" rgba(126,35,35,.32)",
		
		fontFamily:"'Audiowide', cursive",
		padding:theme.spacing(3),
		color:"white",
		marginLeft:theme.spacing(20),
		marginTop:theme.spacing(4),
		fontSize:20,
		[theme.breakpoints.down('md')]:{
			marginLeft:theme.spacing(3),
		},
		[theme.breakpoints.down('sm')]:{
			textAlign:"center",
			marginLeft:theme.spacing(0),
			border:"1px solid",
			borderColor:"rgba(126,35,35,.32)",
			borderRadius:30,
			boxShadow:"0 0 15px #fff",
			marginBottom:theme.spacing(5),
		},
		 

	},
	innerRightBar:{
		display:'flex', 
		flexDirection:'row',
		alignItems:"center",
		[theme.breakpoints.down('md')]:{
			justifyContent:"center",
		},
		[theme.breakpoints.down('xs')]:{
			justifyContent:"center",
			flexDirection:"column",
		 
			
		},
		
	}

	
	 
	 
    
}) )

 


function Contacts(){
	const classes = useStyles();
	return(
		<>
			<div className={classes.contactBackground}  id="contacts"> 
				<Container>
					<Box style={{color:"white"}} fontSize={25} pt={10} pb={3} >
						let’s talk about your new project.
					</Box>
					<Box style={{color:"white"}}  >
						We'd love to hear all about who you are and what your needs are!
					</Box>
					<Grid container  >
						<Grid item xs={12} sm ={12} md={6}  lg={4} >
							<form className={classes.form} noValidate autoComplete="off">
							<TextField 
								 id="filled-basic"
								variant="filled" 
								label="my name is..." 
								className={classes.textField} 
								InputLabelProps={{className:"textField__label"}}
								InputProps={{className:classes.input}} />
							<TextField 
								id="filled-basic"
								variant="filled" 
								label="I am intereset in..." 
								className={classes.textField} 
								InputLabelProps={{className:"textField__label"}}
								InputProps={{className:classes.input}} />
							<TextField 
								 
								id="filled-basic"
								variant="filled" 
								label="my email is..."
								type="email"
								className={classes.textField} 
								InputLabelProps={{className:"textField__label"}}
								InputProps={{className:classes.input}}
							/>
							<TextField 
								 id="filled-basic"
								 variant="filled" 
								 label="project description..."
								 type="email"
								 multiline
								 rowsMax={8}
								 className={classes.textField} 
								 InputLabelProps={{className:"textField__label"}}
								 InputProps={{className:classes.inputTextArea}}
							 />
	 						 
							 <Button 
								variant="contained" 
								className={classes.formButton} > 
								send my email...
							 </Button>

								  
 							</form>
						</Grid>
						<Grid item xs={12} sm ={12} md={6}  lg={8}  >
							<Box className={classes.contactRightBar}>
								G2X ARMENIAN OFFICE
								<Box className={classes.innerRightBar} >
									<Box display="flex" alignItems="center">
										<IconButton>
											<img src={officeAddress} alt="Office Address" />
										</IconButton>
										<Box fontSize={16} >Komitas 65, Yerevan,<br /> Armenia </Box> 
									</Box>
									<Box display="flex" alignItems="center" >
										<IconButton>
											<img src={telphoneIcon} alt ="Office Telephone" />
										</IconButton>
										<Box fontSize={16} >+37477705886</Box>
									</Box>
								</Box>
							</Box>

							
						</Grid>
					</Grid>
				</Container>
			</div>
		</>
	)
}

export default Contacts;
 