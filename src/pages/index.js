import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Accueil from "../containers/accueil"
import Portfolio from "../containers/portfolio"
import Skills from "../containers/skills"
import Contact from "../containers/contact"
import About from "../containers/about"
import Hobbies from "../containers/hobbies"


import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

const IndexPage = () => (

  <Layout navClass="changeNav">

    <SEO title="Home" />
    <Helmet>
        <script src={withPrefix('navbar.js')} type="text/javascript"></script>
        <script src={withPrefix('parallax.js')} type="text/javascript"></script>
    </Helmet>

    <Accueil />
    <About />    
    <Skills />
    <Portfolio />
    <Hobbies />
    <Contact />
        
  </Layout>
)

export default IndexPage


