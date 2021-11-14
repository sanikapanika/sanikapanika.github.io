import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import {AiOutlineDownload} from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Medior Backend Developer [NSoft]"
              date="Feb 2019 - Now"
              content={[
                "Creating betting solutions, handling millions of money transactions, creating deployment pipelines, infrastructure management. ",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="FIT Cyber Olympics [College]"
              content={[
                "Won third place on a Capture-The-Flag type penetration testing competition.",
              ]}
            />
            <Resumecontent
              title="PHP coding classes [Private/In-Person]"
              content={[
                "I held programming classes before I got my first job as a backend developer for students from nearby colleges.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="IT ENGINEER [FIT Mostar]"
              date="2016 - Present"
              content={["Percentage: 50%"]}
            />
            <Resumecontent
              title="High School [Gymnasium Kakanj]"
              date="2012 - 2016"
              content={["Percentage: 100%"]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" onClick={function() {
              let answer = window.confirm("CV is under reconstruction at the moment. Instead enjoy something cooler?");
              if (answer) window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
          }} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
