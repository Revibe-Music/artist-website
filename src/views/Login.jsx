/*!

=========================================================
* Black Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {Component} from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../redux/authentication/actions.js';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: 'test_username',   
        password: 'password',
        device_id: '',
        device_type: 'browser',
        device_name: ''
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    document.body.classList.toggle("login-page");
  }

  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }

  componentDidUpdate(prevProps)
  {
    console.log(this.props.user);
    console.log(prevProps.user);
  }

  async onSubmit(history) {
    var user = await this.props.actions.login(this.state.user, history);
    if (user.is_artist)
    {
      await history.push('/dashboard');
    }
    else
    {
      await history.push('/account/create-profile');
    }
    console.log(user);
  }

  onChange(key, value) 
  {
    var newUser = {...this.state.user}
    newUser[key] = value
    this.setState({user: newUser})
  }

  render() {

    const SubmitButton = withRouter(({ history }) => (
      <Button
        block
        className="mb-3"
        color="primary"
        href="#pablo"
        onClick={() => this.onSubmit(history)}
        size="lg"
      >
        Login
      </Button>
    ));

    return (
      <div className="content" style={{paddingTop: "50px"}}>
        <Container>
          <Col className="m-auto mr-auto" lg="4" md="6">
            <Form className="form">
              <Card className="card-login card-gray">
                <CardHeader>
                  <CardTitle style={{color: "#7248bd", display: "flex", alignItems: "center", justifyContent: "center"}} tag="h1">Login</CardTitle>
                </CardHeader>
                <CardBody>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Username" type="text" onChange={event => this.onChange( "username", event.target.value)}/>
                  </InputGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="text" onChange={event => this.onChange( "password", event.target.value)}/>
                  </InputGroup>
                </CardBody>
                <CardFooter>
                <SubmitButton />
                  <div className="pull-left">
                    <h6>
                      <Link to="/account/register">Create Account</Link>
                    </h6>
                  </div>
                </CardFooter>
              </Card>
            </Form>
          </Col>
        </Container>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.session.user
  };
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
};

export default connect(mapState, mapDispatch)(Login);
