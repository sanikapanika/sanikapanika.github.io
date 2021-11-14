import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillMail
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I will code for food. Fell in love with programming when I was 12. Eager to learn and develop my skillset ever since.
              <br />
              <br />Heavily <i> <b className="purple"> Java(Spring) </b> </i> and <i> <b className="purple"> PHP(Symfony)</b> </i> oriented at the moment. Learning <i> <b className="purple"> Elixir </b> </i> and <i> <b className="purple"> Phoenix </b> </i> framework.
              <br />
              <br />
              My field of interest is building fast and reliable &nbsp;
              <i>
                <b className="purple">Web APIs</b>.
              </i>
              <br />
              <br />
              I like doing <b className="purple">DevOps</b> work too. Mostly using <b className="purple">Kubernetes</b> and <b className="purple">Jenkins</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sanikapanika"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sanikapanika.ex/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="mailto:sanin.alagic@gmail.com"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
