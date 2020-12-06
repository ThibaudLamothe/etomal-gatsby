import React from "react"
import {Link} from "gatsby"
import Bandeau from "../components/bandeau"


const BlogHead = () => (

    <Bandeau title="Welcome to my blog">
        <div>All my posts are published on Medium. Here is an overview.</div>
        <div>I published a series of them about webscraping. You can reach it <Link to='/scraping'>here</Link></div>  
        <div>Happy reading</div>  
    </Bandeau>
)
export default BlogHead
