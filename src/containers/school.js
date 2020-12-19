import React from "react"
import Bandeau from "../components/bandeau"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Image from "react-bootstrap/Image"

function getPicturePath(imgName) {
  const images = require.context("../images/", true)
  return images("./" + imgName)
}

const School = () => (
  <Bandeau title="Studies and Certifications">
    <Container fluid>
      <br></br>
      <Row>
        <Col sm className="text-center">
          <Image
            src={getPicturePath("arts.png")}
            width="50%"
            className="mb-3 mt-3"
          />
          <br></br>
          <p>ENSAM</p>
        </Col>
        <Col sm className="text-center pl-4 pr-4">
          <Image
            src={getPicturePath("ets.png")}
            width="30%"
            className="mb-3 mt-3"
          />
          <br></br>
          <p>ETS</p>
        </Col>

        <Col sm className="text-center pl-4 pr-4">
          <Image
            src={getPicturePath("datacamp.png")}
            width="20%"
            className="mb-3 mt-3"
          />
          <br></br>
          <p>Datacamp</p>
        </Col>

        <Col sm className="text-center">
          <Image
            src={getPicturePath("stanford.png")}
            width="20%"
            className="mb-3 mt-3"
          />
          <br></br>
          <p>Stanford ML</p>
        </Col>

        <Col sm className="text-center pl-4 pr-4">
          <Image
            src={getPicturePath("deeplia.png")}
            width="20%"
            className="mb-3 mt-3"
          />
          <br></br>
          <p>Deeplearning</p>
        </Col>
      </Row>
      <br></br>
      <br></br>
    </Container>
  </Bandeau>
)
export default School
