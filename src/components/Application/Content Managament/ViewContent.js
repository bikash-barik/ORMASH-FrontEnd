import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useSelector } from "react-redux";
const ViewContent = ({ dispatch }) => {
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
 const [data, setData] = useState([])
  const CreateMagazin = () => {
    history.push("/hub/AddContent");
  };
  const getData = async () => {
    try {
      const response = await axios.get("/api/content/")
      console.log(response);
      setData(response.data.contents);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {

    getData()

  }, [])
  const clickHandler = (id) => {
    history.push(`/hub/AddContent/${id}`)
  }

  const deleteHandler = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      if (window.confirm("Are you sure?")) {
        await axios.delete(`/api/content/${id}`, config);
        getData()
      }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form action="">
        <div class="">
          <h3 className="magazin-heading">
            <i class="bi bi-people design_icon"></i>View Content
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
                  Add Content
                </button>
              </div>
            </div>
          </div>
          <div className="magazinName">
            <div className="border border-2 d-flex bg-light   p-2">
              <span className="m-1">Global Link	</span>
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

              <span className="m-1">Primary Link		</span>
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
                  <th className="p-2"> Title</th>
                  <th className="p-2"> Global Link</th>
                  <th className="p-2"> Primary Link</th>
                  <th className="p-2">Publish Status </th>
                  <th className="p-2"> Edit</th>
                  <th className="p-2"> Delete</th>
                </tr>
              </thead>
              <tbody>
              {data.length > 0 && data.map((item,i)=>(
                <tr key={i}>
                  <td className="p-1">
                    <Form.Check aria-label="option 1" />
                  </td>
                  <th className="p-1">{item.title}</th>
                  <td className="p-1">{item.global_link}</td>
                  <td className="p-1">{item.primary_link}</td>
                  <td className="p-1">{item.publish_status}</td>
                  <td className="p-1" onClick={() => clickHandler(item._id)}>
                    <i class="bi bi-pencil-square"></i>{" "}
                  </td>
                  <td className="p-1" onClick={() => deleteHandler(item._id)}>
                    <i class="bi bi-trash"></i>{" "}
                  </td>
                </tr>
              ))}
             
          
            
              
            
           
           
              
            
             
             
              </tbody>
            </Table>
          </div>
          

          <div className="btn-row">
            <div className="col-md-8">
              <div className="ShowEntries">
                {data.length > 0 ? (<p className="Entries"> {data.length} Entries Available</p>) : (<p className="Entries"> 0  Entries Available</p>)}
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="btn-tagle">
                <button type="submit" className="btn-Previous">
                 Back
                </button>
                <button type="submit" className="btn-Next">
                  Next
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ViewContent;
