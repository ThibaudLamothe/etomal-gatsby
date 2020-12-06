import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Work from "../containers/work"
import Life from "../containers/life"
import School from "../containers/school"
import CVHead from "../containers/cvhead"
import Hobbies from "../containers/hobbies"


const CVPage = () => (
  <Layout>
    <SEO title="CV | Thibaud LAMOTHE" />
    <br></br>
    <CVHead />
    <Work />
    <Hobbies />
    <School />
    <Life />
  </Layout>

)
export default CVPage