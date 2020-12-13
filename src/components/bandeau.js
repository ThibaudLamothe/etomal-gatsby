import React from "react"
import PropTypes from "prop-types"
import Container from "react-bootstrap/esm/Container"

const Bandeau = ({ title, subtitle, dark, fluid, id, children }) => (
    <Container fluid className={dark ? "bandeau dark ": "bandeau"} id={id}>
        {/* <h1 className={dark ? "veryDarkT": "darkT"}> */}
        <h1 className={"veryDarkT"}>
            {title}
        </h1>
        {/* <h2 className={dark ? "darkT": "veryDarkT"}> */}
        <h2 className={"darkT"}>
            {subtitle}
        </h2>
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
