import React from "react";
import { useHistory } from "react-router-dom";

const Employee = ({ dispatch }) => {
  const history = useHistory();

  const AddEmpluyee = () => {
    history.push("/hub/AddEmployee");
  };
  return (
    <div>
      <form action="">
        <div class="">
          <h3 className="magazin-heading">
            <i class="bi bi-people design_icon"></i> Employee Details
          </h3>
          <div className="btn-row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <div className="btn-position">
                <button
                  type="submit"
                  className="btn-coupon-free"
                  onClick={AddEmpluyee}
                >
                  Add Employee
                </button>
              </div>
            </div>
          </div>
          <div className="magazinName">
            <input type="text" placeholder="Name" className="maga_name"></input>
          </div>
          <div class="text-center coupon-data mobileresponsive table-responsive">
            <table class="table table-secondary table-striped align-middle  table-hover align-middle coupon-table table-bordered border text-center">
              <thead class="text-center">
                <tr class="text-center">
                  <th scope="col" className="px-5">SL. No.</th>
                  <th scope="col" className="px-5">UserName </th>
                  <th scope="col" className="px-5">Age</th>
                  <th scope="col" className="px-5">Gender</th>
                  <th scope="col" className="px-5">DOB</th>
                  <th scope="col" className="px-5">Office Phone/Ext No.</th>
                  <th scope="col" className="px-5">Mobile No.</th>
                  <th scope="col" className="px-5">email</th>
                  <th scope="col" className="px-5">Address</th>
                  <th scope="col" className="px-5">Document If</th>
                  <th scope="col" className="px-5">Emp ID</th>
                  <th scope="col" className="px-5">Department</th>
                  <th scope="col" className="px-5">Designation</th>
                  <th scope="col" className="px-5">Date Of Joining</th>
                  <th scope="col" className="px-5">Date Of Retirement</th>
                  <th scope="col" className="px-5">Rejoining Status</th>
                  <th scope="col" className="px-5">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td className="px-5">ShyamSundarSahoo</td>
                  <td className="px-5"> 23</td>
                  <td className="px-5"> Male</td>
                  <td className="px-5">28/02/1995</td>
                  <td className="px-5"> vccxjhzcxvhj </td>
                  <td className="px-5">984465416498 </td>
                  <td className="px-5">shyam@gmail.com</td>
                  <td className="px-5"> Bhubaneswar</td>
                  <td className="px-5"> No... </td>
                  <td className="px-5">Edfjsdijn</td>
                  <td className="px-5">CSE </td>
                  <td className="px-5"> Devloper </td>
                  <td className="px-5">28/05/2022</td>
                  <td className="px-5">28/05/2029</td>
                  <td className="px-5">No</td>
                  <td className="px-5">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td className="px-5">ShyamSundarSahoo</td>
                  <td className="px-5"> 23</td>
                  <td className="px-5"> Male</td>
                  <td className="px-5">28/02/1995</td>
                  <td className="px-5"> vccxjhzcxvhj </td>
                  <td className="px-5">984465416498 </td>
                  <td className="px-5">shyam@gmail.com</td>
                  <td className="px-5"> Bhubaneswar</td>
                  <td className="px-5"> No... </td>
                  <td className="px-5">Edfjsdijn</td>
                  <td className="px-5">CSE </td>
                  <td className="px-5"> Devloper </td>
                  <td className="px-5">28/05/2022</td>
                  <td className="px-5">28/05/2029</td>
                  <td className="px-5">No</td>
                  <td className="px-5">
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

export default Employee;
