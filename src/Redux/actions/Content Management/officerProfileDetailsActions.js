import {
  OfficerProfileDetails_CREATE_FAIL,
  OfficerProfileDetails_CREATE_REQUEST,
  OfficerProfileDetails_CREATE_SUCCESS,
  OfficerProfileDetails_DELETE_FAIL,
  OfficerProfileDetails_DELETE_REQUEST,
  OfficerProfileDetails_DELETE_SUCCESS,
  OfficerProfileDetails_LIST_FAIL,
  OfficerProfileDetails_LIST_REQUEST,
  OfficerProfileDetails_LIST_SUCCESS,
  OfficerProfileDetails_UPDATE_FAIL,
  OfficerProfileDetails_UPDATE_REQUEST,
  OfficerProfileDetails_UPDATE_SUCCESS,
} from "../../constants/Content Management/officerProfileDetailsConstants";
import axios from "axios";

export const listOfficerProfileDetails = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: OfficerProfileDetails_LIST_REQUEST,
    });


    const response  = await axios.get(`/api/officersprofiles`);

    dispatch({
      type: OfficerProfileDetails_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: OfficerProfileDetails_LIST_FAIL,
      payload: message,
    });
  }
};

export const createOfficerProfileDetailAction = ( officername,
  designation,
  qualification,
  serial,
  createdon,
  photo) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: OfficerProfileDetails_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/officersprofiles/create`,
      {  officername,
        designation,
        qualification,
        serial,
        createdon,
        photo },
      config
    );

    dispatch({
      type: OfficerProfileDetails_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: OfficerProfileDetails_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deleteOfficerProfileDetailAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: OfficerProfileDetails_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/officersprofiles/${id}`, config);

    dispatch({
      type: OfficerProfileDetails_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: OfficerProfileDetails_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateOfficerProfileDetailAction = (id,  officername,
  designation,
  qualification,
  serial,
  createdon,
  photo) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: OfficerProfileDetails_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/officersprofiles/${id}`,
      {  officername,
        designation,
        qualification,
        serial,
        createdon,
        photo },
      config
    );

    dispatch({
      type: OfficerProfileDetails_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: OfficerProfileDetails_UPDATE_FAIL,
      payload: message,
    });
  }
};
