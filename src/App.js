
import './App.css';
import Home from './Mycomponents/Home';
import Navbar from './Mycomponents/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Footer from './Mycomponents/Footer';
import About from './Mycomponents/About';
import Services from './Mycomponents/Services';
import Contact from './Mycomponents/Contact';


function App() {
  return (
    <>
    
    <Navbar title = "Education Learning"/>
    <Route exact path="/" component={Home}/>
    <Route exact path="#about" component={About}/>
    <Route exact path="#services" component={Services}/>
    <Route exact path="#contact" component={Contact}/>
    <Footer/>
      {/* <Router>
      <Navbar title ="Education Learning" />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="#about">
          <About  title = "''Educational Quotes''" title2 = "''Types of Education''"/> 
        </Route>
        <Route exact path="#services">
          <Services/>
        </Route>
        <Route exact path="#contact">
          <Contact/>
        </Route>
      </Switch>
      <Footer/>
      </Router> */}
    
    </>

  );
}

export default App;
