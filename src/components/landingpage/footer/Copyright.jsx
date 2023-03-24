import { symbol } from "prop-types";
import { Row, Col, Container } from "react-bootstrap";
import "./footer.css";


const excludePaths = ['/error'];
const Copyright = ({style}) => {
  return (
    <div className={excludePaths.includes(window.location.pathname) ? 'd-none' : style}>
      <Container>
        <Row xs={1} md={3} className="d-flex justify-content-center ">
          <Col xl={4} className="d-flex align-items-center">
            <p>Copyright &copy; 2023 ORMAS, All right reserved.</p>
          </Col>

          <Col xl={7} className="justify-content-md-center align-items-center">
            <a
              class="pt-2 d-flex align-items-center mobileiconlicence"
              rel="license"
              href="https://creativecommons.org/licenses/by/4.0/"
            >
              <img
                class="w-14 h-6"
                alt="Creative Commons Licence"
                src="https://i.creativecommons.org/l/by/4.0/88x31.png"
              />
            </a>
            <p>
              <a
                rel="license"
                href="https://creativecommons.org/licenses/by/4.0/"
              >
                This work is licensed under a Creative Commons Attribution 4.0
                International License
              </a>
            </p>
          </Col>

          <Col xl={1}>
            <span
              className="text-right text-white"
              style={{ textAlign: "right" }}
            >
              Powered By{" "}
              <a
                href=""
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src=""
                  style={{ width: "48px" }}
                  height="45px"
                  alt="logo"
                />
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Copyright;
