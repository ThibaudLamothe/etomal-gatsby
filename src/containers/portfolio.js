import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Bandeau from "../components/bandeau"
import Project from "../components/project"

export default function Portfolio() {
  const data = useStaticQuery(
    graphql`
      query {
        allPortfolioYaml {
          edges {
            node {
              id
              pictPath
              title
              subtitle
              tags
              urls {
                github
                medium
                deployed
              }
            }
          }
        }
      }
    `
  )

  return (
    <Bandeau title="Portfolio" subtitle="What I do">
      {data.allPortfolioYaml.edges.map(({ node }, index) => (
        <Project
          key={index}
          title={node.title}
          subtitle={node.subtitle}
          pictPath={node.pictPath}
          urls={node.urls}
          tags={node.tags}
        />
      ))}
    </Bandeau>
  )
}
