import { Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { listdocuments } from "../../../Redux/actions/Manage Application/documentsActions";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./About.css";
const About = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const documentList = useSelector((state) => state.documentList);
  const { documents } = documentList;

  useEffect(async () => {
    dispatch(listdocuments());
  }, [dispatch]);

  return (
    <div className="about">
      <Row xs={1} md={3} className="g-4">
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
              <Card.Title className="text-white">
                Tender/Advertisement
              </Card.Title>
              <Card.Text className="fs-12 text-white">
                <b>Closing Date</b> : 02-Jan-2023 <br /> Zoom Link for Pre-Bid
                Meeting for Impalement of Packaging Agencies <br />
                <b>Closing date</b> : 07-Jan-2023
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
              <Card.Title className="text-white">Achievements</Card.Title>
              <Card.Text className="fs-12 text-white">
                Outlet at Bhubaneswar Air Port <br />
                COFFEE TABLE <br /> Rural Mason Training Programme
              </Card.Text>
              <Button primary className="px-4 py-1 mt-4">
                Read more
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default About;
