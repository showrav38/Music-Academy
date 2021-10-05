import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import MenuBar from './components/MenuBar/MenuBar';
import HomeMusic from './components/HomeMusic/HomeMusic';
import Services from './components/Courses/Courses';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="control">
      <Router>
        {/* <MenuBar></MenuBar> */}
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/courses">
            <MenuBar></MenuBar>
            <Services></Services>
            <Footer></Footer>
          </Route>
          <Route exact path="/about-us">
            <MenuBar></MenuBar>
            <AboutUs></AboutUs>
            <Footer></Footer>
          </Route>
          <Route exact path="/contact-us">
            <MenuBar></MenuBar>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route exact path="/faq">
            <MenuBar></MenuBar>
            <Faq></Faq>
            <Footer></Footer>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* <Footer></Footer> */}
        {/* <MenuBar></MenuBar> */}
      </Router>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
