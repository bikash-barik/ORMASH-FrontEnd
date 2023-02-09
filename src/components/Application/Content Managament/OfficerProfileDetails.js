import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";
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
        {/* {officerProfileDetails
         &&
         officerProfileDetails
          .filter((filteredNote) =>
            filteredNote.title.toLowerCase().includes(search.toLowerCase())
          )
          .reverse()
          .map((officerProfileDetail) => ( */}
        {/* { officerProfileDetails  &&
         officerProfileDetails.reverse()
          .map((officerProfileDetail) => ( */}
        <div class="">
          <h3 className="magazin-heading">
            <i class="bi bi-people design_icon"></i>OfficerProfileDetails
          </h3>
          <div className="btn-row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <div className="btn-position">
                <button
                  type="submit"
                  className="btn-coupon-free"
                  onClick={CreateMagazin}
                >
                  Add Officer Profile
                </button>
              </div>
            </div>
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
                  <th className="p-2"> Officer Name</th>{" "}
                  <th className="p-2"> Designation </th>
                  <th className="p-2"> Serial</th>{" "}
                  <th className="p-2"> Created on</th>{" "}
                  <th className="p-2"> Photo</th>
                  <th className="p-2"> Edit</th>
                </tr>
              </thead>
              {officerProfileDetails &&
                officerProfileDetails.reverse().map((officerProfileDetail,i) => (
                  <tbody className="" key={officerProfileDetail._id}>
                    <tr className="">
                      <td className="p-5">  
                        <Form.Check aria-label="option 1" />
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
                      <td className="p-5"> {officerProfileDetail.createdon.substring(0, 10)}</td>
                      <td className="p-1">
                        <img
                          src={officerProfileDetail.photo}
                          height="75px"
                          width="80px"
                          alt=""
                        />
                      </td>
                      <td className="p-5 d-flex justify-content-between">
                        <a
                          href={`/hub/UpdateOfficerProfile/${officerProfileDetail._id}`}
                        >
                          <i class="bi bi-pencil-square"></i>{" "}
                        </a>
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
