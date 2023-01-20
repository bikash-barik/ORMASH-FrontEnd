import React from "react";
import { useHistory } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

const SetPermission = ({ dispatch }) => {
  const history = useHistory();

  const Cancle = () => {
    history.push("/hub/SetPermission");
  };
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h1 className="magazin-heading">Add & Edit Permission</h1>

          <hr />

          <div className="border border-2 d-flex bg-light   p-2">
          <span className="m-1">  User Name :</span>
            <div class="col-md-2">
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option>Syam Sundar Sahoo</option>
              </select>
            </div>
          </div>
          <Accordion defaultActiveKey="0" className="mt-5 mb-5">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="p-2">Manage User</Accordion.Header>
              <Accordion.Body className="p-2">
                <Table
                  striped
                  bordered
                  hover
                  variant="dark"
                  responsive
                  className="justify-content-center text-center"
                >
                  <thead>
                    <tr>
                      <th className="p-2">#</th>
                      <th className="p-2">Author Rights</th>
                      <th className="p-2"> Editor Rights</th>
                      <th className="p-2"> Publisher Rights</th>
                      <th className="p-2"> Manager Rights</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="User Profile"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Set Permission"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="p-2">Manage Links</Accordion.Header>
              <Accordion.Body>
                <Table
                  striped
                  bordered
                  hover
                  responsive
                  className="border rounded text-center"
                >
                  <thead>
                    <tr>
                      <th className="p-2"></th>
                      <th className="p-2">Author Rights</th>
                      <th className="p-2"> Editor Rights</th>
                      <th className="p-2"> Publisher Rights</th>
                      <th className="p-2"> Manager Rights</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label=" Global Link"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1"/>
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Primary Link"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="p-2">
                Content Management
              </Accordion.Header>
              <Accordion.Body className="p-2">
                <Table
                  striped
                  bordered
                  hover
                  responsive
                  className="border rounded text-center"
                >
                  <thead>
                    <tr>
                      <th className="p-2">#</th>
                      <th className="p-2">Author Rights</th>
                      <th className="p-2"> Editor Rights</th>
                      <th className="p-2"> Publisher Rights</th>
                      <th className="p-2"> Manager Rights</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label=" Content"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Officer Profile"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="p-2">
                Manage Application
              </Accordion.Header>
              <Accordion.Body className="p-2">
                <Table
                  striped
                  bordered
                  hover
                  responsive
                  className="border rounded text-center"
                >
                  <thead>
                    <tr>
                      <th className="p-2">#</th>
                      <th className="p-2">Author Rights</th>
                      <th className="p-2"> Editor Rights</th>
                      <th className="p-2"> Publisher Rights</th>
                      <th className="p-2"> Manager Rights</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label=" Tender"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="News Updates"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>

                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Document"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Important Links"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>

                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label=" Gallery"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Video"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>

                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Achivements"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Manage Logo"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>

                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Manage Banner"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Whats New"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>  
                    <tr>
                      <td className="p-1">
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Feedback"
                        />
                      </td>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                      <td className="p-1">
                        {" "}
                        <Form.Check aria-label="option 1" />
                      </td>
                    </tr>   
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div className="btn">
            <button type="submit" className="Submit-btn">
              Submit
            </button>
            <button onClick={Cancle} type="submit" className="Cancle-btn">
              Reset
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SetPermission;
