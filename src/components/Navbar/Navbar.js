import React from 'react';
import {
  Link, Route, Switch
} from "react-router-dom";
import './style.css';
import logo from '../../img/logo.png';
import setting from '../../img/settings.png';
import playstore from '../../img/playstore.png';
import home from '../../img/home.png'


function Navbar() {

  function openInNewTab() {
    var win = window.open('https://play.google.com/store/apps/details?id=com.noobsever.codingcontests', '_blank');
    win.focus();
  }

  return (
    <div className="Navbar">
      <div className="Header1">
        <img className="Logo" src={logo} alt="logo"/>
        <Link className="Tt" to="/">Coder's Calender</Link>
      </div>
      <div className="Header2">
        <img className="Playstore" onClick={openInNewTab} src={playstore} alt="playstore"/>
          <Switch>
            <Route exact path="/">
              <Link to="/settings" ><img className="St" src={setting} alt="settings"/></Link>
            </Route>
            <Route exact path="/settings">
              <Link to="/"><img className="St" src={home} alt="home"/></Link>
            </Route>
          </Switch>
      </div>
    </div>
  );
}

export default Navbar;
