import React from "react"
import PropTypes from "prop-types"

const Bandeau = ({ title, children }) => (

  <header>
    <div>
      <h1>
          {title}
      </h1>
      {children}
    </div>
  </header>
)

Bandeau.propTypes = {
  title: PropTypes.string,
}

Bandeau.defaultProps = {
  title: ``,
}

export default Bandeau
