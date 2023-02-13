import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
const AddGlonalLink = ({ dispatch }) => {
  const history = useHistory();
  const params = useParams();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [globalLinks, setGlobalLinks] = useState({
    link_name: "",
    sl_no: 0,
    link_type: "",
    function_name: "",
    window_status: "",
    view_in_menu_item: "",
    view_in_footer_link: false,
    publish_status: ""
  });
  const Cancel = () => {
    history.push("/hub/GlowbalLink");
  };
  const addGlobalLink = async (e) => {
    e.preventDefault();
    try {
      // console.log(globalLinks);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const data = await axios.post("/api/globallinks/", globalLinks, config);
      console.log(data);
      history.push("/hub/GlowbalLink");
    } catch (error) {
      console.log(error)
    }
  }
  const updateGlobalLink = async (e) => {
    e.preventDefault();
    try {
      // console.log(globalLinks);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const data = await axios.put(`/api/globallinks/${params.id}`, globalLinks, config);
      console.log(data);
      history.push("/hub/GlowbalLink");
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = event => {

    setGlobalLinks({
      ...globalLinks,
      [event.target.name]: event.target.value
    });
    // console.log(globalLinks);
  };
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    axios.get(`/api/globallinks//${params.id}`, config)
      .then(res => {

        setGlobalLinks(res.data.globalLink)
        console.log(globalLinks)
      })
      .catch(err => {
        console.log(err)
      })
  }, [params.id, userInfo.token])
  return (
    <>
      <form action="">
        <div class="magazin-container">
          <h1 className="magazin-heading">Add Global Link</h1>

          <hr />


          <form class="row g-3 d-flex justify-content-between mb-5 mt-5">
            <div class="col-md-3">
              <label for="inputState" class="form-label">
                Select Global Link
              </label>
              <select id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option>Home</option>
                <option>About Us</option>
                <option>DDU-GKY</option>
                <option>Activities</option>
                <option>Products</option>
                <option>Exhibition</option>
                <option>Tender</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                Link Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Link Name"
                name="link_name"
                value={globalLinks.link_name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                Sl. No. of Link
              </label>
              <select value={globalLinks.sl_no}
                onChange={(e) => handleChange(e)} name="sl_no" id="inputState" class="form-select p-1">
                <option selected>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>

            <div class="col-md-2 mb-3">
              <label for="inputState" class="form-label">
                Link Type
              </label>
              <select name="link_type" id="inputState" class="form-select p-1" value={globalLinks.link_type}
                onChange={(e) => handleChange(e)}>
                <option selected>Choose...</option>
                <option> Internal</option>
                <option> External</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Function Name
              </label>
              <select name="function_name" id="inputState" class="form-select p-1" value={globalLinks.function_name}
                onChange={(e) => handleChange(e)}>
                <option selected>Choose...</option>
                <option>Achivements</option>
                <option>ArcNews</option>
                <option>ArcTender</option>
                <option>Content Management</option>
                <option>Feeedback</option>
                <option>Image Gallery</option>
                <option>Important Links</option>
                <option>News</option>
                <option>SiteMap</option>
                <option>Tender</option>
                <option> Video</option>
                <option> External</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Window Status
              </label>
              <select name="window_status" id="inputState" class="form-select p-1" value={globalLinks.window_status}
                onChange={(e) => handleChange(e)}>
                <option selected>Choose...</option>
                <option>Same</option>
                <option> New</option>
              </select>
            </div>


            <div class="col-md-3">
              <label for="inputState" class="form-label">
                Publish Status
              </label>
              <select name="publish_status" id="inputState" class="form-select p-1" value={globalLinks.publish_status
              }
                onChange={(e) => handleChange(e)}>
                <option selected>Choose...</option>
                <option>Active   </option>
                <option> Inactive</option>

              </select>
            </div>
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">
                View In Menu Item
              </label>
              <input
                type="text"
                class="form-control"
                id="inputView"
                placeholder="View In Menu Item"
                name="view_in_menu_item"
                value={globalLinks.view_in_menu_item}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="col-md-3">
              <label for="inputEmail4" class="form-label">
                View In Footer Link
              </label>
              <select name="view_in_footer_link" id="inputState" class="form-select p-1" value={globalLinks.view_in_footer_link}
                onChange={(e) => handleChange(e)}>
                <option selected>Choose...</option>
                <option>true</option>
                <option>false</option>
              </select>
            </div>

          </form>

          <div className="btn mt-2">
            {params.id ? (<button type="submit" className="Submit-btn" onClick={e => updateGlobalLink(e)}>
              Update
            </button>) : (<button type="submit" className="Submit-btn" onClick={e => addGlobalLink(e)}>
              Submit
            </button>)}

            <button onClick={Cancel} type="submit" className="Cancel-btn">
              Cancel
            </button>
          </div>


        </div>
      </form>
    </>
  );
};

export default AddGlonalLink;
