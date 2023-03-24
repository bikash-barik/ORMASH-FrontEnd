import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";
import {
  listnewsUpdates,
  deleteNewsUpdatesAction,
} from "../../../Redux/actions/Manage Application/newsUpdateActions";

import axios from "axios";
import { APIURL } from "../../../Redux/APIURL";

const NewsUpdate = () => {
  const history = useHistory();

  const [isChecked, setIsChecked] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
const [errorMsg, setErrorMsg] = useState("");
  const handleCheckAll = () => {
    setIsChecked(!isChecked);
    setSelectedIds(
      isChecked
        ? []
        : newsUpdates
            .filter((newsUpdate) => newsUpdate._id)
            .map((newsUpdate) => newsUpdate._id)
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
        dispatch(deleteNewsUpdatesAction(id));
      });
      // Clear the ids array after deleting all galleries
      selectedIds = [];
      setSelectedIds([]);
      setIsChecked(false);
    }
  };

  const AddNews = () => {
    history.push("/hub/AddNews");
  };
  const dispatch = useDispatch();

  const newsUpdatesList = useSelector((state) => state.newsUpdatesList);
  const { loading, error, newsUpdates } = newsUpdatesList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const newsUpdatesDelete = useSelector((state) => state.newsUpdatesDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = newsUpdatesDelete;

  const newsUpdatesCreate = useSelector((state) => state.newsUpdatesCreate);
  const { success: successCreate } = newsUpdatesCreate;

  const newsUpdatesUpdate = useSelector((state) => state.newsUpdatesUpdate);
  const { success: successUpdate } = newsUpdatesUpdate;

  useEffect(() => {
    dispatch(listnewsUpdates());
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
      dispatch(deleteNewsUpdatesAction(id));
    }
  };
  // const UpdatetheLinks = () =>{
  //   alert("Please select a record!")
  // }

    //onClick={printthepage}
    const printthepage = () =>{
      window.print();
    }

  const updateSet = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const dataToUpdate = { status: "some new status" }; // replace with your own data to update
      await axios.put(
        `${APIURL}/api/newsUpdates/status/${id}`,
        dataToUpdate,
        config
      );
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      const msg = error.response?.data?.message;
      setErrorMsg(msg);
    }
  };
  const setAllSelected = () => {
    if (window.confirm("Are you sure you want to do all changes in Product?")) {
      selectedIds.forEach((id) => {
        dispatch(updateSet(id));
        window.location.reload(false);
      });
      // Clear the ids array after deleting all galleries
      selectedIds = [];
      setSelectedIds([]);
      setIsChecked(false);
    }
  };


  return (
    <div className="p-5 bg-light rounded">
      <div className="">
        <form>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {errorDelete && (
            <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
          )}
          {loadingDelete && loading && <Loading />}
          <div>
            <h3 className="fs-15">
              <i class="bi bi-geo-alt-fill"></i>
              <span> Home / Manage Application /Products /</span>View Product
            </h3>
            <div className="mt-5 d-flex justify-content-between">
              <div className="gap-2 d-flex justify-content-between">
                <button
                  type="button"
                  onClick={AddNews}
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
                  onClick={setAllSelected}
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
                  onClick={setAllSelected}
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
                    onClick={handleDeleteSelected}
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
                hover
                responsive
                className="border rounded "
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: "#eaebed",
                      fontWeight: "bold",
                      fontSize: "16px",
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
                    <th className="p-2 ">Sl.# </th>
                    <th className="p-2"> ProductsHeadline</th>
                    <th className="p-2"> Product</th>
                    <th className="p-2"> Description </th>
                    <th className="p-2">CreatedOn</th>
                    <th className="p-2">Status </th>
                    <th className="p-2 text-center"> Edit</th>
                    <th className="p-2 text-center"> Delete</th>
                  </tr>
                </thead>

               
                    <tbody >
                    {newsUpdates &&
                  newsUpdates.reverse().map((newsUpdate, i) => (
                      <tr className="" key={newsUpdate._id}>
                        <td className="p-5">
                          <Form.Check
                            aria-label={`Select news update ${i}`}
                            checked={selectedIds.includes(newsUpdate._id)}
                            onChange={(event) =>
                              handleCheck(event, newsUpdate._id)
                            }
                          />
                        </td>
                        <th className="p-5">{i + 1}</th>
                        <td className="p-5">{newsUpdate.headline}</td>
                        <td >
                          {" "}
                          <a
                            href={newsUpdate.uploadDocument}
                            className="text-danger"
                            target="_blank"
                            download
                          >
                            {newsUpdate.uploadDocument.type !== "image/jpg" ? (
                              <img
                                src={newsUpdate.uploadDocument}
                               style={{width:"190px"}}
                              />
                            ) : (
                              "No File"
                            )}
                          </a>
                        </td>
                        <td className="p-5">
                          {" "}
                          {newsUpdate.description}
                        </td>
                        <td className="p-5">
                          {newsUpdate.createdAt.substring(0, 10)}
                        </td>
                        <td className="p-5 text-center">
                          {
                            newsUpdate.status !== true ? (
                               <button
                          onClick={() => updateSet(newsUpdate._id)}
                          type="button"
                          class="btn btn-danger px-5 text-center"
                        >
                          Unset
                        </button>
                      ) : (
                        <button
                          onClick={() => updateSet(newsUpdate._id)}
                          type="button"
                          class="btn btn-outline-success px-5 "
                        >
                          Set
                        </button>
                          )}
                        </td>
                        <td className="p-5">
                          <a href={`/documents/${newsUpdate._id}`}>
                            <i class="bi bi-pencil-square"></i>{" "}
                          </a>
                        </td>
                        <td className="p-5">
                          <a onClick={() => deleteHandler(newsUpdate._id)}>
                            <i class="bi bi-trash-fill"></i>{" "}
                          </a>
                        </td>
                      </tr>
                       ))}
                    </tbody>
                 
              </Table>
            </div>

            <div className="btn-row">
              <div className="col-md-5 col-12">
                <button
                onClick={setAllSelected}
                  type="button"
                  class="btn  btn-outline-secondary p-1 text-dark"
                >
                  Set Home
                </button>
                <button
                onClick={setAllSelected}
                  type="button"
                  class="btn btn-outline-secondary p-1 m-1 text-dark"
                >
                  Unset Home
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsUpdate;
