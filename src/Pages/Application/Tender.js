import React from "react";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const ViewContent = ({ dispatch }) => {
  const history = useHistory();
 
  const AddTender = () => {
    history.push("/hub/AddTender");
  };
  const AddAddendum = () => {
    history.push("/hub/Addendum");
  };
  const AddCorrigendum = () => {
    history.push("/hub/Corrigendum");
  };
  // const UpdatetheLinks = () =>{
  //   alert("Please select a record!")
  // }
  return (
    <div>
      <form action="">
        <div class="">
          <h3 className="magazin-heading">
            <i class="bi bi-people design_icon"></i>View Tender Details
          </h3>
          <div className="btn-row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <div className="btn-position">
                <button
                  type="submit"
                  className="btn-coupon-free"
                  onClick={AddTender}
                >
                  Add Tenders
                </button>
                <button
                  type="submit"
                  className="btn-coupon-free"
                  onClick={AddAddendum}
                >
                  Addendum
                </button>
                <button
                  type="submit"
                  className="btn-coupon-free"
                  onClick={AddCorrigendum}
                >
                  Corrigendum
                </button>
              </div>
            </div>
          </div>

          <div className="my-2 gap-3 d-flex flex-row-reverse">
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip id="button-tooltip-2" className="p-1">
                  <span className="p-2">UnPublish</span>
                </Tooltip>
              }
            >
              <button
                type="button"
                class="btn btn-secondary p-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                <i class="bi bi-volume-mute"></i>
              </button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip id="button-tooltip-2" className="p-1">
                  <span className="p-2"> Publish</span>
                </Tooltip>
              }
            >
              <button type="button" class="btn btn-secondary p-2">
                <i class="bi bi-megaphone-fill"></i>
              </button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip id="button-tooltip-2" className="p-1">
                  <span className="p-2"> Delete</span>
                </Tooltip>
              }
            >
              <button type="button" class="btn btn-secondary p-2">
                <i class="bi bi-trash-fill"></i>
              </button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip id="button-tooltip-2" className="p-1">
                  <span className="p-2"> Archive</span>
                </Tooltip>
              }
            >
              <button type="button" class="btn btn-secondary p-2">
                <i class="bi bi-archive-fill"></i>
              </button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip id="button-tooltip-2" className="p-1">
                  <span className="p-2"> Print This Page</span>
                </Tooltip>
              }
            >
              <button type="button" class="btn btn-secondary p-2">
                <i class="bi bi-printer-fill"></i>
              </button>
            </OverlayTrigger>
          </div>

          <div className="magazinName">
            <div className="border border-2 d-flex bg-light   p-2">
              <span className="m-1">Tender Number </span>
              <div class="col-md-2">
                <select id="inputState" class="form-select p-1">
                  <option selected>Choose...</option>
                  <option>About Us</option>
                  <option>DDU-GKY</option>
                  <option>Activities</option>
                  <option>Products</option>
                  <option>Exhibition</option>
                  <option>Tender</option>
                </select>
              </div>

              <span className="m-1">Tender Headline </span>
              <div class="col-md-2">
                <select id="inputState" class="form-select p-1">
                  <option selected>Choose...</option>
                  <option>About Us</option>
                  <option>DDU-GKY</option>
                  <option>Activities</option>
                  <option>Products</option>
                  <option>Exhibition</option>
                  <option>Tender</option>
                </select>
              </div>
            </div>
          </div>
          {/* <div class="text-center coupon-data mobileresponsive">
            <Table
              striped
              bordered
              hover
              responsive
              className="border rounded text-center mt-5"
            >
              <thead>
                <tr>
                  <th className="p-2"></th>
                  <th className="p-2">Sl.# </th>
                  <th className="p-2"> Title</th>
                  <th className="p-2"> Last Updated</th>
                  <th className="p-2"> Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-1">1</th>
                  <td className="p-1"> Product - Mayurbhanj Sabai </td>
                  <td className="p-1">04-Aug-2020</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-1">2</th>
                  <td className="p-1"> Product - Mayurbhanj Sabai </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-1">3</th>
                  <td className="p-1"> Product - Mayurbhanj Sabai </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-1">3</th>
                  <td className="p-1"> Product - Mayurbhanj Sabai </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-1">4</th>
                  <td className="p-1"> Product - Mayurbhanj Sabai </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-1">5</th>
                  <td className="p-1"> Product - Mayurbhanj Sabai </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-1">6</th>
                  <td className="p-1"> Product - Mayurbhanj Sabai </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-1">7</th>
                  <td className="p-1"> Product - Mayurbhanj Sabai </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-1">8</th>
                  <td className="p-1"> Product - Mayurbhanj Sabai </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-1">9</th>
                  <td className="p-1"> Product - Mayurbhanj Sabai </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-1">10</th>
                  <td className="p-1"> Product - Mayurbhanj Sabai </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div> */}
          <center className="text-danger">No Records Found </center>
          {/* <div className="btn-row">
            <div className="col-md-8">
              <div className="ShowEntries">
                <p className="Entries">Showing 0 to 1 of 10 entries</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="btn-tagle">
                <button type="submit" className="btn-Previous">
                  Back
                </button>
                <button type="submit" className="btn-Next">
                  Next
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default ViewContent;
