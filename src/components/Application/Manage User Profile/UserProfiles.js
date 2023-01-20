import React from "react";
import { useHistory } from "react-router-dom";

const UserProfiles = ({ dispatch }) => {
  const history = useHistory();

  const CreateMagazin = () => {
    history.push("/hub/AddUserProfile");
  };
  return (
    <div>
      <form action="">
        <div class="">
          <h3 className="magazin-heading">
            <i class="bi bi-people design_icon"></i> View User Profile
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
                  Add User Profile
                </button>
              </div>
            </div>
          </div>
          <div className="magazinName">
            <input type="text" placeholder="Name" className="maga_name"></input>
          </div>
          <div class="text-center coupon-data mobileresponsive">
            <table class="table table-dark table-striped align-middle coupon-table table-bordered border text-center">
              <thead>
                <tr class="text-center">
                  <th scope="col">SL. No.</th>
                  <th scope="col">User Name </th>
                  <th scope="col">Mobile No</th>
                  <th scope="col">Privilage</th>
                  <th scope="col">Status</th>
                  <th scope="col">SL No</th>
                  <th scope="col">Created on</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody >
                <tr>
                  <th scope="row">1</th>
                  <td >Shyam Sundar Sahoo</td>
                  <td> </td>
                  <td> User </td>
                  <td>
                    <button type="submit" className="btn-Previous">
                      Inactive
                    </button>{" "}
                  </td>
                  <td>0</td>
                  <td>15-Apr-2015</td>
                  <td>
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div className="coupon-data">
            <table className="coupon-table">
              <tr className="coupon-tr">
                <th className="pd-10">Journal Name</th>
                <th>Author</th>
                <th>Status</th>
                <th>No Of Volume</th>
                <th>Type</th>
              </tr>

              <tr className="coupon-tr">
                <td></td>

                <td className="coupon_td">No Record</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div> */}

          <div className="btn-row">
            <div className="col-md-8">
              <div className="ShowEntries">
                <p className="Entries">Showing 0 to 1 of 1 entries</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="btn-tagle">
                <button type="submit" className="btn-Previous">
                  Previous
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

export default UserProfiles;
