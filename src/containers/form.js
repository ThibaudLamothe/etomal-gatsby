import React from "react"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"

import FORM_URL from "../secret/env.secret.js"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state

    return (
      <form onSubmit={this.submitForm} action={FORM_URL} method="POST">
        <Row className="mt-4">
          <Col sm className="p-2">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex : Thibaud L."
                required
                name="UserName"
              />
            </Form.Group>
          </Col>
          <Col sm className="p-2">
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>E-mail adress </Form.Label>
              <Form.Control
                type="email"
                placeholder="Ex : hello@etomal.com"
                required
                name="Email"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col className="p-2">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              {/* <Form.Label>Message </Form.Label> */}
              <Form.Control
                type="text"
                as="textarea"
                rows="6"
                placeholder="Your message here 🤠"
                name="Message"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="ml-auto p-2 mt-4">
          {status === "SUCCESS" ? (
            <p className="onTheRight">Thanks!</p>
          ) : (
            <Button className="onTheRight" variant="primary" type="submit">
              Send
            </Button>
          )}
          {status === "ERROR" && (
            <p className="onTheRight">Ooops! There was an error.</p>
          )}
        </Row>
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
