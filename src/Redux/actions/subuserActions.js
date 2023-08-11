import {
  SUBUSER_LOGIN_FAIL,
  SUBUSER_LOGIN_REQUEST,
  SUBUSER_LOGIN_SUCCESS,
  SUBUSER_LOGOUT,
  SUBUSER_REGISTER_FAIL,
  SUBUSER_REGISTER_REQUEST,
  SUBUSER_REGISTER_SUCCESS,
  SUBUSER_UPDATE_FAIL,
  SUBUSER_UPDATE_REQUEST,
  SUBUSER_UPDATE_SUCCESS,
} from "../constants/subuserConstants";
import axios from "axios";

// const APIURL = "http://18.223.134.153:5000";
import { APIURL } from "../APIURL";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SUBUSER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,GET,OPTIONS, PUT, DELETE",
        "Access-Control-Allow-Headers": "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization",
      },
    };

    const { data } = await axios.post(
      `${APIURL}/api/subUsers/login`,
      { email, password },
      config
    );

    dispatch({ type: SUBUSER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SUBUSER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: SUBUSER_LOGOUT });
};

export const register = (name, sl_no, gender, date_of_birth, pic, office_phone, mobile_no, email, username, password, privilege, status) => async (dispatch) => {
  try {
    dispatch({ type: SUBUSER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
    };

    const { data } = await axios.post(
      `${APIURL}/api/subUsers`,
      { name, sl_no, gender, date_of_birth, pic, office_phone, mobile_no, email, username, password, privilege, status },
      config
    );

    dispatch({ type: SUBUSER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: SUBUSER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SUBUSER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const updateProfile = (user) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: SUBUSER_UPDATE_REQUEST });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const { data } = await axios.post(`${APIURL}/api/subUsers/profile`, user, config);

//     dispatch({ type: SUBUSER_UPDATE_SUCCESS, payload: data });

//     dispatch({ type: SUBUSER_LOGIN_SUCCESS, payload: data });

//     localStorage.setItem("userInfo", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: SUBUSER_UPDATE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };


export const updateProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: SUBUSER_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const updatedUser = {
      name: user.name,
      sl_no: user.sl_no,
      gender: user.gender,
      date_of_birth: user.date_of_birth,
      pic: user.pic,
      office_phone: user.office_phone,
      mobile_no: user.mobile_no,
      email: user.email,
      password: user.password,
      privilege: user.privilege,
      status: user.status,
    };

    const { data } = await axios.put(`${APIURL}/api/subUsers/profile/${userInfo._id}`, updatedUser, config);

    dispatch({ type: SUBUSER_UPDATE_SUCCESS, payload: data });

    // Update the user login state with the updated user data
    dispatch({ type: SUBUSER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SUBUSER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

