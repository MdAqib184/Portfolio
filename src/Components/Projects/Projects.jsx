import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Dream from "../../Assets/Projects/Der.png";
import Face from "../../Assets/Projects/Fac.png";
import Weather from "../../Assets/Projects/Weather.png";
import Algo from "../../Assets/Projects/AV.png";
import tic from "../../Assets/Projects/tic.png";
import Expense from "../../Assets/Projects/ET.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Algo}
              isBlog={false}
              title="Algorithm-Visualizer"
              description="Engineered an interactive application with React.js, Bootstrap, and React Router to visualize complex algorithms, suchas sorting, graph algorithms, and the N-Queen problem; enhanced understanding through real-time visual feedback andanimations."
              ghLink="https://github.com/MdAqib184/Algorithm-Visualizer"
              demoLink="https://algorithm-visualizer-coral-beta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Expense}
              isBlog={false}
              title="Expense_Tracker"
              description="My personal Expense Tracker App which I build with Next.js and Tailwind Css and using PostgreSQL for storing darabase which allowing users to record, categorize, and visualize budgets via interactive charts and helps to maintain the expenses."
              ghLink="https://github.com/MdAqib184/Expense-tracker"
              demoLink="https://expense-tracker-beta-liart.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather_Checker"
              description="My personal weather prediction application which I developed using HTML, CSS, and JavaScript, leveraging the OpenWeather API forreal-time weather updates; designed an efficient interface for timely weather information."
              ghLink="https://github.com/MdAqib184/Weather_Checker"
              demoLink="https://mdaqib184.github.io/Weather_Checker/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dream}
              isBlog={false}
              title="Real_State_Project"
              description="Developed a responsive real estate platform using React.js, SCSS, and MongoDB Atlas. The platform features property listings, dynamic filtering, sorting, and user authentication. MongoDB Atlas securely handles property and user data, while SCSS ensures a clean, responsive design for seamless user interaction."
              ghLink="https://github.com/MdAqib184/Real_State_Project"
              demoLink="https://real-state-project-bbjr60891-md-aqibs-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tic}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="I have developed a classic Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game features dynamic player interaction, a simple yet responsive design, and real-time win/draw detection logic. It provides an engaging user experience with smooth gameplay and instant result display."
              ghLink="https://github.com/MdAqib184/TicTacToe"
              demoLink="https://tic-tac-toe-red-zeta.vercel.app/"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Face}
              isBlog={true}
              title="Face Recognition System"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://towardsdatascience.com/how-to-build-a-face-detection-and-recognition-system-f5c2cdfbeb8c"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
