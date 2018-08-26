import React from 'react'
import { Link } from 'react-scroll'
import './header.scss';
import DarkLogo from './logo_dark.png';


class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isActive: false,
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  handleSetActive (to) {
    console.log(to);
  } 

  render() {
    return (
      <nav id="mainNavbar" className={["navbar", "sticky-top"].join(' ')}
          aria-label="main navigation"
          >
          <div className="container">
            <div className="navbar-brand">  
            <a className="navbar-item">
              <img
                src= {DarkLogo}
                width="80px" height="100px" alt="" />
            </a>
            <button className="button navbar-burger" onClick={this.toggleNav}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-end">
              <Link className="navbar-item" activeClass="active" to="feature" spy={true} smooth={ true } offset={1} duration={300} onSetActive={this.handleSetActive}>
                Feature
              </Link>
              <Link className="navbar-item" activeClass="active" to="screenshoot" spy={true} smooth={ true } offset={1} duration={300}>
                Screenshoot
              </Link>
              <Link className="navbar-item" activeClass="active" to="pricing" spy={true} smooth={ true } offset={1} duration={300}>
                Harga
              </Link>
              <Link className="navbar-item" activeClass="active" to="testimonial" spy={true} smooth={ true } offset={1} duration={300}>
                Testimonial
              </Link>
              <Link className="navbar-item" activeClass="active" to="promotial" spy={true} smooth={ true } offset={1} duration={300}>
                Liputan
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" >
                  More
                </a>
                <div className="navbar-dropdown">
                  <a className="navbar-item">
                    Overview
                  </a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">
                    Blogs
                  </a>
                  <a className="navbar-item" >
                   News
                  </a>
                  <a className="navbar-item" >
                   Career 
                  </a>
                </div>
              </div>
              <a className="navbar-item" href="/login">
                <span className="icon" style={{ marginRight: 5 }}>
                  <i className="fas fa-sign-in-alt"></i>
                </span>
                Sign In
              </a>
            </div>
          </div>
          </div>
      </nav>
    )
  }
}

export default Header


