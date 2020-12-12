import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHead from "../containers/bloghead"
import BlogPost from "../containers/blogpost"


const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <br></br>
    <BlogHead/>
    <BlogPost/>
  </Layout>
)

export default BlogPage