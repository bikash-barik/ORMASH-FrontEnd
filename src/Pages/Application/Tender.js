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
const ViewContent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState([]);

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
  const AddAddendum = () => {
    history.push("/hub/Addendum");
  };
  const AddCorrigendum = () => {
    history.push("/hub/Corrigendum");
  };
  const getData = async () => {
    try {
      const response = await axios.get("/api/tenders/")
      // console.log(response);
      setData(response.data.tenders);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {

    getData()

  },[])


  return (
    <div>
      <form>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {errorDelete && (
          <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        )}
        {loadingDelete && loading && <Loading />}
        <div class="">
          <h3 className="magazin-heading">
            <i class="bi bi-people design_icon"></i>View Tender Details
          </h3>
          <div className="btn-row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <div className="btn-position">
                <button
                  type="submit"
                  className="btn-coupon-free"
                  onClick={AddTender}
                >
                  Add Tenders
                </button>
                <button
                  type="submit"
                  className="btn-coupon-free"
                  onClick={AddAddendum}
                >
                  Addendum
                </button>
                <button
                  type="submit"
                  className="btn-coupon-free"
                  onClick={AddCorrigendum}
                >
                  Corrigendum
                </button>
              </div>
            </div>
          </div>

          <div className="my-2 gap-3 d-flex flex-row-reverse">
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

          <div className="magazinName">
            <div className="border border-2 d-flex bg-light   p-2">
              <span className="m-1">Tender Number </span>
              <div class="col-md-2">
                <select id="inputState" class="form-select p-1">
                  <option selected>Choose...</option>
                  <option>About Us</option>
                  <option>DDU-GKY</option>
                  <option>Activities</option>
                  <option>Products</option>
                  <option>Exhibition</option>
                  <option>Tender</option>
                </select>
              </div>

              <span className="m-1">Tender Headline </span>
              <div class="col-md-2">
                <select id="inputState" class="form-select p-1">
                  <option selected>Choose...</option>
                  <option>About Us</option>
                  <option>DDU-GKY</option>
                  <option>Activities</option>
                  <option>Products</option>
                  <option>Exhibition</option>
                  <option>Tender</option>
                </select>
              </div>
            </div>
          </div>
          <div class="text-center coupon-data mobileresponsive">
            <Table
              striped
              bordered
              hover
              responsive
              className="border rounded text-center mt-5"
            >
              <thead>
                <tr>
                  <th className="p-2"></th>
                  <th className="p-2">Sl.# </th>
                  <th className="p-2">Tender No.</th>
                  <th className="p-2"> Tender Headline</th>
                  <th className="p-2"> Closing Date</th>
                  <th className="p-2">Document</th>
                  <th className="p-2"> Description</th>
                  <th className="p-2"> Edit</th>
                </tr>
              </thead>
              {/* {  tenders.reverse().map((tender, i) => (  <h1>cdvhb</h1>    ))} */}
              
                  <tbody>
                  {data.length > 0 && data.reverse().map((item,i) => (
                    <tr>
                      <td className="p-1">
                        <Form.Check aria-label="option 1" />
                      </td>
                      <th className="p-1">{i+1}</th>
                      <td className="p-1"> {item.tender_no} </td>
                      <td className="p-1">{item.tender_headline} </td>
                      <td className="p-1">{item.closing_date.substring(0, 10)} </td>
                      <td className="p-1">
                      <a
                          href={item.document_one} 
                          target="_blank"
                          className="text-danger"
                          download
                        > 
                        
                        {item.document_one.type !== "image/jpg" ? 
                        <img
                            src="https://www.psero.com/wp-content/uploads/2020/09/adobe-acrobat-pdf-file-512.png"
                            height="50px" width="20px"
                          /> : "not" }
                          
                        </a>
                      </td>
                      <td className="p-1">{item.description}</td>
                      <td className="p-1">
                        <i class="bi bi-pencil-square"></i>{" "}
                      </td>
                    </tr>
                  ))}
                  </tbody>
             
            </Table>
          </div>
          {/* <center className="text-danger">No Records Found </center> */}
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

export default ViewContent;
