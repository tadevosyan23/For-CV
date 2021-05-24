import React,{useState, useEffect}  from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import IconButton from '@material-ui/core/IconButton/IconButton';
import { makeStyles } from '@material-ui/core/styles'
import { useWindowScroll } from 'react-use';
import { animateScroll as scroll } from "react-scroll";



  const useStyles = makeStyles((theme) => ({
    toTop:{
      zIndex:1000,
      position:"fixed",
      bottom:"10vh",
      backgroundColor:"#e42a61",
      color:"#fff",
      right:"5%",
      transition:"all 0.3s ease-in",
      '&:hover':{
        transition:"0.3s",
        backgroundColor:"gray",
      },
      [theme.breakpoints.down('xs')]:{
        bottom:"5vh",
        right:"10%",
      },
      '&:hover':{
        backgroundColor:"#e42a61",
      },
    },
     
  }));

  function ScrollToTop() {

      const classes = useStyles();  

      const {y:pageYOffset} = useWindowScroll();
      const [visible, setVisiblity] = useState(false);

      useEffect(()=>{
        if  (pageYOffset > 200) {
          setVisiblity(true);
        }else {
          setVisiblity(false);
        }
      }, [pageYOffset])

      const scrollToTop = () => {
        scroll.scrollToTop();
      };


      if(!visible) {
        return false;
      }
      

      
 
  return (
      <div>
          <IconButton  className={classes.toTop} onClick = {scrollToTop}>
            <ArrowUpwardIcon />
          </IconButton>
      </div>
  )


  }

  export default ScrollToTop;




  // const [show, setShow] =  useState(showBelow ?  false : true)
  
  // const handleScroll = () => {
  //       if( window.pageYOffset > showBelow) {
  //         if (!show) setShow(true)
  //         } else {
  //           if(show) setShow(false) 
  //         }
  //     }
  //     useEffect(() => {
  //         if (showBelow) {
  //           window.addEventListener(`scroll`, handleScroll)
  //           return () => window.removeEventListener(`scroll`,handleScroll)
  //         }
  //       })
        
  // const handleClick = () => {
  //     window[`scrollTo`]({ top: 0, behavior:`smooth`})
  // }












//   showBelow
// }) => {

//  
//  
//   



// 