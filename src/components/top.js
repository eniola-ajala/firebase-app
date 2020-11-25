import React from "react";
import 'materialize-css'
import { Navbar, Icon, NavItem } from "react-materialize";
import {NavLink} from 'react-router-dom'

export default function Top() {
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
        <NavLink to="/" className="black-text">Home</NavLink>
        <a href="#about" className="black-text"> About</a>
        <a href="#feature" className="black-text"> Feature</a>
        <a href="#testimonial" className="black-text"> Testimonial</a>
        <NavLink to="/login" className="black-text">login</NavLink>
        <NavLink to="signup"className="black-text">Signup</NavLink>
      </Navbar>
    </div>
  );
}
