import {
  Tenders_CREATE_FAIL,
  Tenders_CREATE_REQUEST,
  Tenders_CREATE_SUCCESS,
  Tenders_DELETE_FAIL,
  Tenders_DELETE_REQUEST,
  Tenders_DELETE_SUCCESS,
  Tenders_LIST_FAIL,
  Tenders_LIST_REQUEST,
  Tenders_LIST_SUCCESS,
  Tenders_UPDATE_FAIL,
  Tenders_UPDATE_REQUEST,
  Tenders_UPDATE_SUCCESS,
} from "../../constants/Manage Application/tendersConstants";
import axios from "axios";

export const listTenders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Tenders_LIST_REQUEST,
    });

    const response = await axios.get(`/api/tenders`);

    dispatch({
      type: Tenders_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Tenders_LIST_FAIL,
      payload: message,
    });
  }
};

export const createTenderAction = ( 
 tender_no,tender_headline, closing_date , closing_time, opening_date,opening_time,description, document_one,document_two, document_three  ) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: Tenders_CREATE_REQUEST,
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
      `/api/tenders/create`,
      {tender_no,tender_headline, closing_date , closing_time, opening_date,opening_time,description, document_one,document_two, document_three},
      config
    );

    dispatch({
      type: Tenders_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Tenders_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deleteTenderAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Tenders_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/tenders/${id}`, config);

    dispatch({
      type: Tenders_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Tenders_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateTenderAction = (id, tender_no,tender_headline, closing_date , closing_time, opening_date,opening_time,description, document_one,document_two, document_three  ) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: Tenders_UPDATE_REQUEST,
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
      `/api/tenders/${id}`,
      {  tender_no,tender_headline, closing_date , closing_time, opening_date,opening_time,description, document_one,document_two, document_three   },
      config
    );

    dispatch({
      type: Tenders_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Tenders_UPDATE_FAIL,
      payload: message,
    });
  }
};
