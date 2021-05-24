
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contacts from './components/Contacts';
import ScrollToTop from './components/ScrollToTop';
 



function App() {


 

  return (
    <>
     
      <Navbar/>  
      <ScrollToTop />
      <Home /> 
      <About />   
      <Services/>
      <Contacts />     
     
    </>
  );
}

export default App;
