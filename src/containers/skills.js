import React from "react"
import Bandeau from "../components/bandeau"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Skills = () => (

    <Bandeau title="Skill Set">
        <Container>
            <Row>
                Row1
            </Row>
            <Row >
                <Col>Row2 - Col1</Col>
                <Col>Row2 - Col2</Col>
            </Row>
        </Container>
    </Bandeau>
)
export default Skills
