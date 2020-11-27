import React from "react"
import PropTypes from "prop-types"

const Bandeau = ({ title, dark, children }) => (

    <div className={dark ? "bandeauDark ": "bandeauLight"}>
      <h1 className={dark ? "h1Dark ": "h1Light"}>
          {title}
      </h1>
      {children}
    </div>
  
)

Bandeau.propTypes = {
  title: PropTypes.string,
}

Bandeau.defaultProps = {
  title: ``,
}

export default Bandeau
