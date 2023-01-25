import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col,Container} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";
import { login } from "../../../Redux/actions/userActions";
import MainScreen from "../../MainScreen";
import "./LoginScreen.css";

function LoginScreen({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/hub/Dashbord");
      // window.location.reload(false);
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
   <div>
    <Container className="justify-content-md-center">
      <Row className="justify-content-md-center">
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    <div>

    </div>
<MainScreen title="LOGIN">
<div className="loginContainer ">
  {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
  {loading && <Loading />}
  <Form onSubmit={submitHandler} >
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        value={email}
        className="p-2"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </Form.Group>

    <Form.Group controlId="formBasicPassword" className="mb-2">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        value={password}
        className="p-2"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </Form.Group>

    <Button variant="primary" type="submit" className="p-2">
      Submit
    </Button>
  </Form>
  <Row className="py-3">
    <Col>
      New Customer ? <Link to="/register">Register Here</Link>
    </Col>
  </Row>
</div>
</MainScreen>
   </div>


  );
}

export default LoginScreen;
