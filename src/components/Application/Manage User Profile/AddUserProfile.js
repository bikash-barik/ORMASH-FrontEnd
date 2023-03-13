import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import ErrorMessage from "../../ErrorMessage";
import { APIURL } from "../../../Redux/APIURL";
const AddUserProfile = ({ dispatch }) => {
  const history = useHistory();
  const params = useParams();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [subUser, setSubUsers] = useState({
    pic: "",
    name: "",
    sl_no: 0,
    gender: "",
    date_of_birth: "",
    office_phone: "",
    status: "",
    mobile_no: "",
    email: "",
    username: "",
    password: "",
    privilege: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const {
    pic,
    name,
    gender,
    sl_no,
    date_of_birth,
    office_phone,
    status,
    mobile_no,
    email,
    username,
    password,
    privilege,
  } = subUser;

  const addSubUser = async (e) => {
    e.preventDefault();
    try {
      if (
        pic &&
        name &&
        gender &&
        sl_no &&
        date_of_birth &&
        office_phone &&
        status &&
        mobile_no &&
        email &&
        username &&
        password &&
        privilege
      ) {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        await axios.post(`${APIURL}/api/subUsers`, subUser, config);
        setSubUsers({
          pic: "",
          name: "",
          sl_no: 0,
          gender: "",
          date_of_birth: "",
          office_phone: "",
          status: "",
          mobile_no: "",
          email: "",
          username: "",
          password: "",
          privilege: "",
        });
        history.push("/hub/UserProfile");
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
  const updateSubUser = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.put(
        `${APIURL}/api/subUsers/profile/${params.id}`,
        subUser,
        config
      );
      setSubUsers({
        pic: "",
        name: "",
        sl_no: 0,
        gender: "",
        date_of_birth: "",
        office_phone: "",
        status: "",
        mobile_no: "",
        email: "",
        username: "",
        password: "",
        privilege: "",
      });
      history.push("/hub/UserProfile");
    } catch (error) {
      console.log(error);
      const msg = error.response?.data?.message;
      setErrorMsg(msg);
    }
  };
  const handleChange = (event) => {
    setSubUsers({
      ...subUser,
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
        .get(`${APIURL}/api/subUsers/${params.id}`, config)
        .then((res) => {
          setSubUsers(res.data);
          console.log(subUser);
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

  const Cancel = () => {
    history.push("/hub/UserProfile");
  };
  return (
    <>
      <form action="">
        <div class="magazin-container">
          {/* <h1 className="magazin-heading">Add User Profile</h1> */}
          {params.id ? (
            <h1 className="magazin-heading"> Update User Profile</h1>
          ) : (
            <h1 className="magazin-heading">Add User Profile</h1>
          )}
          <hr />
          {errorMsg && <ErrorMessage variant="danger">{errorMsg}</ErrorMessage>}
          <div className="border border-2 d-flex bg-light h3  p-2">
            Personal Details
          </div>
          <form class="row g-3 d-flex justify-content-between">
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Full Name"
                value={name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="col-md-2">
              <label for="inputPassword4" class="form-label">
                SL No.
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="SL Number"
                required
                value={sl_no}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="col-md-2">
              <label for="inputState" class="form-label">
                Gender
              </label>
              <select
                id="inputState"
                class="form-select p-1"
                value={gender}
                onChange={(e) => handleChange(e)}
              >
                <option selected>Choose...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputAddress2" class="form-label ">
                DOB
              </label>
              <input
                type="date"
                class="form-control p-1"
                id="inputAddress2"
                placeholder="DOB"
                value={date_of_birth}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div class="col-md-3 mb-5">
              <label for="inputZip" class="form-label">
                Upload pic
              </label>
              <input
                type="file"
                class="form-control p-1"
                aria-label="file example"
                
                // value={pic}
                // onChange={(e) => handleChange(e)}
              />
            </div>
          </form>

          <div className="border border-2 d-flex bg-light h3  p-2">
            Contact Details
          </div>
          <form class="row g-3 d-flex justify-content-between">
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                Office Phone/Ext No.
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Office Phone/Ext No."
                value={office_phone}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="col-md-3">
              <label for="inputPassword4" class="form-label">
                Mobile No.
              </label>
              <input
                type="text"
                class="form-control "
                id="input"
                placeholder=" Mobile No."
                value={mobile_no}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="col-md-3 mb-5">
              <label for="inputState" class="form-label">
                email
              </label>
              <input
                type="email"
                class="form-control p-1"
                id="inputAddress"
                placeholder="example@domain.com"
                value={email}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </form>

          <div className="border border-2 d-flex bg-light h3  p-2">
            Login Details
          </div>
          <form class="row g-3 d-flex justify-content-between mb-3">
            <div class="col-md-4">
              <label for="inputEmail4" class="form-label">
                User ID
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="  User ID"
                value={username}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="col-md-3">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control p-1 "
                id="input"
                placeholder=" Password"
                value={password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="col-md-3 mb-5">
              <label for="inputState" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                class="form-control p-1 "
                id="input"
                placeholder="Confirm Password"
                value={password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="col-md-3">
              <label for="inputState" class="form-label">
                Previlage
              </label>
              <div class="form-check ">
                <input
                  class="form-check-input p-1 m-1"
                  type="checkbox"
                  id="flexCheckDefault"
                  value={privilege}
                  onChange={(e) => handleChange(e)}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Supper Admin
                </label>
              </div>
            </div>
          </form>

          <div className="btn">
            {/* <button type="submit" className="Submit-btn">
              Submit
            </button>
            <button onClick={Cancel} type="submit" className="Cancel-btn">
              Cancel   
            </button> */}
            {params.id ? (
              <button
                type="submit"
                className="Submit-btn"
                onClick={(e) => updateSubUser(e)}
              >
                Update
              </button>
            ) : (
              <button
                type="submit"
                className="Submit-btn"
                onClick={(e) => addSubUser(e)}
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

export default AddUserProfile;
