import React from "react"
import Bandeau from "../components/bandeau"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/container'

const Contact = () => (
  
    <Bandeau title="Get in touch" subtitle='Contact me'>
      <Container>
        <Form>
          <Row>
            <Col sm className="p-2">          
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Ex : Thibaud L." required/>
              </Form.Group>
            </Col>
            <Col sm className="p-2">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>*E-mail adress </Form.Label>
                <Form.Control type="email" placeholder="Ex : hello@etomal.com" required />
              </Form.Group>
            </Col>
          </Row>
          
          <Row>
            <Col className="p-2">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                {/* <Form.Label>Your message</Form.Label> */}
                <Form.Control as="textarea" rows="6" placeholder="Your message here 🤠"/>
              </Form.Group>
            </Col>
          </Row>
          
          <Row className="ml-auto p-2">
          <Button variant="primary"  type="submit">
            Send
          </Button>
          </Row>
        </Form> 
      </Container>
    
    </Bandeau>
 
)

export default Contact
