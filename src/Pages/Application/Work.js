import React from "react";
import { useHistory } from "react-router-dom";

const Work = ({ dispatch }) => {
  const history = useHistory();

  const Assignwork = () => {
    history.push("/hub/Assignwork");
  };
  return (
    <div>
      <form action="">
        <div class="">
          <h3 className="magazin-heading">
            <i class="bi bi-people design_icon"></i> Works
          </h3>
          <div className="btn-row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <div className="btn-position">
                <button
                  type="submit"
                  className="btn-coupon-free"
                  onClick={Assignwork}
                >
                 Assign work
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
                  <th scope="col" className="px-5">Name Of The Employee</th>
                  <th scope="col" className="px-5">Assign Work</th>
                  <th scope="col" className="px-5">Date Of The Assign</th>
                  <th scope="col" className="px-5">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td className="px-5">ShyamSundarSahoo</td>
                  <td className="px-5"> Website</td>
                  <td className="px-5">28/02/1995</td>
                  <td className="px-5">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td className="px-5">ShyamSundarSahoo</td>
                  <td className="px-5"> Website</td>
                  <td className="px-5">28/02/1995</td>
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

export default Work;
