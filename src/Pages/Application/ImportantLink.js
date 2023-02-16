import React from "react";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const ImportantLink = ({ dispatch }) => {
  const history = useHistory();

  const AddImportantLink = () => {
    history.push("/hub/AddImportantLink");
  };

  // const UpdatetheLinks = () =>{
  //   alert("Please select a record!")
  // }
  return (
    <div>
      <form action="">
        <div class="">
          <h3 className="fs-15">
            <i class="bi bi-geo-alt-fill"></i>
            <span> Home / Manage Application / Important Link /</span>View
            Important Link
          </h3>
          <div className="mt-5 d-flex justify-content-between">
            <div className="gap-2 d-flex justify-content-between">
              <button
                type="button"
                onClick={AddImportantLink}
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
                    <span className="p-2">UnPublish</span>
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
                  <i class="bi bi-volume-mute-fill"></i>
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
                    <span className="p-2"> Archive</span>
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
          <div class="text-center coupon-data mobileresponsive">
            <Table
              // striped
              bordered
              hover
              responsive
              className="border rounded "
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#eaebed",
                    fontWeight: "bold",
                    fontSize: "17px",
                    color: "#000",
                  }}
                >
                  <th className="p-2"></th>
                  <th className="p-2">Sl.# </th>
                  <th className="p-2">Important Link </th>
                  <th className="p-2"> URL</th>

                  <th className="p-2">Created on</th>
                  <th className="p-2"> Edit</th>
                  <th className="p-2"> Delete</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="">
                  <td className="p-5">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-5">1</th>
                  <td className="p-5">Mayur Shilpa- Crafts of ORMAS</td>
                  <td className="p-5">http://www.mayurshilpacraft.com</td>
                  <td className="p-5"> 19-Oct-2019</td>

                  <td className="p-5">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                  <td
                    className="p-5 text-center"
                    // onClick={() => deleteHandler(item._id)}
                  >
                    <i class="bi bi-trash"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-5">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-5">2</th>
                  <td className="p-5">Mayur Shilpa- Crafts of ORMAS</td>
                  <td className="p-5">http://www.mayurshilpacraft.com</td>
                  <td className="p-5"> 19-Oct-2019</td>
                  <td className="p-5">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                  <td
                    className="p-5 text-center"
                    // onClick={() => deleteHandler(item._id)}
                  >
                    <i class="bi bi-trash"></i>{" "}
                  </td>
                </tr>

                <tr>
                  <td className="p-5">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-5">3</th>
                  <td className="p-5">Mayur Shilpa- Crafts of ORMAS</td>
                  <td className="p-5">http://www.mayurshilpacraft.com</td>
                  <td className="p-5"> 19-Oct-2019</td>
                  <td className="p-5">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                  <td
                    className="p-5 text-center"
                    // onClick={() => deleteHandler(item._id)}
                  >
                    <i class="bi bi-trash"></i>{" "}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div className="btn-row">
            <div className="col-md-5 col-12">
              <button type="button" class="btn  btn-outline-secondary p-1 text-dark">
                Set Home
              </button>
              <button type="button" class="btn btn-outline-secondary p-1 m-1 text-dark">
                Unset Home
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ImportantLink;
