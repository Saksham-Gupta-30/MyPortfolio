import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saksham Gupta </span>
            from <span className="purple"> Delhi, India.</span>
            <br />I'm a Pre-Final Year Undergraduate at KIET Group of Institutions, Ghaziabad pursuing B.Tech in Computer Science and Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football and Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching F.R.I.E.N.D.S.
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Saksham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
