import React from "react"
import Bandeau from "../components/bandeau"

import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from "react"

function getPicturePath(imgName) {
  const images = require.context("../images/", true)
  return images("./" + imgName)
}

const Hobbies = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Bandeau title="Hobbies" subtitle="What I like" dark>
      <Row
        // data-aos="fade-up"
        className="hobbies d-flex justify-content-center mb-3 ml-5 mr-5"
      >
        <p className="text-center">
          I spend most of my time coding, discovering new technologies and
          watching tech videos, but sometimes I also like to enjoy real life
          moments. Here are some of the activities I like to practice when
          having a break. I'd be glad to exchange on those subjects with you !
        </p>
      </Row>

      <Row className="hobbies d-flex justify-content-center ml-5 mr-5">
        <Col sm className="text-center">
          <Image
            // data-aos="fade-up"
            src={getPicturePath("piano_duo.png")}
            width="25%"
            className="mb-3 mt-3"
          />
          <br></br>
          <p
          // data-aos="fade-up"
          >
            I have been practicing <b>Piano</b> for 7 years. Both classical and
            jazz music. The partition I dream about playing is the{" "}
            <a href="https://www.youtube.com/watch?v=1jKp7b1rIEo">
              {" "}
              Fantaisie Impromptue{" "}
            </a>
            by the great and fantastic Chopin.
          </p>
        </Col>

        <Col sm className="text-center">
          <Image
            // data-aos="fade-up"
            src={getPicturePath("squash_duo.png")}
            width="25%"
            className="mb-3 mt-3"
          />
          <br></br>
          <p
          // data-aos="fade-up"
          >
            I played <b>Squash</b> as a kid, then I got a subscription to
            HydroQuebec's club when I was in Montreal, and today I always enjoy
            having a game with some friends or colleagues.
          </p>
        </Col>

        <Col sm className="text-center pl-4 pr-4">
          <Image
            // data-aos="fade-up"
            src={getPicturePath("wca_duo.png")}
            width="25%"
            className="mb-3 mt-3"
          />
          <br></br>
          <p
          // data-aos="fade-up"
          >
            Speedcubing is the art of solving a <b>Rubik's Cube</b> as fast as
            possible. Using Friedrich method, I average around 17s, and my
            personal best is 9.36s. Check out my{" "}
            <a href="https://www.worldcubeassociation.org/persons/2012LAMO01">
              WCA profile
            </a>
            .
          </p>
        </Col>

        <Col sm className="text-center">
          <Image
            // data-aos="fade-up"
            src={getPicturePath("velo_duo.png")}
            width="25%"
            className="mb-3 mt-3"
          />
          <br></br>
          <p
          // data-aos="fade-up"
          >
            In 2019 I decided 3 days before my Holidays that I'd get to my
            Parents in Bordeaux, <b>cycling</b> from Paris. It took me to buy a
            bike, and to ride it for 900km and 9 days, along the{" "}
            <a href="https://eurovelo3.fr/eurovelo3/">EuroVelo 3</a>. I also did
            the Bretagne's North Coast.
          </p>
        </Col>
      </Row>
    </Bandeau>
  )
}
export default Hobbies
