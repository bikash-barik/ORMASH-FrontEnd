import {
  Videos_CREATE_FAIL,
  Videos_CREATE_REQUEST,
  Videos_CREATE_SUCCESS,
  Videos_DELETE_FAIL,
  Videos_DELETE_REQUEST,
  Videos_DELETE_SUCCESS,
  Videos_LIST_FAIL,
  Videos_LIST_REQUEST,
  Videos_LIST_SUCCESS,
  Videos_UPDATE_FAIL,
  Videos_UPDATE_REQUEST,
  Videos_UPDATE_SUCCESS,
} from "../../constants/Manage Application/videosConstants";
import axios from "axios";
import { APIURL } from "../../APIURL";

export const listvideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Videos_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${APIURL}/api/videos`, config);

    dispatch({
      type: Videos_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Videos_LIST_FAIL,
      payload: message,
    });
  }
};

export const createVideoAction = (sl_no, headline, link_type, thumb_image, video, description, home_page_status) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Videos_CREATE_REQUEST,
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
      `${APIURL}/api/videos`,
      {  sl_no, headline, link_type, thumb_image, video, description, home_page_status },
      config
    );

    dispatch({
      type: Videos_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Videos_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deleteVideoAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Videos_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`${APIURL}/api/videos/${id}`, config);

    dispatch({
      type: Videos_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Videos_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateVideoAction = (id, sl_no, headline, link_type, thumb_image, video, description, home_page_status) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: Videos_UPDATE_REQUEST,
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
      `${APIURL}/api/videos/${id}`,
      {  sl_no, headline, link_type, thumb_image, video, description, home_page_status },
      config
    );

    dispatch({
      type: Videos_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Videos_UPDATE_FAIL,
      payload: message,
    });
  }
};
