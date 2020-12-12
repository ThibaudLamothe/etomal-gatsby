import React from "react"
// import {Link} from "gatsby"
import Bandeau from "../components/bandeau"

import Container from "react-bootstrap/container"
import Row from "react-bootstrap/row"

const BlogHead = () => (

    <Bandeau title="Welcome to my blog">
        <Container className='align-items-center'>
            <Row>All my posts are published on Medium. Here is an overview.</Row>
            {/* <Row>I published a series of them about webscraping. You can reach it <Link to='/scraping'>here</Link></Row>   */}
            <Row>Happy reading</Row>  
        </Container>
    </Bandeau>
)
export default BlogHead
