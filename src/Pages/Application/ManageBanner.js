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
  listbanners,
  deleteBannerAction,
} from "../../Redux/actions/Manage Application/bannersActions";
import axios from "axios";

const ManageBanner = () => {
  const history = useHistory();

  const AddManageBanner = () => {
    history.push("/hub/AddManageBanner");
  };

  const dispatch = useDispatch();

  const bannerList = useSelector((state) => state.bannerList);
  const { loading, error, banners } = bannerList;
console.log(banners)
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const bannerDelete = useSelector((state) => state.bannerDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = bannerDelete;

  const bannerCreate = useSelector((state) => state.bannerCreate);
  const { success: successCreate } = bannerCreate;

  const bannerUpdate = useSelector((state) => state.bannerUpdate);
  const { success: successUpdate } = bannerUpdate;

  useEffect(() => {
    dispatch(listbanners());
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
      dispatch(deleteBannerAction(id));
    }
  };
  // const UpdatetheLinks = () =>{
  //   alert("Please select a record!")
  // }



  // const history = useHistory();
  
  // const CreateMagazin = () => {
  //   history.push("/hub/AddGlobalLink");
  // };


// const clickHandler = (id) =>{
//   history.push(`/hub/AddGlobalLink/${id}`)
// }
  return (
    <div>
      <form action="">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {errorDelete && (
          <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        )}
        {loadingDelete && loading && <Loading />}
        <div class="">
       
          <h3 className="fs-15">
            <i class="bi bi-geo-alt-fill"></i>
            <span> Home / Manage Application / Manage Banner /</span>View Manage Banner
          </h3>
          <div className="mt-5 d-flex justify-content-between">
            <div className="gap-2 d-flex justify-content-between">
              <button
                type="button"
                onClick={AddManageBanner}
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
              className="border rounded"
            >
              <thead>
                <tr style={{
                    backgroundColor: "#eaebed",
                    fontWeight: "bold",
                    fontSize: "15px",
                    color: "#000",
                  }}>
                  <th className="p-2"></th>
                  <th className="p-2">Sl.# </th>
                  <th className="p-2">Caption</th>
                  <th className="p-2"> Banner</th>
                  <th className="p-2">Created on</th>
                  <th className="p-2"> Home Page Status </th>
                  <th className="p-2"> Edit</th>
                </tr>
              </thead>
              {/* {banners && banners.map((banner) => ( */}
              <tbody className="">
             
                <tr className="">
                  <td className="p-5">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-5">1</th>
                  <td className="p-5">SISIR SARAS 2023</td>
                  <td className="p-1">
                    {" "}
                    <a href="" className="text-danger">
                      <img
                        src="data:image/jpeg;base64,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"
                        height="80px"
                      />{" "}
                    </a>
                  </td>
                  <td className="p-5"> 19-Oct-2019</td>
                  <td className="p-5">Set</td>
                  <td className="p-5">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
           
              </tbody>
              {/* ))} */}
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

export default ManageBanner;
