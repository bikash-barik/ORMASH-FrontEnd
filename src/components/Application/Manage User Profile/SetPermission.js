import React from "react";
import { useHistory } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const SetPermission = ({ dispatch }) => {
  const history = useHistory();

 const refreshPage = () =>{
    window.location.reload(false);
  }

  const Cancel = () => {
    history.push("/hub/SetPermission");
  };
  return (
    <>
      <form action="">
        <div className="magazin-container">
          <h1 className="magazin-heading"></h1>

          <h3 className="fs-15">
            <i class="bi bi-geo-alt-fill"></i>
            <span> Home / Manage User Profile / Set Permission /</span>Add &
            Edit Permission Profile
          </h3>
          <div className="mt-5 d-flex justify-content-between">
            <div className="gap-2 d-flex justify-content-between"></div>
            <div className="gap-3 d-flex flex-row-reverse d-flex align-items-center">
              {/* <div className="ShowEntries d-flex align-items-center">
                {data.length > 0 ? (
                  <p className="Entries">
                    {" "}
                    All Results:
                    <span className="text-primary">{data.length}</span>{" "}
                  </p>
                ) : (
                  <p className="Entries"> All Results: 0</p>
                )}
              </div> */}
              
              <p className="text-danger">(*) Indicates Mandatory Fields</p>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="button-tooltip-2" className="p-1">
                    <span className="p-2">Reload</span>
                  </Tooltip>
                }
              >
                <button
                onClick={refreshPage}
                  type="button"
                  style={{
                    borderRadius: "5px",
                    width: "50px",
                    height: "40px",
                    backgroundColor: "",
                    color: "#000",
                  }}
                  class="btn btn-secondary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                >
                  <i class="bi bi-arrow-clockwise"></i>
                </button>
              </OverlayTrigger>
            </div>
          </div>
          <div className="" style={{ backgroundColor: "#fcfae1" }}>
            <div className="border border-2 d-flex mt-1 p-2">
              <span className="m-1"> User Name :</span>
              <div className="col-md-2">
                <select id="inputState" className="form-select p-1">
                  <option selected>Choose...</option>
                  <option>Syam Sundar Sahoo</option>
                </select>
              </div>
              <button type="button" class="btn btn-success p-1 mx-2">
                Show
              </button>
            </div>
          </div>

          <Accordion defaultActiveKey="0" className="mt-2 mb-5">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="p-2">Manage User</Accordion.Header>
              <Accordion.Body className="p-2">
                <Table
                  striped
                  bordered
                  hover
                  responsive
                  className="justify-content-center table-secondary text-center"
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
                  className="border rounded table-secondary text-center"
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
                  className="border rounded table-secondary text-center"
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
                  className="border rounded table-secondary text-center"
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
            <button type="submit" className="btn-Previous">
              Submit
            </button>
            <button onClick={Cancel} type="submit" className="btn-Next ">
              Reset
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SetPermission;
