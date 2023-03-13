import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {
  listOfficerProfileDetails,
  deleteOfficerProfileDetailAction,
} from "../../../Redux/actions/Content Management/officerProfileDetailsActions";

const OfficerProfileDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const CreateMagazin = () => {
    history.push("/hub/AddOfficerProfile");
  };

  const [isChecked, setIsChecked] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleCheckAll = () => {
    setIsChecked(!isChecked);
    setSelectedIds(
      isChecked
        ? []
        : officerProfileDetails
            .filter((officerProfileDetail) => officerProfileDetail._id)
            .map((officerProfileDetail) => officerProfileDetail._id)
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
        dispatch(deleteOfficerProfileDetailAction(id));
        window.location.reload(false)
      });
      // Clear the ids array after deleting all galleries
      selectedIds = [];
      setSelectedIds([]);
      setIsChecked(false);
    }
  };


  const officerProfileDetailList = useSelector(
    (state) => state.officerProfileDetailList
  );
  const { loading, error, officerProfileDetails } = officerProfileDetailList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const officerProfileDetailDelete = useSelector(
    (state) => state.officerProfileDetailDelete
  );
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = officerProfileDetailDelete;

  const officerProfileDetailCreate = useSelector(
    (state) => state.officerProfileDetailCreate
  );
  const { success: successCreate } = officerProfileDetailCreate;

  const officerProfileDetailUpdate = useSelector(
    (state) => state.officerProfileDetailUpdate
  );
  const { success: successUpdate } = officerProfileDetailUpdate;

  useEffect(() => {
    dispatch(listOfficerProfileDetails());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteOfficerProfileDetailAction(id));
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
      <form>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {errorDelete && (
          <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        )}
        {loading && <Loading />}
        {loadingDelete && <Loading />}
        {console.log(officerProfileDetails)}

        <div class="">
          <h3 className="fs-15">
            <i class="bi bi-geo-alt-fill"></i>
            <span> Home / Manage Link / Global Link /</span>
            OfficerProfileDetails
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
          <div class=" coupon-data mobileresponsive">
            <Table
              // striped
              bordered
              // hover
              responsive
              className="border rounded "
            >
              <thead>
                <tr   style={{
                    backgroundColor: "#eaebed",
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#000",
                  }}>
                  <th className="p-2 text-center">
                      <Form.Check
                        aria-label="Select all checkboxes"
                        checked={isChecked}
                        onChange={handleCheckAll}
                      />
                    </th>
                  <th className="p-2">Sl.# </th>
                  <th className="p-2"> Officer Name</th>{" "}
                  <th className="p-2"> Designation </th>
                  <th className="p-2"> Serial</th>{" "}
                  <th className="p-2"> Created on</th>{" "}
                  <th className="p-2"> Photo</th>
                  <th className="p-2"> Edit</th>
                  <th className="p-2"> Delete</th>
                </tr>
              </thead>
              {officerProfileDetails &&
                officerProfileDetails
                  .reverse()
                  .map((officerProfileDetail, i) => (
                    <tbody className="" key={officerProfileDetail._id}>
                      <tr
                        style={{
                          fontSize: "13px",
                          color: "#000",
                        }}>
                        <td className="p-1 text-center">
                      <Form.Check
                            aria-label={`Select news update ${i}`}
                            checked={selectedIds.includes(officerProfileDetail._id)}
                            onChange={(event) =>
                              handleCheck(event, officerProfileDetail._id)
                            }
                          />
                      </td>
                        <th className="p-5">{i + 1}</th>
                        <td className="p-5">
                          {" "}
                          {officerProfileDetail.officername}
                        </td>
                        <td className="p-5">
                          {" "}
                          {officerProfileDetail.designation}
                        </td>
                        <td className="p-5"> {officerProfileDetail.serial}</td>
                        <td className="p-5">
                          {" "}
                          {officerProfileDetail.createdon.substring(0, 10)}
                        </td>
                        <td className="p-1">
                          <img
                            src={officerProfileDetail.photo}
                            height="75px"
                            width="80px"
                            alt=""
                          />
                        </td>
                        <td className="p-5">
                          <a
                            href={`/hub/UpdateOfficerProfile/${officerProfileDetail._id}`}
                          >
                            <i class="bi bi-pencil-square"></i>{" "}
                          </a>
                        </td>
                        <td className="p-5 ">
                          <a
                            onClick={() =>
                              deleteHandler(officerProfileDetail._id)
                            }
                          >
                            <i class="bi bi-trash-fill"></i>{" "}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  ))}
            </Table>
          </div>

          <div className="btn-row">
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default OfficerProfileDetails;
