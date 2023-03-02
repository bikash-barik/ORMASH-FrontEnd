import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import ErrorMessage from "../../ErrorMessage";
import { APIURL } from "../../../Redux/APIURL";
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
    publish_status: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const Cancel = () => {
    history.push("/hub/GlowbalLink");
  };
  const {
    link_name,
    link_type,
    sl_no,
    function_name,
    window_status,
    view_in_footer_link,
    view_in_menu_item,
    publish_status,
  } = globalLinks;
  const addGlobalLink = async (e) => {
    e.preventDefault();
    try {
      if (
        link_name &&
        link_type &&
        sl_no &&
        function_name &&
        window_status &&
        view_in_footer_link &&
        view_in_menu_item &&
        publish_status
      ) {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        await axios.post(`${APIURL}/api/globallinks/`, globalLinks, config);
        setGlobalLinks({
          link_name: "",
          sl_no: 0,
          link_type: "",
          function_name: "",
          window_status: "",
          view_in_menu_item: "",
          view_in_footer_link: false,
          publish_status: "",
        });
        history.push("/hub/GlowbalLink");
        return;
      } else {
        setErrorMsg("Please fill all the fields");
      }
    } catch (error) {
      console.log(error);
      const msg = error.response?.data?.message;
      setErrorMsg(msg);
    }
  };
  const updateGlobalLink = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.put(`${APIURL}/api/globallinks/${params.id}`, globalLinks, config);
      setGlobalLinks({
        link_name: "",
        sl_no: 0,
        link_type: "",
        function_name: "",
        window_status: "",
        view_in_menu_item: "",
        view_in_footer_link: false,
        publish_status: "",
      });
      history.push("/hub/GlowbalLink");
    } catch (error) {
      console.log(error);
      const msg = error.response?.data?.message;
      setErrorMsg(msg);
    }
  };

  const handleChange = (event) => {
    setGlobalLinks({
      ...globalLinks,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    if (params.id) {
      axios
        .get(`${APIURL}/api/globallinks/${params.id}`, config)
        .then((res) => {
          setGlobalLinks(res.data.globalLink);
          console.log(globalLinks);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [params.id, userInfo.token]);
  useEffect(() => {
    setTimeout(() => {
      setErrorMsg("");
    }, 3000);
  }, [errorMsg]);

  return (
    <>
      <form action="">
        <div className="magazin-container d-block">
          {params.id ? (
            <h3 className="fs-15">
              <i class="bi bi-geo-alt-fill"></i>
              <span> Home / Manage Link / Global Link /</span>Update Global Link
            </h3>
          ) : (
            <h3 className="fs-19">
              <i class="bi bi-geo-alt-fill"></i>
              <span> Home / Manage Link / Global Link /</span>Add Global Link
            </h3>
          )}
          <p className="text-danger d-flex justify-content-end">
            (*) Indicates Mandatory Fields
          </p>
          <hr />

          {errorMsg && <ErrorMessage variant="danger">{errorMsg}</ErrorMessage>}

          <form class="row g-3 d-block justify-content-between mb-5 mt-5 ">
            <div class="row d-flex p-1">
              <div class="col-md-2">
                <label
                  for="inputState"
                  className="form-label"
                  // style={{ fontSize: "18px" }}
                >
                  Select Global Link :
                </label>
              </div>
              <div class="col-md-3 d-flex">
                <select
                  style={{ border: "solid 1px #000" }}
                  id="inputState"
                  class="form-select p-1"
                  name="link_name"
                  value={link_name}
                  onChange={(e) => handleChange(e)}
                >
                  <option selected>Choose...</option>
                  <option>Home</option>
                  <option>About Us</option>
                  <option>DDU-GKY</option>
                  <option>Activities</option>
                  <option>Products</option>
                  <option>Exhibition</option>
                  <option>Tender</option>
                </select>
                <p className="text-danger">(*) </p>
              </div>
            </div>
            {/* <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                Link Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Link Name"
                
              />
            </div> */}
            <div class="row d-flex p-1">
              <div class="col-md-2">
                <label for="inputState" class="form-label">
                  Sl. No. of Link
                </label>
              </div>
              <div class="col-md-3 d-flex">
                <select
                  value={sl_no}
                  onChange={(e) => handleChange(e)}
                  style={{ border: "solid 1px #000" }}
                  name="sl_no"
                  id="inputState"
                  class="form-select p-1"
                >
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
                <p className="text-danger">(*) </p>
              </div>
            </div>

            <div class="row d-flex p-1">
              <div class="col-md-2">
              <label for="inputState" class="form-label">
                Link Type
              </label>
              </div>
              <div class="col-md-3 d-flex">
              <select
                name="link_type"
                id="inputState"
                class="form-select p-1"
                style={{ border: "solid 1px #000" }}
                value={link_type}
                onChange={(e) => handleChange(e)}
              >
                <option selected>Choose...</option>
                <option> Internal</option>
                <option> External</option>
              </select>
              <p className="text-danger">(*) </p>
            </div>
            </div>
            <div class="row d-flex p-1">
              <div class="col-md-2">
              <label for="inputState" class="form-label">
                Function Name
              </label>
              </div>
              <div class="col-md-3 d-flex">
              <select
                name="function_name"
                id="inputState"
                class="form-select p-1"
                style={{ border: "solid 1px #000" }}
                value={function_name}
                onChange={(e) => handleChange(e)}
              >
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
              <p className="text-danger">(*) </p>
            </div>
            </div>

            <div class="row d-flex p-1">
              <div class="col-md-2">
              <label for="inputState" class="form-label">
                Window Status
              </label>
              </div>
              <div class="col-md-3 d-flex">
              <select
                name="window_status"
                id="inputState"
                class="form-select p-1"
                style={{ border: "solid 1px #000" }}
                value={window_status}
                onChange={(e) => handleChange(e)}
              >
                <option selected>Choose...</option>
                <option>Same</option>
                <option> New</option>
              </select>
              <p className="text-danger">(*) </p>
            </div>
            </div>

            <div class="row d-flex p-1">
              <div class="col-md-2">
              <label for="inputState" class="form-label">
                Publish Status
              </label>
              </div>
              <div class="col-md-3 d-flex">
              <select
                name="publish_status"
                id="inputState"
                class="form-select p-1"
                style={{ border: "solid 1px #000" }}
                value={publish_status}
                onChange={(e) => handleChange(e)}
              >
                <option selected>Choose...</option>
                <option>Active </option>
                <option> Inactive</option>
              </select>
              <p className="text-danger">(*) </p>
            </div>
            </div>

            <div class="row d-flex p-1">
              <div class="col-md-2">
              <label for="inputEmail4" class="form-label">
                View In Menu Item
              </label>
              </div>
              <div class="col-md-3 d-flex">
              <select
                id="inputState"
                class="form-select p-1"
                name="view_in_menu_item"
                style={{ border: "solid 1px #000" }}
                value={view_in_menu_item}
                onChange={(e) => handleChange(e)}
              >
                <option selected>Choose...</option>
                <option>Main Menu </option>
                <option> Top Menu </option>
                <option> Bottom Menu</option>
              </select>
              <p className="text-danger">(*) </p>
            </div>
            </div>

            <div class="row d-flex p-1">
              <div class="col-md-2">
              <label for="inputEmail4" class="form-label">
                View In Footer Link
              </label>
              </div>
              <div class="col-md-6 d-flex">
              <div class="form-check ">
                <input
                  class="form-check-input p-1 m-1"
                  type="checkbox"
                  id="flexCheckDefault"
                  name="view_in_footer_link"
                  style={{ border: "solid 1px #000" }}
                  value={view_in_footer_link}
                  onChange={(e) => handleChange(e)}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  (Check to add this link to footer menu)
                </label>
                <p className="text-danger">(*) </p>
              </div>
            </div>
            </div>

          </form>

          <div className="btn mt-2">
            {params.id ? (
              <button
                type="submit"
                className="Submit-btn"
                onClick={(e) => updateGlobalLink(e)}
              >
                Update
              </button>
            ) : (
              <button
                type="submit"
                className="Submit-btn"
                onClick={(e) => addGlobalLink(e)}
              >
                Submit
              </button>
            )}

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
