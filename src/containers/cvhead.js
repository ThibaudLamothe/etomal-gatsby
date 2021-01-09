import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import HoverPict from "../components/hoverpict"
import Bandeau from "../components/bandeau"
import { Button } from "react-bootstrap"
// import {Spring} from 'react-spring/renderprops'
// import {useTransition, animated} from 'react-spring'
// function getPicturePath(imgName) {
//   const images = require.context("../images/", true)
//   return images("./" + imgName)
// }

const CVHead = () => (
  <Container fluid>
    <Row>
      <Col sm className="p-0">
        <Bandeau title="About" subtitle="Discover my career" id="cvhead">
          <div id="cvSubHead">
            <Row className="d-flex justify-content-center">
              <p className="text-center cvText">
                I'm Thibaud, a Data Scientist working in a retail firm's Data
                Factory. On a daily basis I work with Python and Azure on
                Machine Learning and Deep Learning Projects {" "}
                <span role="img" aria-label="robot">
                  🤖
                </span>
              </p>
            </Row>
            <Row className="d-flex justify-content-center">
              <p className="text-center cvText">
                Previously I've been working for a consulting firm for a large
                panel of clients such as in Transport Industry, Metal Indudstry
                or Public Sector. The key learning from this experience is that
                added value makes it all, and you get it right from the
                soon-to-be users of your applications. That's why I decided to
                join a team which works with end-users and has data sience industrialisation
                processes (MLOps) at the heart of its activities {" "}
                <span role="img" aria-label="man">
                  👨‍💼
                </span>
              </p>
            </Row>
            <Row className="d-flex justify-content-center">
              <p className="text-center cvText">
                During my free-(coding)-time, on personal projects I also enjoy
                practicing my front-end skills to deserve my full-stack Data
                Scientist status {" "}
                <span role="img" aria-label="computer-man">
                  🧑‍💻
                </span>
              </p>
            </Row>
            <Row className="d-flex justify-content-center">
              <p className="text-center cvText">
                I truly believe that data is revolutionning our lives and the
                world we live in. This is the reason why I keep learning and
                certifying on diverse subjects, but also mentor Data Science
                students on a weekly basis, for OpenClassroom a french online
                course plateform {" "}
                <span role="img" aria-label="teacher-man">
                  👨‍🏫
                </span>
              </p>

              {/* <p className='justified'>
                    By the way, in case you were wondering, Etomal is the reversed version of my family name, without the H.
                </p>
                <Image src={getPicturePath('etomal_code.png')} width='350px' className="m-0"/> */}
            </Row>

            <Row
              className="d-flex justify-content-center mt-3 mb-5"
              id="cvIcons"
            >
              <Col sm md lg={6} className="d-flex justify-content-center mb-4">
                <Button href="/CV_Thibaud_Lamothe.pdf" className="button">
                  {/* Get PDF Version */}
                  Curriculum Vitae PDF
                </Button>
                {/* <Button className="ml-2 mr-3" href="/CV_Thibaud_Lamothe.pdf">
              <span role="img" aria-label="french-cv">
                🇫🇷
              </span>
            </Button> */}
              </Col>
              <Col sm md lg={6} className="d-flex justify-content-center mb-4">
                {/* <Row className="d-flex justify-content-center mb-2"> */}
                <HoverPict
                  url="https://www.linkedin.com/in/thibaud-lamothe/"
                  pictBack="sn_linkedin_dark.png"
                  pictFront="sn_linkedin_dark_light.png"
                ></HoverPict>

                <HoverPict
                  url="https://github.com/ThibaudLamothe"
                  pictBack="sn_github_dark.png"
                  pictFront="sn_github_dark_light.png"
                ></HoverPict>

                <HoverPict
                  url="https://medium.com/@thibaud.lamothe2"
                  pictBack="sn_medium_crop_dark.png"
                  pictFront="sn_medium_crop_dark_light.png"
                ></HoverPict>

                {/* <HoverPict
              url="mailto:hello@etomal.com"
              pictBack="sn_email_dark.png"
              pictFront="sn_email_dark_light.png"
            ></HoverPict> */}
              </Col>
            </Row>

            {/* <Row className="d-flex justify-content-center mb-3">
            <Button href="/contact" className="button">
              Contact me
            </Button>
          </Row> */}
          </div>
        </Bandeau>
      </Col>

      <Col sm className="p-0 d-flex align-items-center" id="pictThib"></Col>
    </Row>
  </Container>
)

export default CVHead
