import React from "react";
import { useHistory } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Table } from "react-bootstrap";
const UserProfiles = ({ dispatch }) => {
  const history = useHistory();

  const CreateMagazin = () => {
    history.push("/hub/AddUserProfile");
  };
  return (
    <div>
      <form action="">
        <div class="">
          <h3 className="fs-15">
            <i class="bi bi-geo-alt-fill"></i>
            <span> Home / Manage User Profile / User Profile /</span>View User
            Profile
          </h3>
          <div className="mt-5 d-flex justify-content-between">
            <div className="gap-2 d-flex justify-content-between">
              <button
                type="button"
                onClick={CreateMagazin}
                style={{ backgroundColor: "#000081", color: "#fff" }}
                class="btn p-2"
              >
                Add
              </button>
              <button type="button" class="btn btn-outline-secondary p-2">
                View
              </button>
            </div>
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

              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="button-tooltip-2" className="p-1">
                    <span className="p-2"> Delete</span>
                  </Tooltip>
                }
              >
                <button
                  type="button"
                  style={{
                    borderRadius: "5px",
                    width: "50px",
                    height: "40px",
                    backgroundColor: "",
                    color: "#000",
                  }}
                  class="btn btn-secondary"
                >
                  <i class="bi bi-trash-fill"></i>
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
                <button
                  type="button"
                  style={{
                    borderRadius: "5px",
                    width: "50px",
                    height: "40px",
                    backgroundColor: "",
                    color: "#000",
                  }}
                  class="btn btn-secondary"
                >
                  <i class="bi bi-printer-fill"></i>
                </button>
              </OverlayTrigger>
            </div>
          </div>
          <div className="" style={{ backgroundColor: "#fcfae1" }}>
            <div className="border border-2 d-flex   p-2">
              <input
                type="text"
                placeholder="Name"
                className="maga_name"
              ></input>
              <button type="button" class="btn btn-success p-1 mx-2">
                Show
              </button>
            </div>
          </div>

          <div class="text-center coupon-data mobileresponsive mt-2">
            <Table bordered hover responsive className="border rounded ">
              <thead>
                <tr
                  class="text-center"
                  style={{
                    backgroundColor: "#eaebed",
                    fontWeight: "bold",
                    fontSize: "15px",
                    color: "#000",
                  }}
                >
                  <th scope="col">SL. No.</th>
                  <th scope="col">User Name </th>
                  <th scope="col">Mobile No</th>
                  <th scope="col">Privilage</th>
                  <th scope="col">Status</th>
                  <th scope="col">SL No</th>
                  <th scope="col">Created on</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="p-2" scope="row">
                    1
                  </th>
                  <td className="p-2">Shyam Sundar Sahoo</td>
                  <td className="p-2"> </td>
                  <td className="p-2"> User </td>
                  <td className="p-1">
                    <button type="submit" className="btn btn-danger p-1">
                      Inactive
                    </button>{" "}
                  </td>
                  <td className="p-2">0</td>
                  <td className="p-2">15-Apr-2015</td>
                  <td className="p-2">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          {/* <div className="coupon-data">
            <table className="coupon-table">
              <tr className="coupon-tr">
                <th className="pd-10">Journal Name</th>
                <th>Author</th>
                <th>Status</th>
                <th>No Of Volume</th>
                <th>Type</th>
              </tr>

              <tr className="coupon-tr">
                <td></td>

                <td className="coupon_td">No Record</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div> */}

          <button type="button" class="btn btn-success p-1 mt-2">
            Update Link Number
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfiles;
