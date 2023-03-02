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
import { APIURL } from "../../Redux/APIURL";

const ManageBanner = () => {
  const history = useHistory();

  //start
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(`${APIURL}/api/banners/`);
      // console.log(response);
      setData(response.data.banners);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const AddManageBanner = (add) => {
    history.push(`/hub/AddManageBanner`);
  };
  const clickHandler = (id) => {
    history.push(`/hub/AddManageBanner/${id}`);
  };
  //end

 

  

  const dispatch = useDispatch();

  const bannerList = useSelector((state) => state.bannerList);
  const { loading, error, banners } = bannerList;
  console.log(banners);

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
      window.location.reload(true);
    }
  };
  // const UpdatetheLinks = () =>{
  //   alert("Please select a record!")
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
            <span> Home / Manage Application / Manage Banner /</span>View Manage
            Banner
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
                <tr
                  style={{
                    backgroundColor: "#eaebed",
                    fontWeight: "bold",
                    fontSize: "15px",
                    color: "#000",
                  }}
                >
                  <th className="p-2"></th>
                  <th className="p-2">Sl.# </th>
                  <th className="p-2">Caption</th>
                  <th className="p-2"> Banner</th>
                  <th className="p-2">Created on</th>
                  <th className="p-2"> Home Page Status </th>
                  <th className="p-2"> Edit</th>
                  <th className="p-2"> Delete</th>
                </tr>
              </thead>
              {/* {banners && banners.map((banner) => ( */}
              <tbody className="">
                {data.length > 0 &&
                  data.map((item, i) => (
                    <tr key={item._id}>
                      <td className="p-5">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <th className="p-5">{i + 1}</th>
                      <td className="p-5">{item.caption} </td>
                      <td className="p-1">
                        {" "}
                        <a href="" className="text-danger">
                          <img src={item.banner} height="80px" />{" "}
                        </a>
                      </td>
                      <td className="p-5">{item.timestamp.substring(0, 10)}</td>
                      <td className="p-5">
                      {item.publish_status !== true ? (
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
                      <td
                        className="p-5"
                        onClick={() => clickHandler(item._id)}
                      >
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
              <button
                type="button"
                class="btn  btn-outline-secondary p-1 text-dark"
              >
                Set Home
              </button>
              <button
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
  );
};

export default ManageBanner;
