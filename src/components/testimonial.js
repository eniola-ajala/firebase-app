import React from "react";
import { Row, Col } from "react-materialize";
import Card from "./card";

export default function Testimonial() {
  return (
    <div id="testimonial">
      <Row>
        <Col m={4} s={12}>
          <Card>
          <h5 className="black-text center-align"> Favour</h5>
            <p className="black-text"> My testimonies about this tech hub</p>
          </Card>
        </Col>
        <Col m={4} s={12}>
          <Card>
             <h5 className="black-text center-align"> Dammie</h5>
            <p className="black-text"> My testimonies about this tech hub</p>
          </Card>
        </Col>
        <Col m={4} s={12}>
          <Card>
             <h5 className="black-text center-align"> Ysam</h5>
            <p className="black-text"> My testimonies about this tech hub</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
