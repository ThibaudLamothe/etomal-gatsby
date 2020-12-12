import React from "react"
import Bandeau from "../components/bandeau"
// import {Link} from "gatsby"

import Row from "react-bootstrap/row"

const BlogHead = () => (
    <Bandeau title="Welcome to my blog">
        <Row>All my posts are published on Medium. Here is an overview.</Row>
        {/* <Row>I published a series of them about webscraping. You can reach it <Link to='/scraping'>here</Link></Row>   */}
        <Row>Happy reading</Row>  
        
    </Bandeau>
)
export default BlogHead
