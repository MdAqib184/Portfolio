import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJupyter,
  SiVercel,
  SiW3Schools,
  SiNotepadplusplus,
} from "react-icons/si";

function Toolstack() {
  return (
    <div className="tool-icons">
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJupyter />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiW3Schools />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNotepadplusplus />
        </Col>
      </Row>
    </div>
  );
}

export default Toolstack;
