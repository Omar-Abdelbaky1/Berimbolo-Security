import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <div>
      <Container>
        <Row className="py-5">
          <Col
            md={{ span: 6, order: "first" }}
            xs={{ span: 12, order: "last" }}
          >
            <div className="about-us-text">
              <h1 className="fs-3 fw-bold my-3">About Our Company</h1>
              <p className="fs-6">
                Berimbolo Security Services Limited is an innovative,
                professional medium sized security firm with demonstrated
                experience. We provide high caliber security personnel who have
                been extensively trained using practical techniques based on
                modern anticrime strategies. Berimbolo Security Services Limited
                has developed the best infrastructure on responding proactively
                to all the protection requirements for our customers with over
                40 years of experience. We make a difference in security through
                the highest technology, best security experts and responding on
                time to keep your safety and the well-being of your family and
                business.
              </p>
            </div>
          </Col>
          <Col className="text-center" md={6} xs={12}>
            <img
              src="https://images.unsplash.com/photo-1576807100081-6e12175343c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNlY3VyaXR5JTIwZ3VhcmR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="about-us"
              className="about-us-img"
            />
          </Col>
        </Row>
        <Row className="py-5">
          <Col md={6} xs={12} className="text-center">
            <img
              src="https://images.unsplash.com/photo-1557081999-aed1863cacb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fGFybWVkJTIwZ3VhcmRzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              alt="about-us"
              className="about-us-img "
            />
          </Col>
          <Col md={6} xs={12}>
            <div className="about-us-text">
              <h1 className="fs-3 fw-bold my-3">Our Approach</h1>
              <p className="fs-6">
                Our ‘Berimbolo Security’ are constantly provided with practical
                training systems and modern anticrime strategies to provide the
                best service in private security, military training, law
                enforcement and preventive maintenance. Berimbolo Security
                Services Limited start operations against the rise of criminal
                incidences in Trinidad and Tobago. 2014 Certification in
                CORPORATE MEMBERSHIP issued by the International Foundation for
                Protection Officers.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutHero;
