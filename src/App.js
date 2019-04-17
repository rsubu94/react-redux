import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Videos from './pages/videos';
//import Offers from './pages/offers';
//import Cart from "./redux/mappings/ComponentMappings";
import { Offer, Cart , Reviews } from "./redux/mappings/ComponentMappings";
//import Reviews from './pages/reviews';
import CourseContent from './pages/coursecontents'
import './App.css';
import './styles/app.css';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#">
              <img src={logo} className="App-logo" alt="logo" />
            </a>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/videos">Videos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reviews">Reviews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/offers">Offers</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-md-auto">
              <li><Link className="nav-link" to="/cart">Cart</Link>
              </li>
            </ul>

          </nav>
          <div id="container">
            <div id="main-area">
              <Route exact path="/" component={Home}></Route>
              <Route path="/videos" component={Videos}></Route>
              <Route path="/reviews" component={Reviews}></Route>
              <Route path="/offers" component={Offer}></Route>
              <Route path="/cart" component={Cart}></Route>
              <Route path="/coursedetails/:ccode" component={CourseContent} />
            </div>
            <div id="right-bar"></div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
