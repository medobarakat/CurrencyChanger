import "bootstrap/dist/css/bootstrap.min.css";
import ReactFlagsSelect from "react-flags-select";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

import "./App.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import Chart from "./assets/components/Chart";
function App() {
  const [selected, setSelected] = useState("");
  const [fromValue, setFromValue] = useState("");

  const [selected1, setSelected1] = useState("");
  const [toValue, setToValue] = useState("");

  const [value, setValue] = useState(10);
  const [result, setResult] = useState();

  const change1 = (e) => {
    if (e === "US") {
      setFromValue("usd");
      setSelected("US");
    } else if (e === "GB") {
      setFromValue("gbp");
      setSelected("GB");
    } else if (e === "JP") {
      setFromValue("JPY");
      setSelected("JP");
    } else if (e === "SA") {
      setFromValue("sar");
      setSelected("SA");
    } else if (e === "EG") {
      setFromValue("egp");
      setSelected("EG");
    }
  };

  const change2 = (e) => {
    if (e === "US") {
      setToValue("usd");
      setSelected1("US");
    } else if (e === "GB") {
      setToValue("gbp");
      setSelected1("GB");
    } else if (e === "JP") {
      setToValue("JPY");
      setSelected1("JP");
    } else if (e === "SA") {
      setToValue("sar");
      setSelected1("SA");
    } else if (e === "EG") {
      setToValue("egp");
      setSelected1("EG");
    }
  };

  const converter = () => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "idTf5aNO1ONgML4LE1Nz8gdT03mFDUEb");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      `https://api.apilayer.com/fixer/convert?to=${toValue}&from=${fromValue}&amount=${value}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        var obj = JSON.parse(result);
        setResult(obj.result);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    converter();
  }, [value]);


  return (
    <Container>
      <Row style={{ marginLeft: "4rem" }}>
        <Col md={5} sm={5} style={{ display: "flex", marginTop: "5rem" }}>
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
              placeholder="From"
              selected={selected}
              onSelect={(code) => change1(code)}
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
              placeholder="To"
              selected={selected1}
              onSelect={(code) => change2(code)}
            />
          </div>
        </Col>
        <Col md={6} sm={9} style={{ display: "flex", marginTop: "5rem" }}>
          <div>
            <Form.Control
              className="numpick"
              type="number"
              placeholder="Enter Ampunt"
              value={value}
              onChange={(e) => setValue(e.target.value)}
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
            {result}
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "4rem", marginLeft: "4rem" }}>
        <Col>
        <Chart country={selected} />
        </Col>
        <Col>
          <Chart country={selected1} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
