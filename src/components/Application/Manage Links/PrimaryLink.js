import React from "react";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

const GlowbalLink = ({ dispatch }) => {
  const history = useHistory();

  const CreateMagazin = () => {
    history.push("/hub/AddPrimaryLink");
  };

  // const UpdatetheLinks = () =>{
  //   alert("Please select a record!")
  // }
  return (
    <div>
      <form action="">
        <div class="">
          <h3 className="magazin-heading">
            <i class="bi bi-people design_icon"></i>View Global Link
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
          <div className="border border-2 d-flex bg-light   p-2">
          <span className="m-1">Select Global Link</span>  
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
              className="border rounded table-secondary text-center mt-5"
            >
              <thead>
                <tr>
                  <th className="p-2"></th>
                  <th className="p-2">Sl.# </th>
                  <th className="p-2">Link Name</th>
                  <th className="p-2"> Link No</th>
                  <th className="p-2"> Link Type</th>
                  <th className="p-2"> Function/URL</th>
                  <th className="p-2"> Window Status</th>
                  <th className="p-2"> View Status </th>
                  <th className="p-2">Created on</th>
                  <th className="p-2"> Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1">
                  <Form.Check aria-label="option 1"/>
                  </td>
                  <th className="p-1">1</th>
                  <td className="p-1">Organisation</td>

                  <td className="p-1">1</td>
                  <td className="p-1">Internal</td>
                  <td className="p-1"> Content Management</td>
                  <td className="p-1"> Same </td>
                  <td className="p-1"> Main </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                  <Form.Check aria-label="option 1"/>
                  </td>
                  <th className="p-1">2</th>
                  <td className="p-1">Mission and Vision</td>

                  <td className="p-1">1</td>
                  <td className="p-1">Internal</td>
                  <td className="p-1"> Content Management</td>
                  <td className="p-1"> Same </td>
                  <td className="p-1"> Main </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                  <Form.Check aria-label="option 1"/>
                  </td>
                  <th className="p-1">3</th>
                  <td className="p-1">Official Contact Details</td>
                  <td className="p-1">1</td>
                  <td className="p-1">Internal</td>
                  <td className="p-1"> Content Management</td>
                  <td className="p-1"> Same </td>
                  <td className="p-1"> Main </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                  <Form.Check aria-label="option 1"/>
                  </td>
                  <th className="p-1">3</th>
                  <td className="p-1">Organogram</td>
                  <td className="p-1">1</td>
                  <td className="p-1">Internal</td>
                  <td className="p-1"> Content Management</td>
                  <td className="p-1"> Same </td>
                  <td className="p-1"> Main </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                  <Form.Check aria-label="option 1"/>
                  </td>
                  <th className="p-1">4</th>
                  <td className="p-1">Activities</td>
                  <td className="p-1">1</td>
                  <td className="p-1">Internal</td>
                  <td className="p-1"> Content Management</td>
                  <td className="p-1"> Same </td>
                  <td className="p-1"> Main </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                  <Form.Check aria-label="option 1"/>
                  </td>
                  <th className="p-1">5</th>
                  <td className="p-1">Organogram</td>
                  <td className="p-1">1</td>
                  <td className="p-1">Internal</td>
                  <td className="p-1"> Content Management</td>
                  <td className="p-1"> Same </td>
                  <td className="p-1"> Main </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                  <Form.Check aria-label="option 1"/>
                  </td>
                  <th className="p-1">6</th>
                  <td className="p-1">Exhibition Calender</td>
                  <td className="p-1">1</td>
                  <td className="p-1">Internal</td>
                  <td className="p-1"> Content Management</td>
                  <td className="p-1"> Same </td>
                  <td className="p-1"> Main </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                  <Form.Check aria-label="option 1"/>
                  </td>
                  <th className="p-1">7</th>
                  <td className="p-1">Reports</td>
                  <td className="p-1">1</td>
                  <td className="p-1">Internal</td>
                  <td className="p-1"> Content Management</td>
                  <td className="p-1"> Same </td>
                  <td className="p-1"> Main </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                  <Form.Check aria-label="option 1"/>
                  </td>
                  <th className="p-1">8</th>
                  <td className="p-1">Activities</td>
                  <td className="p-1">1</td>
                  <td className="p-1">Internal</td>
                  <td className="p-1"> Content Management</td>
                  <td className="p-1"> Same </td>
                  <td className="p-1"> Main </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                  <Form.Check aria-label="option 1"/>
                  </td>
                  <th className="p-1">9</th>
                  <td className="p-1">Activities</td>
                  <td className="p-1">1</td>
                  <td className="p-1">Internal</td>
                  <td className="p-1"> Content Management</td>
                  <td className="p-1"> Same </td>
                  <td className="p-1"> Main </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-1">
                  <Form.Check aria-label="option 1"/>
                  </td>
                  <th className="p-1">10</th>
                  <td className="p-1">Activities</td>
                  <td className="p-1">1</td>
                  <td className="p-1">Internal</td>
                  <td className="p-1"> Content Management</td>
                  <td className="p-1"> Same </td>
                  <td className="p-1"> Main </td>
                  <td className="p-1">29-Nov-2014</td>
                  <td className="p-1">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
              </tbody>
            </Table>


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
                <p className="Entries">Showing 0 to 1 of 10 entries</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="btn-tagle">
                <button type="submit"  className="btn-Previous">
                  Update The Links
                </button>
                {/* <button type="submit" className="btn-Next">
                  Next
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GlowbalLink;
