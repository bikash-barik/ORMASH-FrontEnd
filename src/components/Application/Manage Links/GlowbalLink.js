import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useSelector } from "react-redux";
import { APIURL } from "../../../Redux/APIURL";
const GlowbalLink = ({ dispatch }) => {
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [data, setData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleCheckAll = () => {
    setIsChecked(!isChecked);
    setSelectedIds(
      isChecked
        ? []
        : data
            .filter((data) => data._id)
            .map((data) => data._id)
    );
  };

  const handleCheck = (event, id) => {
    if (event.target.checked) {
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    }
  };

  const handleDeleteSelected = () => {
    if (window.confirm("Are you sure you want to delete all galleries?")) {
      selectedIds.forEach((id) => {
        dispatch(deleteHandler(id));
        window.location.reload(false)
      });
      // Clear the ids array after deleting all galleries
      selectedIds = [];
      setSelectedIds([]);
      setIsChecked(false);
    }
  };

  const CreateMagazin = () => {
    history.push("/hub/AddGlobalLink");
  };
  const getData = async () => {
    try {
      const response = await axios.get(`${APIURL}/api/globallinks/`);
      // console.log(response);
      setData(response.data.globalLinks);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const clickHandler = (id) => {
    history.push(`/hub/AddGlobalLink/${id}`);
  };

  const deleteHandler = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      if (window.confirm("Are you sure?")) {
        await axios.delete(`${APIURL}/api/globallinks/${id}`, config);
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const UpdatetheLinks = () =>{
  //   alert("Please select a record!")
  // }

  //onClick={printthepage}
  const printthepage = () =>{
    window.print();
  }

  return (
    <div>
      <form action="">
        <div class="">
          <h3 className="fs-15">
            <i class="bi bi-geo-alt-fill"></i>
            <span> Home / Manage Link / Global Link /</span>View Global Link
          </h3>

          <div className="mt-5 d-flex justify-content-between">
            <div className="gap-2 d-flex justify-content-between mb-1">
              <button
                type="button"
                onClick={CreateMagazin}
                style={{ backgroundColor: "#000081", color: "#fff"}}
                class="btn p-2"
              >
                Add
              </button>
              <button type="button" class="btn btn-outline-secondary p-2">
                View
              </button>
            </div>
            <div className="gap-3 d-flex flex-row-reverse d-flex align-items-center">
              <div className="ShowEntries d-flex align-items-center">
                {data.length > 0 ? (
                  <p className="Entries">
                    {" "}
                    All Results:
                    <span className="text-primary">{data.length}</span>{" "}
                  </p>
                ) : (
                  <p className="Entries"> All Results: 0</p>
                )}
              </div>
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
                 onClick={handleDeleteSelected}
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
                onClick={printthepage}
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
          <div class="mobileresponsive">
            <Table bordered responsive className="border rounded">
              <thead>
                <tr
                  style={{
                    backgroundColor: "#eaebed",
                    fontWeight: "bold",
                    fontSize: "17px",
                    color: "#000",
                  }}
                >
                   <th className="p-2 text-center">
                      <Form.Check
                        aria-label="Select all checkboxes"
                        checked={isChecked}
                        onChange={handleCheckAll}
                      />
                    </th>
                  <th className="p-2">SL#</th>
                  <th className="p-2">Link Name</th>
                  <th className="p-2"> Link No</th>
                  <th className="p-2"> Link Type</th>
                  <th className="p-2"> Function/URL</th>
                  <th className="p-2"> Window Status</th>
                  <th className="p-2"> View Status </th>
                  <th className="p-2"> Edit</th>
                  <th className="p-2"> Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((item, i) => (
                    <tr key={item._id}>
                     <td className="p-1 text-center">
                      <Form.Check
                            aria-label={`Select news update ${i}`}
                            checked={selectedIds.includes(item._id)}
                            onChange={(event) =>
                              handleCheck(event, item._id)
                            }
                          />
                      </td>

                      <td className="p-1 text-center">{i + 1} </td>
                      <td className="p-1">{item.link_name} </td>

                      <td className="p-1 text-center">
                        {" "}
                        <input
                          placeholder={item.sl_no}
                          style={{ width: "55px", border: "solid 1px #b6b6bd" }}
                          className="text-center"
                        ></input>{" "}
                      </td>
                      <td className="p-1">{item.link_type}</td>
                      <td className="p-1">{item.function_name}</td>
                      <td className="p-1"> {item.window_status}</td>
                      <td className="p-1"> {item.view_in_menu_item}</td>
                      <td
                        className="p-1 text-center"
                        onClick={() => clickHandler(item._id)}
                      >
                        <i class="bi bi-pencil-square"></i>{" "}
                      </td>
                      <td
                        className="p-1 text-center"
                        onClick={() => deleteHandler(item._id)}
                      >
                        <i class="bi bi-trash"></i>{" "}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
          <button type="button" class="btn btn-success p-1 mt-2">
            Update Link Number
          </button>
        </div>
      </form>
    </div>
  );
};

export default GlowbalLink;
