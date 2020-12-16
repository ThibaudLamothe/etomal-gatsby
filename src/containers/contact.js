import React from "react"
import Bandeau from "../components/bandeau"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/container'
import MyForm from '../containers/form'
const Contact = () => (
  
    <Bandeau title="Get in touch" subtitle='Contact me' id="contactBandeau">
      <Container>
        <MyForm></MyForm>
     
      </Container>
    
    </Bandeau>
 
)

export default Contact
