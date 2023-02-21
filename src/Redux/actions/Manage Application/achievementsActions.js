import {
  Achievements_CREATE_FAIL,
  Achievements_CREATE_REQUEST,
  Achievements_CREATE_SUCCESS,
  Achievements_DELETE_FAIL,
  Achievements_DELETE_REQUEST,
  Achievements_DELETE_SUCCESS,
  Achievements_LIST_FAIL,
  Achievements_LIST_REQUEST,
  Achievements_LIST_SUCCESS,
  Achievements_UPDATE_FAIL,
  Achievements_UPDATE_REQUEST,
  Achievements_UPDATE_SUCCESS,
} from "../../constants/Manage Application/achievementsConstants";
import axios from "axios";
import { APIURL } from "../../APIURL";

export const listachievements = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Achievements_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${APIURL}/api/achievements`, config);

    dispatch({
      type: Achievements_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Achievements_LIST_FAIL,
      payload: message,
    });
  }
};

export const createAchievementAction = ( sl_no, achievement_name, snippet, description, home_page_status ) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Achievements_CREATE_REQUEST,
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
      `${APIURL}/api/achievements`,
      { sl_no, achievement_name, snippet, description, home_page_status },
      config
    );

    dispatch({
      type: Achievements_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Achievements_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deleteAchievementAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Achievements_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`${APIURL}/api/achievements/${id}`, config);

    dispatch({
      type: Achievements_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Achievements_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateAchievementAction = (id, sl_no, achievement_name, snippet, description, home_page_status ) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: Achievements_UPDATE_REQUEST,
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
      `${APIURL}/api/achievements/${id}`,
      { sl_no, achievement_name, snippet, description, home_page_status },
      config
    );

    dispatch({
      type: Achievements_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: Achievements_UPDATE_FAIL,
      payload: message,
    });
  }
};
