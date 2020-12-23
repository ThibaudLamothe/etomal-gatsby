import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bandeau from "../components/bandeau"

const NotFoundPage = () => (
  <Layout>
    
    <SEO title="404: Page not found" />
    <div className='top'></div>
    <Bandeau title="Page not found" subtitle="Error 404" id='p404'>
    <p>You just hit a route that doesn't exist, let's get beck to one of those pages</p>
      <Link to='/'>Home page</Link>
      <br/>
      <Link to='/blog'>Blog page</Link>
      <br/>
      <Link to='/cv'>About page</Link>
      <br/>
      <Link to='/contact'>Contact page</Link>
      <br/>
   
    </Bandeau>
  </Layout>
)

export default NotFoundPage
