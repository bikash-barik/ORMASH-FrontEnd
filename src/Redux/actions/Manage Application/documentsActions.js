import {
  Documents_CREATE_FAIL,
  Documents_CREATE_REQUEST,
  Documents_CREATE_SUCCESS,
  Documents_DELETE_FAIL,
  Documents_DELETE_REQUEST,
  Documents_DELETE_SUCCESS,
  Documents_LIST_FAIL,
  Documents_LIST_REQUEST,
  Documents_LIST_SUCCESS,
  Documents_UPDATE_FAIL,
  Documents_UPDATE_REQUEST,
  Documents_UPDATE_SUCCESS,
} from "../../constants/Manage Application/documentsConstants";
import axios from "axios";

export const listdocuments = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Documents_LIST_REQUEST,
    });

    const response = await axios.get(`${APIURL}/api/documents`);

    dispatch({
      type: Documents_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Documents_LIST_FAIL,
      payload: message,
    });
  }
};

export const createDocumentAction = ( 
 headline,expiryDate, uploadDocument, description, status) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: Documents_CREATE_REQUEST,
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
      `${APIURL}/api/documents/create`,
      {  headline,expiryDate, uploadDocument, description, status },
      config
    );

    dispatch({
      type: Documents_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Documents_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deleteDocumentAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Documents_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`${APIURL}/api/documents/${id}`, config);

    dispatch({
      type: Documents_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Documents_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateDocumentAction = (id, headline,expiryDate, uploadDocument, description, status) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: Documents_UPDATE_REQUEST,
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
      `${APIURL}/api/documents/${id}`,
      {  headline,expiryDate, uploadDocument, description, status },
      config
    );

    dispatch({
      type: Documents_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Documents_UPDATE_FAIL,
      payload: message,
    });
  }
};
