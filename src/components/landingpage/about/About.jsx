import { Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { listdocuments } from "../../../Redux/actions/Manage Application/documentsActions";
import { listTenders } from "../../../Redux/actions/Manage Application/tendersActions";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./About.css";
import axios from "axios";
import { APIURL } from "../../../Redux/APIURL";
const About = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const history = useHistory();
  const documentList = useSelector((state) => state.documentList);
  const tenderList = useSelector((state) => state.tenderList);
  const { documents } = documentList;
  const { tenders } = tenderList;
  // console.log("tender" + tenders);
  console.log("d" + documents);

  useEffect(() => {
    dispatch(listdocuments());
  }, [dispatch]);

  const getData = async () => {
    try {
      const response = await axios.get(`${APIURL}/api/tenders/`)
      // console.log(response);
      setData(response.data.tenders);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {

    getData()

  },[])
  return (
    <div className="about">
      {/* <Row xs={1} md={3} className="g-4">
        <Col>
          <Card
            style={{
              background: "linear-gradient(to top, #5f2c82, #49a09d)",
            }}
          >
            <Card.Body className="">
              <Card.Title className="text-warning">Mission/Vission</Card.Title>

              <Card.Text className="heightcard">
                <ListGroup className="list-group-flush ">
                  {documents &&
                    documents.reverse().map((document, i) => (
                      <ListGroup.Item
                        key={document._id}
                        className="fs-16 text-white"
                        style={{
                          backgroundColor: "transparent",
                        }}
                      >
                        {document.headline}
                        <br />
                        <a className="fs-12 text-white">
                          {document.description}
                        </a>
                      </ListGroup.Item>
                    ))}
                </ListGroup>
              </Card.Text>

              <Button primary className="px-4 py-1 mt-4">
                Read more
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              background: "linear-gradient(to top, #5f2c82, #49a09d)",
            }}
          >
            <Card.Body>
              <Card.Title className="text-warning">
                Tender/Advertisement
              </Card.Title>
              <Card.Text className="heightcard">
                <ListGroup className="list-group-flush ">
                  {data.length > 0 &&
                    data.reverse().map((item, i) => (
                      <ListGroup.Item
                        key={item._id}
                        className="fs-16 text-white"
                        style={{
                          backgroundColor: "transparent",
                        }}
                      >
                        {item.tender_headline}
                        <br />
                        <a className="fs-12 text-white">{item.description}</a>
                      </ListGroup.Item>
                    ))}
                </ListGroup>
              </Card.Text>
              <Button primary className="px-4 py-1 mt-4">
                Read more
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              background: "linear-gradient(to top, #5f2c82, #49a09d)",
            }}
          >
            <Card.Body>
              <Card.Title className="text-warning">Achievements</Card.Title>
              <Card.Text className="heightcard">
                <ListGroup className="list-group-flush ">
                  {documents &&
                    documents.reverse().map((document, i) => (
                      <ListGroup.Item
                        key={document._id}
                        className="fs-16 text-white"
                        style={{
                          backgroundColor: "transparent",
                        }}
                      >
                        {document.headline}
                        <br />
                        <a className="fs-12 text-white">
                          {document.description}
                        </a>
                      </ListGroup.Item>
                    ))}
                </ListGroup>
              </Card.Text>
              <Button primary className="px-4 py-1 mt-4">
                Read more
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
      <section
        style={{ background: "linear-gradient(to top, #5f2c82, #49a09d);" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="box p-2 heightcard">
                <h5 style={{ color: "yellow" }}>Mission/Vission</h5>
                <p class="text-white">
                  <marquee width="100%" direction="up" height="100px" SCROLLDELAY="150" >
                    <ListGroup className="list-group-flush ">
                      {documents &&
                        documents.reverse().map((document, i) => (
                          <ListGroup.Item
                            key={document._id}
                            className="fs-16 text-white"
                            style={{
                              backgroundColor: "transparent",
                            }}
                          >
                            {document.headline}
                            <br />
                            <samp className="fs-12 text-white">
                              {document.description}
                            </samp>
                          </ListGroup.Item>
                        ))}
                    </ListGroup>
                  </marquee>
                </p>
                <Button primary className="px-4 py-1 mt-4">
                  Read more
                </Button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box p-2  heightcard">
                <h5 style={{ color: "yellow" }}>Tender/Advertisement</h5>
                <Card.Text >
                  <marquee SCROLLDELAY="150" width="100%" direction="up" height="100px">
                    <ListGroup className="list-group-flush ">
                      {data.length > 0 &&
                        data.reverse().map((item, i) => (
                          <ListGroup.Item
                            key={item._id}
                            className="fs-16 text-white"
                            style={{
                              backgroundColor: "transparent",
                            }}
                          >
                            {item.tender_headline}
                            {/* <img height="20px" style={{width: "30px"}} src="https://lh3.googleusercontent.com/pw/AL9nZEUUbCsZNzt4_gAG1IKCyctmYmJTk6GRJNKdK2pJ9RMxuVUC58dxoPpgcMIZ1tdHy95cZRJqR1VAEI05Z8Qm8_cuqN68xcVnuL1d8dJR_-3Sala8RJg24fP-5SPtk0Zc1Duv8LfCFOEBH25w_FoqeP4=w44-h22-no" /> */}

                            <br />
                            <samp
                              clsampssName="fs-12 text-primary p-1"
                              style={{ color: "lightblue" }}
                            >
                              {item.closing_date.substring(0, 10)}
                            </samp>
                          </ListGroup.Item>
                        ))}
                    </ListGroup>
                  </marquee>
                </Card.Text>
                <Button primary className="px-4 py-1 mt-4">
                  Read more
                </Button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box p-2 heightcard">
                <h5 style={{ color: "yellow" }}>Achievements</h5>
                <marquee SCROLLDELAY="150" width="100%" direction="up" height="100px">
                  <p class="text-white">
                    &#x2022; Outlet at Bhubaneswar Air Port
                    <br /> &#x2022; Outlet at Bhubaneswar Air Port
                    <br /> &#x2022; COFFEE TABLE
                    <br /> &#x2022; Rural Mason Training Programme
                  </p>
                </marquee>
                <Button primary className="px-4 py-1 mt-4">
                  Read more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
