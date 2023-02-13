import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

const GlowbalLink = ({ dispatch }) => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const CreateMagazin = () => {
    history.push("/hub/AddGlobalLink");
  };
  const getData = async () => {
    try {
      const response = await axios.get("/api/globallinks/")
      // console.log(response);
      setData(response.data.globalLinks);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {

    getData()

  },[])

const clickHandler = (id) =>{
  history.push(`/hub/AddGlobalLink/${id}`)
}

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
                  Add GlobalLinks
                </button>
              </div>
            </div>
          </div>
          <div className="magazinName">
            <input type="text" placeholder="Name" className="maga_name"></input>
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
                  {/* <th className="p-2">Created on</th> */}
                  <th className="p-2"> Edit</th>
                </tr>
              </thead>
              <tbody>

                {data.length > 0 && data.map((item) => (
                  <tr>
                    <td className="p-1">
                      <Form.Check aria-label="option 1" />
                    </td>
                    <th className="p-1">{`${item._id}`.split(0,5)}
                  </th>
                    <td className="p-1">{item.link_name} </td>

                    <td className="p-1">{item.sl_no}</td>
                    <td className="p-1">{item.link_type}</td>
                    <td className="p-1">{item.function_name}</td>
                    <td className="p-1"> {item.window_status}</td>
                    <td className="p-1"> {item.view_in_menu_item}</td>
                    {/* <td className="p-1">29-Nov-2014</td> */}
                    <td className="p-1" onClick={() => clickHandler(item._id)}>
                      <i class="bi bi-pencil-square"></i>{" "}
                    </td>
                  </tr>
                ))}









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
            {/* <div className="col-md-4">
              <div className="btn-tagle">
                <button type="submit" className="btn-Previous">
                  Update The Links
                </button>
              </div>
            </div> */}
            
          </div>
        </div>
      </form>
    </div>
  );
};

export default GlowbalLink;
