import React from "react"
// import { Link } from "gatsby"

import Card from "react-bootstrap/card"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/col"

import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from "react"

function getPicturePath(imgName) {
  const images = require.context("../images/", true)
  return images("./medium/" + imgName)
}

const Project = ({
  title,
  subtitle,
  pictPath,
  url,
  date,
  publi,
  publiPictPath,
  duree,
  tags,
  children,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Card data-aos="fade-up" className="article m-3">
      <a href={url}>
        <Row>
          <Col md="5" className="d-flex mb-0">
            {/* <Card.Img src={getPicturePath(pictPath)}/> */}
            <Image
              className="mb-0"
              rounded
              src={getPicturePath(pictPath)}
              fluid
            ></Image>
          </Col>
          <Col md="7">
            {/* <Card.Header>{title}</Card.Header> */}
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{subtitle}</Card.Text>

              <div>
                {tags.map(tag => (
                  <small>
                    <span className="articleTag">{tag}</span>
                  </small>
                ))}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </a>
    </Card>
  )
}

export default Project
