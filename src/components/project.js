import React from "react"
// import { Link } from "gatsby"

import Image from "react-bootstrap/Image"
import HoverPict from "../components/hoverpict"

import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from "react"

function getPicturePath(imgName) {
  const images = require.context("../images/", true)
  return images("./medium/" + imgName)
}

const Project = ({ title, subtitle, pictPath, urls, tags, children }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  let github = <span></span>
  if (urls.github) {
    github = urls.github.map(url => (
      <HoverPict
        url={url}
        pictBack="sn_github_dark_light.png"
        pictFront="sn_github_dark.png"
      ></HoverPict>
    ))
  }

  let medium = <span></span>
  if (urls.medium) {
    medium = urls.medium.map(url => (
      <HoverPict
        url={url}
        pictBack="sn_medium_crop_dark_light.png"
        pictFront="sn_medium_crop_dark.png"
      ></HoverPict>
    ))
  }

  let deployed = <span></span>
  if (urls.deployed) {
    deployed = urls.deployed.map(url => (
      <HoverPict
        url={url}
        pictBack="sn_demo_dark_light.png"
        pictFront="sn_demo_dark.png"
      ></HoverPict>
    ))
  }

  return (
    <div className="project">
      <div data-aos="fade-up" className="project-wrap">
        <div className="project-descr">
          <div className="project-text">
            <h1 className="veryDarkT">{title}</h1>
            <div className="project-links d-flex justify-content-center mb-3">
              {deployed}
              {github}
              {medium}
            </div>
            <p>{subtitle}</p>
            <br />
            <p className="project-blabla"></p>

            <br />
          </div>

          <div className="project-tags">
            {tags.map(tag => (
              // <div>
              <small>
                <span className="articleTag">{tag}</span>
              </small>
              // </div>
            ))}
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
