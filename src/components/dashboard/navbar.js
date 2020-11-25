import React from "react";
import 'materialize-css'
import { Navbar, Icon, NavItem, style} from "react-materialize";
import {NavLink} from 'react-router-dom'

export default function Top({handleLogout, displayName}) {
  return (
    <div>
      <Navbar
        alignLinks="right"
        brand={
          <a className="brand-logo black-text" href="/">
            EnnieTech
          </a>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      fixed={true}
        className="white z-depth-0"
      >
        <NavLink to="/" className="black-text" style={{backgroundColor: "transparent"}}>Welcome {displayName} </NavLink>
        <NavLink to="/profile" className="black-text" > Profile </NavLink>
        <NavLink to="/" onClick={handleLogout} className="black-text">log out</NavLink>
        {/* <NavLink to="signup"className="black-text">Signup</NavLink> */}
      </Navbar>
    </div>
  );
}
