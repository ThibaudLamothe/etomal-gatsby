import React from "react"
// import { Link } from "gatsby"

import Image from "react-bootstrap/Image"

import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from "react"

function getPicturePath(imgName) {
  const images = require.context("../images/", true)
  return images("./medium/" + imgName)
}

const Project = ({ title, subtitle, text, pictPath, urls, tags, children }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  let github = <span></span>
  if (urls.github) {
    github = (
      // <p>
        // {
          urls.github.map(url => (
          <span>
            <a href={url}>GitHub</a>
          </span>
        ))
      // }
      // </p>
    )
  }

  let medium = <span></span>
  if (urls.medium) {
    medium = (
      // <p>
      //   {
        urls.medium.map(url => (
          <span>
            <a href={url}>Medium</a>
          </span>
        ))
      //   }
      // </p>
    )
  }

  let deployed = <span></span>
  if (urls.deployed) {
    deployed = (
      // <p>
      //   {
        urls.deployed.map(url => (
          <span>
            <a href={url}>Demo</a>
          </span>
        ))
      // }
      // </p>
    )
  }

  return (
    <div className="project">
      <div data-aos="fade-up" className="project-wrap">
        <div className="project-descr">
          <div className="project-text">
            <h1 className="veryDarkT">{title}</h1>
            <br></br>
            <p>{subtitle}</p>
            <br></br>
            <p className="project-blabla">Lorem ipsum blbala</p>

            <div className="project-tags">
              {tags.map(tag => (
                <small>
                  <span className="articleTag">{tag}</span>
                </small>
              ))}
            </div>
            <div className="project-links">
              {/* <br /> */}
              {github}
              {/* <br /> */}
              {medium}
              {/* <br /> */}
              {deployed}
            </div>
          </div>
        </div>
        <div className="project-pict">
          <Image
            className="mb-0"
            rounded
            src={getPicturePath(pictPath)}
            fluid
          ></Image>
        </div>
      </div>
    </div>
  )
}

export default Project

// <Card data-aos="fade-up" className="article m-3">
// <a href={url}>
//   <Row>
//     <Col md="5" className="d-flex mb-0">
//       {/* <Card.Img src={getPicturePath(pictPath)}/> */}
//       <Image
//         className="mb-0"
//         rounded
//         src={getPicturePath(pictPath)}
//         fluid
//       ></Image>
//     </Col>
//     <Col md="7">
//       {/* <Card.Header>{title}</Card.Header> */}
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>{subtitle}</Card.Text>

//         <div>
//           {tags.map(tag => (
//             <small>
//               <span className="articleTag">{tag}</span>
//             </small>
//           ))}
//         </div>
//       </Card.Body>
//     </Col>
//   </Row>
// </a>
// </Card>
