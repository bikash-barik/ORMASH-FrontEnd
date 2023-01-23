import React from "react";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

const Gallery = ({ dispatch }) => {
  const history = useHistory();

  const AddGallery = () => {
    history.push("/hub/AddGallery");
  };

  // const UpdatetheLinks = () =>{
  //   alert("Please select a record!")
  // }
  return (
    <div>
      <form action="">
        <div class="">
          <h3 className="magazin-heading">
            <i class="bi bi-people design_icon"></i>View Gallery
          </h3>
          <div className="btn-row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <div className="btn-position">
                <button
                  type="submit"
                  className="btn-coupon-free"
                  onClick={AddGallery}
                >
                  Add Gallery
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
                  <th className="p-2">Headline</th>
                  <th className="p-2"> Photos</th>
                  <th className="p-2">Category</th>
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
                  <td className="p-5">SISIR SARAS 2023</td>
                  <td className="p-5">
                    {" "}
                    <a href="" className="text-danger">
                      <img
                        src="http://ormas.org/Application/uploadDocuments/Gallery/ORMAS_Gallery_1674214826.jpg"
                        height="80px"
                      />{" "}
                    </a>
                  </td>
                  <td className="p-5"> Mass Marketing Mission</td>
                  <td className="p-5"> 19-Oct-2019</td>
                  <td className="p-5">Set</td>
                  <td className="p-5">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>
                <tr className="">
                  <td className="p-5">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-5">2</th>
                  <td className="p-5">SISIR SARAS 2023</td>
                  <td className="p-5">
                    {" "}
                    <a href="" className="text-danger">
                      <img
                        src="http://ormas.org/Application/uploadDocuments/Gallery/ORMAS_Gallery_1674214826.jpg"
                        height="80px"
                      />{" "}
                    </a>
                  </td>
                  <td className="p-5"> Mass Marketing Mission</td>
                  <td className="p-5"> 19-Oct-2019</td>
                  <td className="p-5">Set</td>
                  <td className="p-5">
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                </tr>

                <tr className="">
                  <td className="p-5">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-5">3</th>
                  <td className="p-5">SISIR SARAS 2023</td>
                  <td className="p-5">
                    {" "}
                    <a href="" className="text-danger">
                      <img
                        src="http://ormas.org/Application/uploadDocuments/Gallery/ORMAS_Gallery_1674214826.jpg"
                        height="80px"
                      />{" "}
                    </a>
                  </td>
                  <td className="p-5"> Mass Marketing Mission</td>
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

export default Gallery;
