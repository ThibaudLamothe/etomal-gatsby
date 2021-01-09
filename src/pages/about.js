import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CVHead from "../containers/cvhead"
// import Work from "../containers/work"
// import School from "../containers/school"
// import Hobbies from "../containers/hobbies"
// import Contact from "../containers/contact"

const AboutPage = () => (
  <Layout>
    <br/><br/>
    <SEO title="CV | Thibaud LAMOTHE" />
    <CVHead />
    {/* <Work />
    <School />
    <Hobbies />
    <Contact />*/}
  </Layout>

)
export default AboutPage