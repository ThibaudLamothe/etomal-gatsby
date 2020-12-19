import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../containers/contact"
// import Map from "../containers/map"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <br />
    <div id="resize">
      <Contact />
    </div>
    {/* <Map/> */}
  </Layout>
)

export default ContactPage
