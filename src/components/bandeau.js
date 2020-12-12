import React from "react"
import PropTypes from "prop-types"
import Container from "react-bootstrap/esm/Container"

const Bandeau = ({ title, dark, children }) => (
    <Container fluid className= {dark ? "bandeauDark ": "bandeauLight"}>
        <h1 className={dark ? "h1Dark ": "h1Light"}>
            {title}
        </h1>
        {children}
  </Container>
  
)

Bandeau.propTypes = {
  title: PropTypes.string,
}

Bandeau.defaultProps = {
  title: ``,
}

export default Bandeau
