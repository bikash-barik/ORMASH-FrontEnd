import React, { useEffect } from "react";
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

const NewsUpdate = () => {
  const history = useHistory();

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
            <h3 className="magazin-heading">
              <i class="bi bi-people design_icon"></i>View News
            </h3>
            <div className="btn-row">
              <div className="col-md-8"></div>
              <div className="col-md-4">
                <div className="btn-position">
                  <button
                    type="submit"
                    className="btn-coupon-free"
                    onClick={AddNews}
                  >
                    Add News
                  </button>
                </div>
              </div>
            </div>

            <div className=" gap-3 d-flex flex-row-reverse">
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
            <div class="text-center coupon-data mobileresponsive">
              <Table
                striped
                bordered
                hover
                responsive
                className="border rounded table-secondary text-center mt-5"
              >
                <thead>
                  <tr>
                    <th className="p-2"></th>
                    <th className="p-2">Sl.# </th>
                    <th className="p-2"> News Headline</th>
                    <th className="p-2"> Document</th>
                    <th className="p-2"> Expiry Date </th>
                    <th className="p-2">Created on</th>
                    <th className="p-2"> Home Page Status </th>
                    <th className="p-2"> Edit</th>
                  </tr>
                </thead>

                {newsUpdates &&
                  newsUpdates.reverse().map((newsUpdate, i) => (
                    <tbody key={newsUpdate._id}>
                      <tr className="">
                        <td className="p-5">
                          <Form.Check aria-label="option 1" />
                        </td>
                        <th className="p-5">{i + 1}</th>
                        <td className="p-5">
                          {newsUpdate.headline}
                        </td>
                        <td className="p-5">
                          {" "}
                          <a
                            href={newsUpdate.uploadDocument}
                            className="text-danger"
                            target="_blank"
                            download
                          >
                             {newsUpdate.uploadDocument.type !== "image/jpg" ? 
                            <img
                              src="https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g"
                              height="80px"
                            /> : "No File" }
                          </a>
                        </td>
                        <td className="p-5"> {newsUpdate.expiryDate.substring(0, 10)}</td>
                        <td className="p-5">{newsUpdate.createdAt.substring(0, 10)}</td>
                        <td className="p-5">{newsUpdate.status == true ? <button type="button" class="btn btn-primary px-5">Set</button> : <button type="button" class="btn btn-outline-primary px-5">Unset</button> }</td>
                        <td className="p-5">
                          <a
                          href={`/documents/${newsUpdate._id}`}
                        >
                          <i class="bi bi-pencil-square"></i>{" "}
                        </a>
                        <a
                          onClick={() =>
                            deleteHandler(newsUpdate._id)
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
    </div>
  );
};

export default NewsUpdate;
