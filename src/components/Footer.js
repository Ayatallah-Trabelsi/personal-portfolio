// Footer.js

import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Ayatallah TRABELSI@2x.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-120.svg';
import navIcon3 from '../assets/img/colored-mail-icon.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ayatallah-trabelsi/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/Ayatallah-Trabelsi" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
              <a href="mailto:ayatallahtrabelsi13@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Email" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved. <br/> Made With Love</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
