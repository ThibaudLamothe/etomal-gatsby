import React from "react"
import { Link } from "gatsby"

import Bandeau from "../components/bandeau"
import HoverPict from "../components/hoverpict"

import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'


function getPicturePath(imgName) {
    const images = require.context('../images/', true);
    return images('./' + imgName)
  }


const Perso = () => (

    <Bandeau title="About me">
         <Container>

            <Row className="d-flex flex-column align-items-center">
                <Link to="/cv" className='pictProfile'>
                    <div> See my<br/>Curriculum <br/>Vitae</div>                 
                </Link>
            </Row>

            
            <Row className="d-flex justify-content-center mb-3">

                <HoverPict url="https://www.linkedin.com/in/thibaud-lamothe/"
                    pictBack="sn_linkedin_dark.png"
                    pictFront="sn_linkedin_dark_light.png">
                </HoverPict>
                
                <HoverPict url="https://github.com/ThibaudLamothe"
                    pictBack="sn_github_dark.png"
                    pictFront="sn_github_dark_light.png">
                </HoverPict>

                <HoverPict url="https://medium.com/@thibaud.lamothe2"
                    pictBack="sn_medium_crop_dark.png"
                    pictFront="sn_medium_crop_dark_light.png">
                </HoverPict>
            
                
                <HoverPict url="mailto:hello@etomal.com"
                    pictBack="sn_email_dark.png"
                    pictFront="sn_email_dark_light.png">
                </HoverPict>

                {/* <HoverPict url="https://github.com/ThibaudLamothe"
                    pictBack="sn_insta.png"
                    pictFront="sn_insta.png">
                </HoverPict> */}
             

            </Row>
            
            <Row className="d-flex justify-content-center">
                <p className='justified'>                  
                    I'm a Data Scientist working in a retail firm's Data Factory. On a daily basis I work with Python and Azure.
                    The key learning from my previous experience in a consulting firm is that working with Data is fun, but added value makes it all.
                    That's why I also work for OpenClassroom, a french online course plateform where I mentor students on a weekly basis.
                    Welcome to my website.
                </p>
               
                <p className='justified'>
                    By the way, in case you were wondering, Etomal is the reversed version of my family name, without the H.
                </p>
                <Image src={getPicturePath('etomal_code.png')} width='350px' className="m-0"/>

            </Row>


        </Container>
    </Bandeau>
)
export default Perso


