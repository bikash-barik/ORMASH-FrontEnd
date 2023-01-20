import React from "react";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

const OfficerProfileDetails = ({ dispatch }) => {
  const history = useHistory();

  const CreateMagazin = () => {
    history.push("/hub/AddOfficerProfile");
  };

  // const UpdatetheLinks = () =>{
  //   alert("Please select a record!")
  // }
  return (
    <div>
      <form action="">
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
              className="border rounded text-center mt-5"
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
              <tbody className="">
                <tr className="">
                  <td className="p-5">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-5">1</th>
                  <td className="p-5"> Shri Pradip Kumar Amat</td>
                  <td className="p-5"> Honorable Minister, PR & DW Dept.</td>
                  <td className="p-5"> 1</td>
                  <td className="p-5"> 14-Oct-2019</td>
                  <td className="p-1">
                    <img
                      src="http://ormas.org/Application/uploadDocuments/OfficerImage/ORMAS_1655542431.jpg"
                      height="75px"
                      width="80px"
                      alt=""
                    />
                  </td>
                  <td className="p-5">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="p-5">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-5">2</th>
                  <td className="p-5"> Shri Sushil Kumar Lohani, IAS</td>
                  <td className="p-5"> Principal Secretary, PR & DW Deptt</td>
                  <td className="p-5"> 2</td>
                  <td className="p-5"> 14-Oct-2019</td>
                  <td className="p-1">
                    <img
                      src="http://ormas.org/Application/uploadDocuments/OfficerImage/ORMAS_1662217531.jpg"
                      height="75px"
                      width="80px"
                      alt=""
                    />
                  </td>
                  <td className="p-5">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>

                <tr>
                  <td className="p-5">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-5">3</th>
                  <td className="p-5"> Ms Guha Poonam Tapas Kumar, IAS</td>{" "}
                  <td className="p-5"> Chief Executive Officer</td>
                  <td className="p-5">3</td>
                  <td className="p-5"> 14-Oct-2019</td>
                  <td className="p-1">
                    <img
                      src="http://ormas.org/Application/uploadDocuments/OfficerImage/ORMAS_1665726329.jpg"
                      height="75px"
                      width="80px"
                      alt=""
                    />
                  </td>
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

export default OfficerProfileDetails;
