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

export const listNotes = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: OfficerProfileDetails_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/officersprofiles`, config);

    dispatch({
      type: OfficerProfileDetails_LIST_SUCCESS,
      payload: data,
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

export const createNoteAction = (title, content, category) => async (
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
      { title, content, category },
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

export const deleteNoteAction = (id) => async (dispatch, getState) => {
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

export const updateNoteAction = (id, title, content, category) => async (
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
      { title, content, category },
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
