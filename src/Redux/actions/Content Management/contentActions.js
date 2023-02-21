import {
  Contents_CREATE_FAIL,
  Contents_CREATE_REQUEST,
  Contents_CREATE_SUCCESS,
  Contents_DELETE_FAIL,
  Contents_DELETE_REQUEST,
  Contents_DELETE_SUCCESS,
  Contents_LIST_FAIL,
  Contents_LIST_REQUEST,
  Contents_LIST_SUCCESS,
  Contents_UPDATE_FAIL,
  Contents_UPDATE_REQUEST,
  Contents_UPDATE_SUCCESS,
} from "../../constants/Content Management/contentsConstants";
import axios from "axios";
import { APIURL } from "../../APIURL";

export const listcontents = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Contents_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${APIURL}/api/content`, config);

    dispatch({
      type: Contents_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Contents_LIST_FAIL,
      payload: message,
    });
  }
};

export const createContentAction = ( global_link, primary_link, title, content ) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: Contents_CREATE_REQUEST,
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
      `${APIURL}/api/content`,
      { global_link, primary_link, title, content },
      config
    );

    dispatch({
      type: Contents_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Contents_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deleteContentAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Contents_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`${APIURL}/api/content/${id}`, config);

    dispatch({
      type: Contents_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Contents_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateContentAction = (id, global_link, primary_link, title, content ) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: Contents_UPDATE_REQUEST,
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
      `${APIURL}/api/content/${id}`,
      { global_link, primary_link, title, content },
      config
    );

    dispatch({
      type: Contents_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Contents_UPDATE_FAIL,
      payload: message,
    });
  }
};
