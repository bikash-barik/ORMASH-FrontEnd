import {
  NewsUpdates_CREATE_FAIL,
  NewsUpdates_CREATE_REQUEST,
  NewsUpdates_CREATE_SUCCESS,
  NewsUpdates_DELETE_FAIL,
  NewsUpdates_DELETE_REQUEST,
  NewsUpdates_DELETE_SUCCESS,
  NewsUpdates_LIST_FAIL,
  NewsUpdates_LIST_REQUEST,
  NewsUpdates_LIST_SUCCESS,
  NewsUpdates_UPDATE_FAIL,
  NewsUpdates_UPDATE_REQUEST,
  NewsUpdates_UPDATE_SUCCESS,
} from "../../constants/Manage Application/newsUpdateConstants";
import axios from "axios";
import { APIURL } from "../../APIURL";

export const listnewsUpdates = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: NewsUpdates_LIST_REQUEST,
    });

    const response = await axios.get(`${APIURL}/api/newsUpdates`);

    dispatch({
      type: NewsUpdates_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: NewsUpdates_LIST_FAIL,
      payload: message,
    });
  }
};

export const createNewsUpdatesAction =
  (headline, expiryDate, uploadDocument, description, status) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: NewsUpdates_CREATE_REQUEST,
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
        `${APIURL}/api/newsUpdates/create`,
        { headline, expiryDate, uploadDocument, description, status },
        config
      );

      dispatch({
        type: NewsUpdates_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: NewsUpdates_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const deleteNewsUpdatesAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NewsUpdates_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `${APIURL}/api/newsUpdates/${id}`,
      config
    );

    dispatch({
      type: NewsUpdates_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: NewsUpdates_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateNewsUpdatesAction =
  (id, headline, expiryDate, uploadDocument, description, status) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: NewsUpdates_UPDATE_REQUEST,
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
        `${APIURL}/api/newsUpdates/${id}`,
        { headline, expiryDate, uploadDocument, description, status },
        config
      );

      dispatch({
        type: NewsUpdates_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: NewsUpdates_UPDATE_FAIL,
        payload: message,
      });
    }
  };
