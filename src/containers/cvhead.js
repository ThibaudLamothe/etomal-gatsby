import React from "react"
import Bandeau from "../components/bandeau"
import HoverPict from "../components/hoverpict"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { Link } from "gatsby"

import { Button } from "react-bootstrap"

function getPicturePath(imgName) {
    const images = require.context('../images/', true);
    return images('./' + imgName)
  }

const CVHead = () => (

    <Bandeau title="Curriculum Vitae">
         <Container>
            <Row className="d-flex justify-content-center mb-3">
                    <Image src={getPicturePath('thib_short.png')} roundedCircle width="130px" className="m-0"/>
                   
            </Row>
            
            <Row className="d-flex justify-content-center mb-3">

                <HoverPict url="https://github.com/ThibaudLamothe"
                    pictBack="sn_github_dark_3.png"
                    pictFront="sn_github_dark_2.png">
                </HoverPict>

                <HoverPict url="https://medium.com/@thibaud.lamothe2"
                    pictBack="sn_medium.png"
                    pictFront="sn_medium.png">
                </HoverPict>

                <HoverPict url="https://www.linkedin.com/in/thibaud-lamothe/"
                    pictBack="sn_linkedin.png"
                    pictFront="sn_linkedin.png">
                </HoverPict>

                <HoverPict url="mail:hello@etomal.com"
                    pictBack="sn_email.png"
                    pictFront="sn_email.png">
                </HoverPict>

            </Row>
            

            <Row className="d-flex justify-content-center">
                <p className='justified'>                  
                    I'm Thibaud Lamothe, a Data Scientist working in a retail firm's Data Factory. On a daily basis I work with Python and Azure.
                    The key learning from my previous experience in a consulting firm is that working with Data is fun, but added value makes it all.
                    That's why I also work for OpenClassroom, a french online course plateform where I mentor students on a weekly basis.     
                </p>
                {/* Add something to  */}
            </Row>

            <Row className="d-flex justify-content-center mb-3">
                <Button href='/CV_Thibaud_Lamothe.pdf' >Get PDF Version</Button>
                <Button className="ml-2 mr-3" href='/CV_Thibaud_Lamothe.pdf' >
                    <span role='img' aria-label='french-cv'>🇫🇷</span>
                </Button>
            </Row>
            
            


        </Container>
    </Bandeau>
)
export default CVHead


