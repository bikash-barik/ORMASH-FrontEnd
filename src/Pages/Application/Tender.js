import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import {
  listTenders,
  deleteTenderAction,
} from "../../Redux/actions/Manage Application/tendersActions";
import axios from "axios";
import { APIURL } from "../../Redux/APIURL";
const ViewContent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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
        dispatch(deleteTenderAction(id));
        window.location.reload(false)
      });
      // Clear the ids array after deleting all galleries
      selectedIds = [];
      setSelectedIds([]);
      setIsChecked(false);
    }
  };

  const tenderList = useSelector((state) => state.tenderList);
  const { loading, error, tenders } = tenderList;
  console.log(tenders);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const tenderDelete = useSelector((state) => state.tenderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = tenderDelete;

  const tenderCreate = useSelector((state) => state.tenderCreate);
  const { success: successCreate } = tenderCreate;

  const tenderUpdate = useSelector((state) => state.tenderUpdate);
  const { success: successUpdate } = tenderUpdate;

  useEffect(() => {
    dispatch(listTenders());
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

  let ids = [];
  const idsHandler = (id) => {
    ids.push(id);
    console.log("ids name " + ids);
  };

  // const deleteHandler = (ids) => {
  //   for (var i = 0; i < ids.length; i++) {
  //     console.log("com" + i)
  //     dispatch(deleteDocumentAction(ids[i].id));
  //     console.log(ids[i].id)
  //   }
  // };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteTenderAction(id));
    }
  };

  const AddTender = () => {
    history.push("/hub/AddTender");
  };
 
  const UpdateTender = (id) => {
    history.push(`/hub/AddTender/${id}`);
  };
  const AddAddendum = () => {
    history.push("/hub/Addendum");
  };
  const AddCorrigendum = () => {
    history.push("/hub/Corrigendum");
  };
  const getData = async () => {
    try {
      const response = await axios.get(`${APIURL}/api/tenders/`);
      // console.log(response);
      setData(response.data.tenders);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);


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
        {loadingDelete && loading && <Loading />}
        <div class="">
          <h3 className="fs-15">
            <i class="bi bi-geo-alt-fill"></i>
            <span> Home / Manage Application / Tender /</span>View Tender Details
          </h3>
          <div className="mt-5 d-flex justify-content-between">
            <div className="gap-3 d-flex justify-content-between">
              <button
                type="button"
                onClick={AddTender}
                style={{ backgroundColor: "#000081", color: "#fff" }}
                class="btn p-2"
              >
                Add
              </button>
              <button type="button" class="btn btn-outline-secondary p-2">
                View
              </button>

              <button
                type="button"
                onClick={AddTender}
                style={{ backgroundColor: "#000081", color: "#fff" }}
                class="btn p-2"
              >
                Addendum
              </button>
              <button
                type="button"
                onClick={AddTender}
                style={{ backgroundColor: "#000081", color: "#fff" }}
                class="btn p-2"
              >
                {" "}
                Corrigendum
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
                  type="button"
                  style={{
                    borderRadius: "5px",
                    width: "50px",
                    height: "40px",
                    backgroundColor: "",
                    color: "#000",
                  }}
                  class="btn btn-secondary"
                  onClick={handleDeleteSelected}
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
          <div className="" style={{ backgroundColor: "#fcfae1" }}>
            <div className="border border-2 d-flex   p-2">
              <span className="m-1">Tender Number </span>
              <div class="col-md-2">
                <select id="inputState" class="form-select p-1">
                  <option selected>Choose...</option>
                  <option>152</option>
                  <option>156</option>
                  <option>157</option>
                  <option>167</option>
                  <option>168</option>
                  <option>Other</option>
                </select>
              </div>

              <span className="m-1">Tender Headline </span>
              <div class="col-md-2">
                <select id="inputState" class="form-select p-1">
                  <option selected>Choose...</option>
                  <option>QUOTATION CALL NOTICE for ....</option>
                  
                </select>
              </div>
              <button type="button" class="btn btn-success p-1 mx-2">
                Show
              </button>
            </div>
          </div>
          <div class=" coupon-data mobileresponsive">
            <Table
              striped
              bordered
              hover
              responsive
              className="border rounded  mt-5"
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#eaebed",
                    fontWeight: "bold",
                    fontSize: "15px",
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
                  <th className="p-2 text-center">Sl.# </th>
                  <th className="p-2">TenderNo.</th>
                  <th className="p-2"> Tender Headline</th>
                  <th className="p-2"> ClosingDate</th>
                  <th className="p-2">Document</th>
                  <th className="p-2"> Description</th>
                  <th className="p-2"> Edit</th>
                  <th className="p-2"> Delete</th>
                </tr>
              </thead>
              {/* {  tenders.reverse().map((tender, i) => (  <h1>cdvhb</h1>    ))} */}

              <tbody>
                {data.length > 0 &&
                  data.reverse().map((item, i) => (
                    <tr
                      style={{
                        fontWeight: "bold",
                        fontSize: "13px",
                        color: "#000",
                      }}
                    >
                      <td className="p-1 text-center">
                      <Form.Check
                            aria-label={`Select news update ${i}`}
                            checked={selectedIds.includes(item._id)}
                            onChange={(event) =>
                              handleCheck(event, item._id)
                            }
                          />
                      </td>
                      <th className="p-1 text-center">{i + 1}</th>
                      <td className="p-1"> {item.tender_no} </td>
                      <td className="p-1">{item.tender_headline} </td>
                      <td className="p-1">
                        {item.closing_date.substring(0, 10)}{" "}
                      </td>
                      <td className="px-5 text-center">
                        <a
                          href={item.document_one}
                          target="_blank"
                          className="text-danger"
                          download
                        >
                          {item.document_one.type !== "image/jpg" ? (
                            <img
                              src="data:image/png;base64,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"
                              height="50px"
                              width="10px"
                            />
                          ) : (
                            "not"
                          )}
                        </a>
                      </td>
                      <td className="p-1">{item.description}</td>
                      <td className="p-5 text-center" onClick={() => UpdateTender(item._id)}>
                      
                      
                        <i class="bi bi-pencil-square"></i>{" "}
                      </td>
                      <td
                        className="p-5 text-center"
                        onClick={() => deleteHandler(item._id)}
                      >
                        <i class="bi bi-trash"></i>{" "}
                      </td>
                    </tr>
                  ))}
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

export default ViewContent;
