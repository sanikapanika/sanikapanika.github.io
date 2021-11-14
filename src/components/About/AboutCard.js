import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, my name is <span className="purple">Sanin Alagic </span>
            from <span className="purple"> Bosnia and Herzegovina.</span>
            <br />I am a mid backend developer trying to finish college since 2016, but well paid software dev jobs keep distracting me.
            <br />
            <br />
            Apart from coding, some other activities that I love to do are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Volleyball
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "It always seems impossible until it's done."{" "}
          </p>
          <footer className="blockquote-footer">Nelson Mandela</footer>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "We are a week behind schedule."{" "}
          </p>
          <footer className="blockquote-footer">Project Manager</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
