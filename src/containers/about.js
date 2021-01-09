import React from "react"
import { Link } from "gatsby"
import HoverPict from "../components/hoverpict"

import Bandeau from "../components/bandeau"
import Row from "react-bootstrap/Row"

import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from "react"

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Bandeau title="About me" subtitle="Who I am">
      <Row
        // data-aos="fade-up"
        className="d-flex flex-column align-items-center m-3"
      >
        <Link to="/about" className="pictProfile">
          <div>
            {" "}
            See my
            <br />
            Curriculum <br />
            Vitae
          </div>
        </Link>
      </Row>

      {/* <Row data-aos="fade-up" className="d-flex justify-content-center m-3"> */}
      <Row className="d-flex justify-content-center m-3">
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
      </Row>

      <Row
        // data-aos="fade-up"
        className="d-flex justify-content-center mt-3 mb-0"
      >
        <p className="text-center" id="presentationText">
          <span>
            Hi {" "}
            <span role="img" aria-label="hi">
              👋
            </span>
          </span>
          <br />
          <br />
          I'm a Data Scientist working in a retail firm's Data Factory. During
          the day I work with Python and Azure about Machine Learning and Deep
          Learning. When I get home I enjoy practicing other technologies such
          as JavaScript and React on diverse kind of projects, such as this website {" "}
          <span role="img" aria-label="computer-guy">
            🧑‍💻
          </span>
          <br />
          <br />I truly believe that data is revolutionning our lives and the
          world we live in. This is the reason why I keep learning and
          certifying on diverse subjects, but also mentor Data Science students
          on a weekly basis {" "}
          <span role="img" aria-label="teacher-guy">
            👨‍🏫
          </span>
        </p>
      </Row>

      <Row
        data-aos="fade-up"
        className="d-flex justify-content-center mt-3 mb-0"
      >
        <p className="text-center">
          Welcome to my website {" "}
          <span role="img" aria-label="earth">
            🌎
          </span>
        </p>

        {/*
        <p className='justified'>
            By the way, in case you were wondering, Etomal is the reversed version of my family name, without the H.
        </p>
        <Image src={getPicturePath('etomal_code.png')} width='350px' className="m-0"/>
        */}
      </Row>
    </Bandeau>
  )
}
export default About
