import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiC, SiOracle, SiFirebase, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava } from "react-icons/di";

function Techstack() {
  return (
    <div className="tech-stack-container">
      <div className="tech-stack-inner">
        <Row className="tech-stack-row">
          <Col xs={4} md={2} className="tech-icons">
            <SiC />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <CgCPlusPlus />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiJava />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiPython />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
          </Col>
        </Row>
        <Row className="tech-stack-row">
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiNextdotjs />
          </Col>
        </Row>
        <Row className="tech-stack-row">
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiFirebase />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPostgresql />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiOracle />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Techstack;
