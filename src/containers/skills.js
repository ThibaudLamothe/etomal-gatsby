import React from "react"
import Bandeau from "../components/bandeau"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from "react"

function getPicturePath(imgName) {
  const images = require.context("../images/", true)
  return images("./" + imgName)
}

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Bandeau title="Skills Set" subtitle="What I know" dark id="paaraSkills">
      <Container fluid>
        <Row className="m-4"></Row>
        <Row data-aos="fade-up" className="m-5">
          <Col sm className="text-center">
            <Image
              src={getPicturePath("python_mono.png")}
              width="30%"
              className="mb-3 mt-3"
              tooltip="Python"
            />
          </Col>

          <Col sm className="text-center">
            <Image
              src={getPicturePath("azure_mono.png")}
              width="50%"
              className="mb-3 mt-3"
            />
          </Col>

          <Col sm className="text-center pl-4 pr-4">
            <Image
              src={getPicturePath("react_mono.png")}
              width="30%"
              className="mb-3 mt-3"
            />
          </Col>

          <Col sm className="text-center">
            <Image
              src={getPicturePath("docker_mono.png")}
              width="40%"
              className="mb-3 mt-3"
            />
          </Col>
        </Row>

        <Row data-aos="fade-up" className="ml-5 mr-5">
          <Col sm className="text-center">
            <span className="veryDarkT">Python</span>
          </Col>

          <Col sm className="text-center">
            <span className="veryDarkT">Azure</span>
          </Col>

          <Col sm className="text-center pl-4 pr-4">
            <span className="veryDarkT">ReactJS</span>
          </Col>

          <Col sm className="text-center">
            <span className="veryDarkT">Docker</span>
          </Col>
        </Row>

        <Row className="m-5"></Row>
      </Container>
    </Bandeau>
  )
}

export default Skills
