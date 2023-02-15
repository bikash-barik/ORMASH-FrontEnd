import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import {
  listlogos,
  deleteLogoAction,
} from "../../Redux/actions/Manage Application/logosActions";

const ManageLogo = () => {
  const history = useHistory();

  const AddManageLogo = () => {
    history.push("/hub/AddManageLogo");
  };

  const dispatch = useDispatch();

  const logoList = useSelector((state) => state.logoList);
  const { loading, error, logos } = logoList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoDelete = useSelector((state) => state.logoDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = logoDelete;

  const logoCreate = useSelector((state) => state.logoCreate);
  const { success: successCreate } = logoCreate;

  const logoUpdate = useSelector((state) => state.logoUpdate);
  const { success: successUpdate } = logoUpdate;

  useEffect(() => {
    dispatch(listlogos());
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
      dispatch(deleteLogoAction(id));
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
          <h3 className="magazin-heading">
            <i class="bi bi-people design_icon"></i>View ManageLogo
          </h3>
          <div className="btn-row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <div className="btn-position">
                <button
                  type="submit"
                  className="btn-coupon-free"
                  onClick={AddManageLogo}
                >
                  Add ManageLogo
                </button>
              </div>
            </div>
          </div>

          <div className="gap-3 d-flex flex-row-reverse">
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
                  <th className="p-2">Logo Title</th>
                  <th className="p-2"> Photo</th>
                  <th className="p-2">Created on</th>
                  <th className="p-2"> Home Page Status </th>
                  <th className="p-2"> Edit</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="">
                  <td className="p-5">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-5">1</th>
                  <td className="p-5">Ormas</td>
                  <td className="p-5">
                    {" "}
                    <a href="" className="text-danger">
                      <img
                        src="http://ormas.org/Application/uploadDocuments/Logo/ORMAS_Logo_with_CM.jpg"
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

export default ManageLogo;
