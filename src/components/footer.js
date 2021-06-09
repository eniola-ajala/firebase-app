import React from "react";
import { Footer } from "react-materialize";

export default function CustomFooter() {
  return (
    <Footer 
      className="example grey"
      copyrights="&#169; copy 2020 "
      links={
        <ul>
          <li>
            <a className="grey-text text-lighten-3" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="#feature">
              Feature
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="#signup">
              Signup
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="#!">
              Call Us
            </a>
          </li>
        </ul>
      }
      moreLinks={
        <a className="grey-text text-lighten-4 right" href="#!">
      
        </a>
      }
    >
      <h5 className="white-text">Ennie Tech</h5>
      <p className="grey-text text-lighten-4">
        Our hub is your dream place to write codes.
      </p>
    </Footer>
  );
}
