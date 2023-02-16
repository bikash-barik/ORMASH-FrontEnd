import { Container, Row, Col } from "react-bootstrap";
import Copyright from "./Copyright";
import "./footer.css";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        width: "100%",
        background: "linear-gradient(to top, #5f2c82, #49a09d)",
      }}
    >
      <Container className="d-flex justify-content-center">
        <Row xs={1} md={3} >
          <Col lg={6}>
            <h1 className="footer-title">ORMAS</h1>
            <p>
              Providing Marketing linkage to the Swarozgaries/ beneficiaries
              under the Self Employment scheme implemented by Govt.
            </p>
          </Col>

          <Col lg={2}>
            <h1 className="footer-title">USEFUL LINKS</h1>
            <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Activity</a>
          </Col>

          <Col lg={4}>
            <h1 className="footer-title">CONTACT</h1>
            <p>
              <i className="fa fa-home"></i> 7RH4+V6V, SIRD Campus, Unit 8,
              Bhubaneswar, Odisha 751003
            </p>
          </Col>
        </Row>
      </Container>
      {/* <div className="copyright"> */}
        {/* <Container> */}
        {/* <Copyright /> */}
        {/* </Container> */}
      {/* </div> */}
    </div>
  );
};
export default Footer;
