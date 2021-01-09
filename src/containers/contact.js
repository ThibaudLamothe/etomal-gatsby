import React from "react"
import Bandeau from "../components/bandeau"

import Container from "react-bootstrap/container"
import MyForm from "../containers/form"

import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from "react"

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Bandeau title="Get in touch" subtitle="Contact me" id="contactBandeau">
      {/* <Container data-aos="fade-up"> */}
      <Container>
        <MyForm></MyForm>
      </Container>
    </Bandeau>
  )
}

export default Contact
