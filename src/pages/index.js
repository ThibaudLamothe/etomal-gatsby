import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Accueil from "../containers/accueil"
import Project from "../containers/project"
import Skills from "../containers/skills"
import Contact from "../containers/contact"
import Perso from "../containers/perso"
import Hobbies from "../containers/hobbies"

const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
   
    <Accueil />
    <Perso />
    <Skills />
    
    <Project />
    <Hobbies />
    
    <Contact />
  </Layout>

)

export default IndexPage


