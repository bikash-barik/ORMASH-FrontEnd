import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";
import { login } from "../../../Redux/actions/userActions";
import MainScreen from "../../MainScreen";
import "./LoginScreen.css";
import headerLogo from "../../../assets/images/header-logo.png";

function LoginScreen({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/hub/Dashbord");
      window.location.reload(false);
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <Container fluid  className="w-100">
        <Row className="justify-content-md-center">
          <Col className="col-sm-12 col-lg-6">
            {/* <MainScreen > */}
              <div className="loginContainer ">
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {loading && <Loading />}
                <h3>Login</h3>
                <img src="data:image/jpeg;base64,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"/>
                <Form onSubmit={submitHandler}>
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
                {/* <Row className="py-3">
                  <Col>
                    New Customer ? <Link to="/register">Register Here</Link>
                  </Col>
                </Row> */}
              </div>
            {/* </MainScreen> */}
          </Col>
          <Col className="col-sm-12 col-lg-6">
          <div className=" d-flex justify-content-center align-items-center align-item-center mt-15">
          <div className="">
            <a href="/#">
              <img
                src={headerLogo}
                class="w-25"
                alt=""
                // className='mobile-none'
                // style={{ height: '84px', width: '100%' }}
              />{" "}
            </a>
            <marquee
              behavior=""
              // className='mobile-none'
              direction=""
              // style="color: black; font-family:Brush Script MT; font-size:19px; margin-top: -13px;"
              style={{
                color: "black",
                fontSize: "25px",
                marginTop: "-13px",
                fontFamily: "Brush Script MT",
              }}
            >
              Creating Competence and Values in Rural Odisha
            </marquee>
          </div>
        </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default LoginScreen;
