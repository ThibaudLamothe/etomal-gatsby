import React from "react"
import Bandeau from "../components/bandeau"
// import {Link} from "gatsby"

import Row from "react-bootstrap/row"

const BlogHead = () => (
  <Bandeau title="Welcome to my blog" subtitle="What I Write">
    <br />
    <Row>All my posts are originally published on Medium</Row>
    <br />
    {/* <Row>All my posts are originally published on Medium. Here is an overview.</Row> */}
    {/* <Row>I published a series of articles about webscraping. As there are a bunch of them, I created  <Link to='/scraping'> a dedicated page</Link></Row>   */}
    {/* <br/> */}
    <Row>Enjoy the read </Row>
    <br />
    <Row>
      <span role="img" aria-label="book">
        📚
      </span>
    </Row>
  </Bandeau>
)
export default BlogHead
