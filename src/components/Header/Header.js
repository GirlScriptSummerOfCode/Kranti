import React, { Component } from 'react';
import './Header.css'
import KrantiLogo from "../../img/logo/kranti_logo.jpg"

class Header extends Component {
    render() {
        return (
            <header>
              <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <div className="navbar-brand">
                      <img src={KrantiLogo} className="header_logo" alt="logo"/>
                      <a className="logo_title" href="#home">Kranti</a>
                    </div>
                  </div>
                  <div className="collapse navbar-collapse" id="myNavbar">

                    <ul className="nav navbar-nav navbar-right">
                      <li><a href="#home">Homepage</a></li>
                      <li><a href="#team">Meet the Revolutionaries</a></li>
              				<li><a href="#support">Support</a></li>
              				<li><a href="#faq">FAQs</a></li>
                      <li><a href="#press">Press</a></li>
                      <li><a href="#contact">Contact</a></li>
                      <li><a href="#blog">Blog</a></li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
        );
    }
}

export default Header;
