import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Medium from "../components/medium"
import Bandeau from '../components/bandeau'

import { graphql } from 'gatsby'

export default function ScrapingPage({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="Scraping" />
      <Bandeau>
        {
          data.allScrapingYaml.edges.map(({ node }, index) => (
            <Medium key={index}
              title={node.title}
              subtitle={node.subtitle}
              pictPath={node.pictPath}
              url={node.url}
              publi={node.publi}
              publiPictPath={node.publiPictPath}
              duree={node.duree}
              date={node.date}
              tags={node.tags}/>
            ))
          }  
      </Bandeau>
    </Layout>
  )
}


export const query = graphql`
  query {
    allScrapingYaml {
      edges {
        node {
          id
          subtitle
          url
          title
          publiPictPath
          publi
          pictPath
          date
          duree
          tags
        }
      }
    }
  }
`