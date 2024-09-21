import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";  // Import Button from react-bootstrap
import { ImPointRight } from "react-icons/im";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Aqib_Resume.pdf"; // Ensure the path to your resume is correct

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Md Aqib </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />
            I am currently a B.tech final-year student at Jadavpur University.
            <br />
            I am an enthusiastic programmer in my daily life.
            I love to learn and explore new technologies and am passionate about problem-solving.
            I love almost all the stacks of web application development and love to make the web more open to the world.
            I am available for any kind of job opportunity that suits my skills and interests.
            <br />
            <div style={{ marginTop: "20px" }}>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
                download="Aqib_Resume.pdf"
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </div>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aqib</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
