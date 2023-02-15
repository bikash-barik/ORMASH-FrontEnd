import {
  Logos_CREATE_FAIL,
  Logos_CREATE_REQUEST,
  Logos_CREATE_SUCCESS,
  Logos_DELETE_FAIL,
  Logos_DELETE_REQUEST,
  Logos_DELETE_SUCCESS,
  Logos_LIST_FAIL,
  Logos_LIST_REQUEST,
  Logos_LIST_SUCCESS,
  Logos_UPDATE_FAIL,
  Logos_UPDATE_REQUEST,
  Logos_UPDATE_SUCCESS,
} from "../../constants/Manage Application/logosConstants";
import axios from "axios";

export const listlogos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Logos_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/logos`, config);

    dispatch({
      type: Logos_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Logos_LIST_FAIL,
      payload: message,
    });
  }
};

export const createLogoAction = ( sl_no, logo_title, photo, home_page_status, publish_status ) => async ( dispatch, getState ) => {
  try {
    dispatch({
      type: Logos_CREATE_REQUEST,
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
      `/api/logos`,
      { sl_no, logo_title, photo, home_page_status, publish_status },
      config
    );

    dispatch({
      type: Logos_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Logos_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deleteLogoAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Logos_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/logos/${id}`, config);

    dispatch({
      type: Logos_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Logos_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateLogoAction = (id, sl_no, logo_title, photo, home_page_status, publish_status ) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: Logos_UPDATE_REQUEST,
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
      `/api/logos/${id}`,
      { sl_no, logo_title, photo, home_page_status, publish_status },
      config
    );

    dispatch({
      type: Logos_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Logos_UPDATE_FAIL,
      payload: message,
    });
  }
};
