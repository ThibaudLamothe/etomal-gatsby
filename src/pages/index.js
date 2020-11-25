import React from "react"
import Layout from "../components/layout"

import Accueil from "../containers/accueil"
import Work from "../containers/work"
import Skills from "../containers/skills"
import Contact from "../containers/contact"

const IndexPage = () => (

  <Layout>
    <div>Hello world!</div>
    <Accueil />
    <Work />
    <Skills />
    <Contact />
  </Layout>

)

export default IndexPage


