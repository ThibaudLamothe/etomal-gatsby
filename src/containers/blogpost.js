import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Medium from "../components/medium"
import Bandeau from '../components/bandeau'

const BlogPost = () => {
    const data = useStaticQuery(graphql`
        query {
            allMediumYaml {
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
        `)
    
    return(  
        <Bandeau dark>
            {        
                data.allMediumYaml.edges.map(({ node }, index) => (
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
    )
}

export default BlogPost