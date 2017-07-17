import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';
import ContactUs from './ContactUs';
import Submissions from './Submissions';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header>
          <Navbar fluid fixedTop className="main-nav">
            <Navbar.Header>
              <Navbar.Brand>
                <img src="https://crunchbase-production-res.cloudinary.com/image/upload/c_limit,h_600,w_600/v1477170160/jcp6knkkemm1hcygpxtj.jpg" />
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem><Link to="/contact-us">Contact Us</Link></NavItem>
                <NavItem><Link to="/submissions">Submissions</Link></NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <div className="container" style={{marginTop: '72px', width: '100%'}}>
            <div className="row">
              <div className="col-md-12">
                <div className="app--directions">
                  <h4>Rotageek Programming Test</h4>
                  <p>Please click on the nav items on the top right to view the routes</p>
                </div>
                <Route path="/contact-us" component={ ContactUs }/>
                <Route path="/submissions" component={ Submissions }/>
              </div>
            </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
