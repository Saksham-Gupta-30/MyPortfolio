import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import FIRSaathi from "../../Assets/Projects/FIRSaathi.png"
import Yaatrigan from "../../Assets/Projects/Yaatrigan.png"
import JavaScript from "../../Assets/Projects/JavaScript.png"
import SplashAI from "../../Assets/Projects/SplashAI.png"
import Portfolio from "../../Assets/Projects/Portfolio.png"

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
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FIRSaathi}
              isBlog={false}
              title="FIRSaathi"
              description="An online portal for filing FIRs/complaints on a blockchain network with integrated face verification. Leveraged Ethereum and Polygon for secure storage and transparent tracking of complaints."
              ghLink="https://github.com/Saksham-Gupta-30/FIRSaathi"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={SplashAI}
              isBlog={false}
              title="Splash AI"
              description="MERN stack application to generate image using AI and showcase it to the community"
              ghLink="https://github.com/Saksham-Gupta-30/Splash"
              demoLink="https://splash-ai.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file. Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Saksham-Gupta-30/Editor.io"
              demoLink="https://editrio.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Yaatrigan}
              isBlog={false}
              title="Yaatrigan"
              description="Yaatrigan is a travel advisor/companion website which lets you search anyplace around the world and gives you details about restaurants, hotels and attractions of that place."
              ghLink="https://github.com/Saksham-Gupta-30/Yaatrigan"
              demoLink="https://yaatrigan.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Language Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in suicide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="My portfolio website developed using React framework of JavaScript and deployed on Netlify"
              ghLink="https://github.com/Saksham-Gupta-30/MyPortfolio"
              demoLink="https://sakshamgupta30.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JavaScript}
              isBlog={false}
              title="JavaScript Beginner Projects"
              description="Collection of all the beginner projects I have made using HTML, CSS, and Javascript"
              ghLink="https://github.com/Saksham-Gupta-30/Javascript-Beginner-Project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
