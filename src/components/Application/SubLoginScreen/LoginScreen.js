import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";
import { login } from "../../../Redux/actions/subuserActions";
import MainScreen from "../../MainScreen";
import "./LoginScreen.css";
import headerLogo from "../../../assets/images/header-logo.png";

function LoginScreen({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.subuserLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/user/Dashbord");
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
                {/* <img width="20px" src="https://images.squarespace-cdn.com/content/v1/5e69125d8547fa37422b094d/1615386460841-1FL5027OROZIH37M4BTF/email-logo.png"/> */}
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
                src="https://email.uplers.com/blog/wp-content/uploads/2022/07/1-Signatures-blog.gif"
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
