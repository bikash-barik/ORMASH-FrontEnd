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
  listdocuments,
  deleteDocumentAction,
} from "../../Redux/actions/Manage Application/documentsActions";

const Document = () => {
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleCheckAll = () => {
    setIsChecked(!isChecked);
    setSelectedIds(
      isChecked
        ? []
        : documents
            .filter((document) => document._id)
            .map((document) => document._id)
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
        dispatch(deleteDocumentAction(id));
      });
      // Clear the ids array after deleting all galleries
      selectedIds = [];
      setSelectedIds([]);
      setIsChecked(false);
    }
  };
  const AddDocument = () => {
    history.push("/hub/AddDocument");
  };

  const dispatch = useDispatch();

  const documentList = useSelector((state) => state.documentList);
  const { loading, error, documents } = documentList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const documentDelete = useSelector((state) => state.documentDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = documentDelete;

  const documentCreate = useSelector((state) => state.documentCreate);
  const { success: successCreate } = documentCreate;

  const documentUpdate = useSelector((state) => state.documentUpdate);
  const { success: successUpdate } = documentUpdate;

  useEffect(() => {
    dispatch(listdocuments());
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






  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteDocumentAction(id));
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
        {loadingDelete && loading && <Loading />}
        <div class="">
          <h3 className="fs-15">
            <i class="bi bi-geo-alt-fill"></i>
            <span> Home / Manage Application / Document /</span>View Document
          </h3>
          <div className="mt-5 d-flex justify-content-between">
            <div className="gap-2 d-flex justify-content-between">
              <button
                type="button"
                onClick={AddDocument}
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
          <div class=" coupon-data mobileresponsive">
            <Table
              // striped
              bordered
              hover
              responsive
              className="border rounded   "
            >
              <thead>
                <tr  style={{
                    backgroundColor: "#eaebed",
                    fontWeight: "bold",
                    fontSize: "13px",
                    color: "#000",
                  }}>
                  <th className="p-2 text-center">
                      <Form.Check
                        aria-label="Select all checkboxes"
                        checked={isChecked}
                        onChange={handleCheckAll}
                      />
                    </th>
                  <th className="p-2 text-center">Sl.# </th>
                  <th className="p-2">Headline</th>
                  <th className="p-2"> Document</th>

                  <th className="p-2">Created on</th>
                  <th className="p-2"> Home Page Status </th>
                  <th className="p-2"> Edit</th>
                  <th className="p-2"> Delete</th>
                </tr>
              </thead>
              {documents &&
                documents.reverse().map((document, i) => (
                  <tbody className="" key={document._id}>
                    <tr className="">
                      <td className="p-5">
                      <Form.Check
                            aria-label={`Select news update ${i}`}
                            checked={selectedIds.includes(document._id)}
                            onChange={(event) =>
                              handleCheck(event, document._id)
                            }
                          />
                      </td>
                      <th className="p-5">{i + 1}</th>
                      <td className="p-5">{document.headline}</td>
                      <td className="p-3">
                        {" "}
                        <a
                          href={document.uploadDocument}
                          target="_blank"
                          className="text-danger"
                          download
                        >
                          {document.uploadDocument.type !== "image/jpg" ? (
                             <img
                             src="https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g"
                             height="40px"
                           />
                          ) : (
                            "not"
                          )}
                        </a>
                      </td>
                      <td className="p-5">
                        {document.expiryDate.substring(0, 10)}{" "}
                      </td>
                      <td className="p-5 text-center">
                        {document.status == true ? (
                          // <button type="button" class="btn btn-primary px-5">
                          " Set"
                          // </button>
                        ) : (
                          // <button
                          //   type="button"
                          //   class="btn btn-outline-primary px-5"
                          // >
                           " Unset"
                          // </button>
                        )}
                      </td>
                      <td className="p-5 text-center">
                        {" "}
                        <a href={`/documents/${document._id}`}>
                          <i class="bi bi-pencil-square"></i>{" "}
                        </a>
                      </td>{" "}
                      <td className="p-5 text-center">
                        <a onClick={() => deleteHandler(document._id)}>
                          <i class="bi bi-trash-fill"></i>{" "}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                ))}
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

export default Document;
