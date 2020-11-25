import React from "react";
import { Footer } from "react-materialize";

export default function CustomFooter() {
  return (
    <Footer 
      className="example"
      copyrights="&#169; copy 2020 Copyright Text"
      links={
        <ul>
          <li>
            <a className="grey-text text-lighten-3" href="#!">
              Home
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="#!">
              Feature
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="#!">
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
          More Links
        </a>
      }
    >
      <h5 className="white-text">Footer Content</h5>
      <p className="grey-text text-lighten-4">
        You can use rows and columns here to organize your footer content.
      </p>
    </Footer>
  );
}
