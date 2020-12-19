import React from "react"
import { Link } from "gatsby"

import Bandeau from "../components/bandeau"
import HoverPict from "../components/hoverpict"

import Row from 'react-bootstrap/Row'

import "aos/dist/aos.css"
import Aos from "aos"
import {useEffect} from "react"
// import Image from 'react-bootstrap/Image'
// import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'


// function getPicturePath(imgName) {
//     const images = require.context('../images/', true);
//     return images('./' + imgName)
//   }


const About = () => {
    useEffect(() => {
      Aos.init({duration: 1000 });
    }, []);
    return (

    <Bandeau
        title="About me"
        subtitle="Who I am"
        >

            <Row data-aos='fade-up' className="d-flex flex-column align-items-center m-3">
                <Link to="/cv" className='pictProfile'>
                    <div> See my<br/>Curriculum <br/>Vitae</div>                 
                </Link>
            </Row>

            
            <Row data-aos='fade-up' className="d-flex justify-content-center m-3">

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
            
                
                {/* <HoverPict url="mailto:hello@etomal.com"
                    pictBack="sn_email_dark.png"
                    pictFront="sn_email_dark_light.png">
                </HoverPict> */}

                {/* <HoverPict url="https://github.com/ThibaudLamothe"
                    pictBack="sn_insta.png"
                    pictFront="sn_insta.png">
                </HoverPict> */}
             

            </Row>
            {/* <Row className="d-flex justify-content-center mb-3 mt-0">

                  <HoverPict url="mailto:hello@etomal.com"
                    pictBack="sn_email_dark.png"
                    pictFront="sn_email_dark_light.png">
                </HoverPict>          
            </Row> */}


            <Row data-aos='fade-up' className="d-flex justify-content-center mt-3 mb-0">
                <p className='text-center' id='presentationText'>               
                
                    <span>Hi <span>👋</span>   </span>
                    <br/><br/>
                    I'm a Data Scientist working in a retail firm's Data Factory.
                    During the day I work with Python and Azure about Machine Learning and Deep Learning.
                    When I get home I enjoy practicing other technologies such as JavaScript and React on diverse kind of projects 🧑‍💻
                    <br/><br/>
                    I truly believe that data is revolutionning our lives and the world we live in.
                    This is the reason why I keep learning and certifying on diverse subjects, but also mentor Data Science students on a weekly basis 👨‍🏫
                   
                </p>
               
                {/* <p className='justified'>
                    By the way, in case you were wondering, Etomal is the reversed version of my family name, without the H.
                </p>
                <Image src={getPicturePath('etomal_code.png')} width='350px' className="m-0"/> */}

            </Row>

            <Row data-aos='fade-up' className="d-flex justify-content-center mt-3 mb-0">
                <p className='text-center' >               
            
                    
                    Welcome to my website 🌎
                </p>
               
                {/* <p className='justified'>
                    By the way, in case you were wondering, Etomal is the reversed version of my family name, without the H.
                </p>
                <Image src={getPicturePath('etomal_code.png')} width='350px' className="m-0"/> */}

            </Row>
         
    </Bandeau>
);};
export default About

















