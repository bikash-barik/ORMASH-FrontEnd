import {
  Banners_CREATE_FAIL,
  Banners_CREATE_REQUEST,
  Banners_CREATE_SUCCESS,
  Banners_DELETE_FAIL,
  Banners_DELETE_REQUEST,
  Banners_DELETE_SUCCESS,
  Banners_LIST_FAIL,
  Banners_LIST_REQUEST,
  Banners_LIST_SUCCESS,
  Banners_UPDATE_FAIL,
  Banners_UPDATE_REQUEST,
  Banners_UPDATE_SUCCESS,
} from "../../constants/Manage Application/bannersConstants";
import axios from "axios";
import { APIURL } from "../../APIURL";

export const listbanners = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Banners_LIST_REQUEST,
    });

    const response = await axios.get(`${APIURL}/api/banners`);

    dispatch({
      type: Banners_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Banners_LIST_FAIL,
      payload: message,
    });
  }
};

export const createBannerAction = ( sl_no, caption, banner, publish_status ) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: Banners_CREATE_REQUEST,
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
      `${APIURL}/api/banners/create`,
      { sl_no, caption, banner, publish_status },
      config
    );

    dispatch({
      type: Banners_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Banners_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deleteBannerAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Banners_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`${APIURL}/api/banners/${id}`, config);

    dispatch({
      type: Banners_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Banners_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateBannerAction = (id, sl_no, caption, banner, publish_status ) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: Banners_UPDATE_REQUEST,
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
      `${APIURL}/api/banners/${id}`,
      { sl_no, caption, banner, publish_status },
      config
    );

    dispatch({
      type: Banners_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Banners_UPDATE_FAIL,
      payload: message,
    });
  }
};
