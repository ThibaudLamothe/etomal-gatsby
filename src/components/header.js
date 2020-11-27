import React from "react"
import { Link } from "gatsby"

export default function Header({siteTitle}) {
  return (
    <header>
        This is the header from {siteTitle}
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/scraping">Scraping</Link>
    </header>
  )
}