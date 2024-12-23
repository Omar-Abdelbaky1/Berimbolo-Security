import React from "react";
import { Col, Row } from "react-bootstrap";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import "./Footer.css";

const FooterContactInfo = () => {
  return (
    <div className="contact-info">
      <Row>
        <Col md={4} sm={12} xs={12} className="footer-col">
          <span className="icon-container">
            <HiOutlineLocationMarker size={40} color="white" />
          </span>
          <h3 className="mt-5">Address</h3>
          <p>New Minya</p>
        </Col>
        <Col md={4} sm={12} xs={12} className="footer-col">
          <span className="icon-container">
            <AiFillPhone size={40} color="white" />
          </span>
          <h3 className="mt-5">Phone</h3>
          <p>01061220807</p>
        </Col>
        <Col md={4} sm={12} xs={12}>
          <span className="icon-container">
            <AiOutlineMail size={40} color="white" />
          </span>
          <h3 className="mt-5">Email</h3>
          <p>oa456823@gmail.com</p>
        </Col>
      </Row>
    </div>
  );
};

export default FooterContactInfo;
