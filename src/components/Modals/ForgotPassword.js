import React, { Component } from 'react';
import PropTypes from "prop-types";

// reactstrap components
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Form,
  FormGroup,
  Input,
  Col
} from "reactstrap";

import RevibeAPI from 'api/revibe.js'

const revibe = new RevibeAPI()

class ForgotPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      usernameState: "",
      usernameError: "",
      submitButtonClicked: false,
      error: null,
      errorMsg: "",
      success: false,
      successMsg: ""
    }

    this.closeModal = this.closeModal.bind(this)
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  closeModal() {
    this.props.toggle()
  }

  onChange(field, value) {
    var newState = { ...this.state }

    newState[field] = value

    this.setState(newState)
  }

  async submitForm() {
    var validField = true

    if(this.state.username === "") {
      validField = false
      this.setState({
        ...this.state,
        usernameState: "has-danger",
        usernameError: "Username is a required field."
      });
    }

    if(validField) {
      if(this.state.usernameError === "") {
        this.setState({ ...this.state, submitButtonClicked: true })
        
        try{
          var res = await revibe.requestPasswordReset(this.state.username)

          if(res.status >= 400) {
            this.setState({ ...this.state, error: res, errorMsg: "Account not found!" })
          } else if(res.status == 200) {
            this.setState({ ...this.state, success: true, successMsg: "Success!" })
          }
        } catch (e) {
          this.setState({ ...this.state, error: e })
        }
      }
    }
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        modalClassName="modal-grey"
      >
        <ModalHeader cssModule={{ 'modal-title': 'w-100 text-center' }}>
          <h2>Forgot Password?</h2>
        </ModalHeader>
        <ModalBody>
          <p className="w-100 text-center">Enter your username below and we will email you a temporary password.</p>
          <Row className="d-flex">
            <Form className="w-100">
              <Col md="8" sm="12" className="ml-auto mr-auto">
                <FormGroup className={`has-label ${this.state.usernameState}`}>
                  <label>Username *</label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    onChange={e => this.onChange("username", e.target.value)}
                  />
                  {this.state.usernameState === "has-danger" ? (
                    <label className="error">
                      {this.state.usernameError}
                    </label>
                  ) : null}
                  {this.state.error ? (
                    <label className="error">
                      {this.state.errorMsg ? this.state.errorMsg : "An error has occurred!"}
                    </label>
                  ) : null}
                  {this.state.success ? (
                    <label className="success">
                      {this.state.successMsg}
                    </label>
                  ) : null}
                </FormGroup>
              </Col>
            </Form>
            <div className="w-100 d-flex">
              <Button
                onClick={e => this.submitForm()}
                color="primary"
                className="ml-auto mr-auto btn-round btn-primary"
                disabled={this.state.submitButtonClicked}
                size="md"
              >
                Reset Password
              </Button>
            </div>
            <div className="w-100 d-flex">
              <Button
                onClick={e => this.closeModal()}
                color="primary"
                className="ml-auto mr-auto btn-primary btn-simple"
                size="sm"
              >
                Close
              </Button>
            </div>
          </Row>
        </ModalBody>
      </Modal>
    )
  }
}

ForgotPassword.propTypes = {
  show: PropTypes.bool,
  toggle: PropTypes.func.isRequired
};

ForgotPassword.defaultProps = {
  show: false,
};

export default ForgotPassword