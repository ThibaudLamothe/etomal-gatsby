import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogHead from "../containers/bloghead"
import BlogPost from "../containers/blogpost"


const BlogPage = () => (
  <Layout>
    <div className='top'></div>
    <SEO title="Blog" />
    <BlogHead/>
    <BlogPost/>
  </Layout>
)

export default BlogPage