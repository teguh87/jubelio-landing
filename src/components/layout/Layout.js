import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


import Header from '../header/Header';
import Site from '../site/Site';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import Router from '../router/Router';

import './layout.scss';


const AuthHeader = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (<Header />);
  }
  return (<div></div>);
}


const AuthFooter = ({isLoggedIn}) => {
  if (isLoggedIn) {
    return (<Footer />);
  }
  return (<div></div>);
}

const Layout = ({ children }) => (
    <Site>
      <Helmet
        title="Solusi Omnichannel Indonesia - Jubelio"
        meta={[
          { name: 'description', content: 'Teguh Santoso\'s personal wedsite, portfolio, blog, tutorials, and just cool landing page propose for hiring test' },
          { name: 'keywords', content: 'resume, blog, porfolio, tutorials, Teguh Santoso' },
        ]}
        script={[
          { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
        ]}
        link={[
          {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
        ]}
      />
      <AuthHeader isLoggedIn = {window.location.pathname !== '/login'} />
      <Content>
        <Router/>
      </Content>
      <AuthFooter isLoggedIn = {window.location.pathname !== '/login'}/>
    </Site>
);
  
  Layout.propTypes = {
    children: PropTypes.func,
  }
  
  export default Layout
  