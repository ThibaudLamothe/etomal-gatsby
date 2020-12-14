import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
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
      )

    return(
        <Bandeau title="Portfolio" subtitle="What I do">  
            {
                data.allPortfolioYaml.edges.map(({ node }, index) => (
                    <Project key={index}
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
    )
}

