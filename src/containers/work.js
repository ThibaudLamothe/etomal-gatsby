import React from "react"
import Bandeau from "../components/bandeau"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

function getPicturePath(imgName) {
  const images = require.context("../images/", true)
  return images("./" + imgName)
}

const Work = () => (
  <Bandeau title="Professionnal Experiences" dark>
    <Row className="p-2 mr-5 ml-5 mt-2 veryDarkT justify-content-center">
      <h2>Data Scientist</h2>
    </Row>
    <Row className="p-3 mr-5 ml-5 mb-1">
      <Col sm className="text-center">
        <Image
          src={getPicturePath("bosch_1.png")}
          width="40%"
          className="mb-3 mt-3"
        />
        <br></br>
        {/* <p>
            Bosch Engineering
        </p> */}
      </Col>
      <Col sm className="text-center pl-4 pr-4">
        <Image
          src={getPicturePath("invent.png")}
          width="60%"
          className="mb-3 mt-3"
        />
        <br></br>
        {/* <p>
            Capgemini Invent
        </p> */}
      </Col>
      <Col sm className="text-center">
        <Image
          src={getPicturePath("mousquetaire.png")}
          width="25%"
          className="mb-3 mt-3"
        />
        <br></br>
        {/* <p>
            Intermarché
        </p> */}
      </Col>
    </Row>

    <Row className="p-2 mr-5 ml-5 mt-2 veryDarkT justify-content-center">
      <h2>Teacher</h2>
    </Row>
    <Row className="p-3 mr-5 ml-5 mb-2">
      <Col sm className="text-center">
        <Image
          src={getPicturePath("ets.png")}
          width="30%"
          className="mb-3 mt-3"
        />
        <br></br>
        {/* <p>
            ETS
        </p> */}
      </Col>

      <Col sm className="text-center pl-4 pr-4">
        <Image
          src={getPicturePath("polytechnique.png")}
          width="15%"
          className="mb-3 mt-3"
        />
        <br></br>
        {/* <p>
            Ecole Polytechnique
        </p> */}
      </Col>

      <Col sm className="text-center">
        <Image
          src={getPicturePath("oc.png")}
          width="20%"
          className="mb-3 mt-3"
        />
        <br></br>
        {/* <p>
            OpenClassrooms
        </p> */}
      </Col>
    </Row>
  </Bandeau>
)
export default Work
