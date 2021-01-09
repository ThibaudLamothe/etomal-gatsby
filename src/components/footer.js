import React from "react"
import PropTypes from "prop-types"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

const Footer = ({ siteTitle }) => (
  <footer>
    <Container>
      <br></br>
      <Row>
        <Col sm className="colFooter">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-geo-alt-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>
          <br></br>

          <a href="https://goo.gl/maps/cNeYHPDtz4UF8raX7">
            92 130 Issy-les-Moulineaux
          </a>
        </Col>

        <Col sm className="colFooter">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-envelope-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
            />
          </svg>
          <br></br>
          <a href="mailto:hello@etomal.com">hello@etomal.com</a>
        </Col>
      </Row>

      <Row>
        <p className="conditions">
          {/* Blabla de pieds de page
                    <br></br>*/}
          <br />
          <a href="https://www.societe.com/societe/monsieur-thibaud-lamothe-883095150.html">
            {" "}
            883 095 150 00016
          </a>
          , Thibaud Lamothe 2020 ©
        </p>
      </Row>
    </Container>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
