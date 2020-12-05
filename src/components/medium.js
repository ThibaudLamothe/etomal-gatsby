import React from "react"

import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/button'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'

function getPicturePath(imgName) {
    const images = require.context('../images/', true);
    return images('./medium/' + imgName)
  }


const Medium = ({ title, subtitle, pictPath, url, date, publi, publiPictPath, duree, tags, children }) => (

    <Card className="m-3 article" >
        <a href={url} className='articleLink'>
        <Row>
            <Col md="4" className='d-flex mb-0'>
                {/* <Card.Img src={getPicturePath(pictPath)}/> */}
                <Image className='mb-0' rounded src={getPicturePath(pictPath)} fluid></Image>
            </Col>
            <Col md="8">
                {/* <Card.Header>{title}</Card.Header> */}
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {subtitle}
                    </Card.Text>

                    <Card.Text>
                        <Row className="d-flex justify-content-center align-items-center">
                            <Col md='auto'>
                                <Image  rounded src={getPicturePath(publiPictPath)} width="50px"></Image>
                            </Col>
                            <Col>
                                <small className="text-muted">{publi}</small>
                                <br></br>
                                <small className="text-muted">{date} - {duree} read</small>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Col>
        </Row>
        </a>
    </Card>


)

export default Medium