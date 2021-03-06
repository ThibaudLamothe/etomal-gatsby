import React from "react"

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

const Medium = ({
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

              {duree.includes("min") ? (
                <Row className="d-flex justify-content-center align-items-center mb-4">
                  <Col md="auto">
                    <Image
                      rounded
                      src={getPicturePath(publiPictPath)}
                      width="50px"
                      className="m-0"
                    ></Image>
                  </Col>
                  <Col>
                    <small className="text-muted">{publi}</small>
                    <br></br>
                    <small className="text-muted">
                      {date} - {duree} read
                    </small>
                  </Col>
                </Row>
              ) : (
                <span></span>
              )}

              <div>
                {tags.map(
                  tag => (
                    // <a href={'etomal.com/blog/' + tag.toLowerCase()}>
                    
                      <span className="articleTag"><small>{tag}</small></span>
                    
                  )
                  // </a>
                )}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </a>
    </Card>
  )
}

export default Medium
