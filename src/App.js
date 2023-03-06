import "bootstrap/dist/css/bootstrap.min.css";
import ReactFlagsSelect from "react-flags-select";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import "./App.css";
import { Col, Container, Image, Row } from "react-bootstrap";
function App() {
  const [selected, setSelected] = useState("");
  const [selected1, setSelected1] = useState("");
  const [value, setValue] = useState(10);

  return (
    <Container>
      <Row style={{marginLeft:"4rem"}}>
        <Col md={5} xs={5} style={{ display: "flex", marginTop: "5rem" }}>
          <div className="singlepick">
            <ReactFlagsSelect
              countries={["US", "GB", "JP", "SA", "EG"]}
              customLabels={{
                US: "USA",
                GB: "Britin",
                JP: "Japan",
                SA: "Saudi Arabia",
                EG: "Egypt",
              }}
              placeholder="Select Language"
              selected={selected}
              onSelect={(code) => setSelected(code)}
            />
          </div>
          <div className="singlepick">
            <ReactFlagsSelect
              countries={["US", "GB", "JP", "SA", "EG"]}
              customLabels={{
                US: "USA",
                GB: "Britin",
                JP: "Japan",
                SA: "Saudi Arabia",
                EG: "Egypt",
              }}
              placeholder="Select Language"
              selected={selected1}
              onSelect={(code) => setSelected1(code)}
            />
          </div>
         
        </Col>
        <Col md={7} xs={9} style={{ display: "flex", marginTop: "5rem" }}>
        <div>
            <Form.Control
              className="numpick"
              type="number"
              placeholder="Enter Ampunt"
            />
          </div>
          <div
            style={{
              marginTop: ".5rem",
              fontSize: "18px",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          >
            =
          </div>
          <div
            style={{
              marginTop: ".5rem",
              fontSize: "18px",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          >
            {value}
          </div>
        </Col>
      </Row>
      <Row style={{marginTop:"4rem" , marginLeft:"4rem"}}>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
      </Row>
    </Container>
  );
}

export default App;
