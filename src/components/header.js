import React from "react"
import { Link } from "gatsby"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function Header({siteTitle, navClass}) {
  return (
  <Navbar className={navClass} fixed="top" expand="lg">
    <Navbar.Brand href="/">
      Et<span id='main-emoji' role="img" aria-label="Data-Cowboy">🤠</span>mal
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto" id="collnav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/blog">Blog</Link>
        {/* <Link className="nav-link" to="/portfolio">Portfolio</Link> */}
        {/* <Link className="nav-link" to="/scraping">Scraping</Link> */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}