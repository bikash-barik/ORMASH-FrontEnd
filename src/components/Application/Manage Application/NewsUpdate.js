import React from "react";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

const NewsUpdate = ({ dispatch }) => {
  const history = useHistory();

  const AddNews = () => {
    history.push("/hub/AddNews");
  };

  // const UpdatetheLinks = () =>{
  //   alert("Please select a record!")
  // }
  return (
    <div>
      <form action="">
        <div class="">
          <h3 className="magazin-heading">
            <i class="bi bi-people design_icon"></i>View News
          </h3>
          <div className="btn-row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <div className="btn-position">
                <button
                  type="submit"
                  className="btn-coupon-free"
                  onClick={AddNews}
                >
                  Add News
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
                  <th className="p-2"> News Headline</th>
                  <th className="p-2"> Document</th>
                  <th className="p-2"> Expiry Date </th>
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
                  <td className="p-5">
                    CANCELLATION NOTICE to the Tender Call Notice No.688 dated
                    4.3.2021 and 1st Extension Notice No.975 dated 26.03.2021
                  </td>
                  <td className="p-5">
                    {" "}
                    <a
                      href="http://ormas.org/Application/uploadDocuments/News/ORMAS_NEWS_1618314993.pdf"
                      className="text-danger"
                      download
                    >
                      <img
                        src="https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g"
                        height="80px"
                      />{" "}
                    </a>
                  </td>
                  <td className="p-5"> 19-Oct-2019</td>
                  <td className="p-5"> 14-Oct-2019</td>
                  <td className="p-5">
                  Set
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
                  <td className="p-5">
                    CANCELLATION NOTICE to the Tender Call Notice No.688 dated
                    4.3.2021 and 1st Extension Notice No.975 dated 26.03.2021
                  </td>
                  <td className="p-5">
                    {" "}
                    <a
                      href="http://ormas.org/Application/uploadDocuments/News/ORMAS_NEWS_1618314993.pdf"
                      className="text-danger"
                      download
                    >
                      <img
                        src="https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g"
                        height="80px"
                      />{" "}
                    </a>
                  </td>
                  <td className="p-5"> 19-Oct-2019</td>
                  <td className="p-5"> 14-Oct-2019</td>
                  <td className="p-5">
                  Set
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
                  <td className="p-5">
                    CANCELLATION NOTICE to the Tender Call Notice No.688 dated
                    4.3.2021 and 1st Extension Notice No.975 dated 26.03.2021
                  </td>
                  <td className="p-5">
                    {" "}
                    <a
                      href="http://ormas.org/Application/uploadDocuments/News/ORMAS_NEWS_1618314993.pdf"
                      className="text-danger"
                      download
                    >
                      <img
                        src="https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g"
                        height="80px"
                      />{" "}
                    </a>
                  </td>
                  <td className="p-5"> 19-Oct-2019</td>
                  <td className="p-5"> 14-Oct-2019</td>
                  <td className="p-5">
                  Set
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

export default NewsUpdate;
