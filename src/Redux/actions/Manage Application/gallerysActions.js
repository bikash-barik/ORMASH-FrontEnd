import {
  Gallerys_CREATE_FAIL,
  Gallerys_CREATE_REQUEST,
  Gallerys_CREATE_SUCCESS,
  Gallerys_DELETE_FAIL,
  Gallerys_DELETE_REQUEST,
  Gallerys_DELETE_SUCCESS,
  Gallerys_LIST_FAIL,
  Gallerys_LIST_REQUEST,
  Gallerys_LIST_SUCCESS,
  Gallerys_UPDATE_FAIL,
  Gallerys_UPDATE_REQUEST,
  Gallerys_UPDATE_SUCCESS,
} from "../../constants/Manage Application/gallerysConstants";
import axios from "axios";

export const listGallerys = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Gallerys_LIST_REQUEST,
    });

    const response = await axios.get(`/api/gallerys`);

    dispatch({
      type: Gallerys_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Gallerys_LIST_FAIL,
      payload: message,
    });
  }
};

export const createGalleryAction = ( 
 headline,category, photo, status) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: Gallerys_CREATE_REQUEST,
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
      `/api/gallerys/create`,
      {  headline,category, photo, status },
      config
    );

    dispatch({
      type: Gallerys_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Gallerys_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deleteGalleryAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Gallerys_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/gallerys/${id}`, config);

    dispatch({
      type: Gallerys_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Gallerys_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateGalleryAction = (id, headline,category, photo, status) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: Gallerys_UPDATE_REQUEST,
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
      `/api/gallerys/${id}`,
      {  headline,category, photo, status },
      config
    );

    dispatch({
      type: Gallerys_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Gallerys_UPDATE_FAIL,
      payload: message,
    });
  }
};
