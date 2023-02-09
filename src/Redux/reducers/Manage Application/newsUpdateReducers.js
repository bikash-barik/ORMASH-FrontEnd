import {
  NewsUpdates_UPDATE_REQUEST,
  NewsUpdates_UPDATE_SUCCESS,
  NewsUpdates_UPDATE_FAIL,
  NewsUpdates_CREATE_FAIL,
  NewsUpdates_CREATE_REQUEST,
  NewsUpdates_CREATE_SUCCESS,
  NewsUpdates_DELETE_FAIL,
  NewsUpdates_DELETE_REQUEST,
  NewsUpdates_DELETE_SUCCESS,
  NewsUpdates_LIST_FAIL,
  NewsUpdates_LIST_REQUEST,
  NewsUpdates_LIST_SUCCESS,
} from "../../constants/Manage Application/newsUpdateConstants";

export const newsUpdatesListReducer = (state = { newsUpdates: [] }, action) => {
  switch (action.type) {
    case NewsUpdates_LIST_REQUEST:
      return { loading: true };
    case NewsUpdates_LIST_SUCCESS:
      return { loading: false, newsUpdates: action.payload };
    case NewsUpdates_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const newsUpdatesCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case NewsUpdates_CREATE_REQUEST:
      return { loading: true };
    case NewsUpdates_CREATE_SUCCESS:
      return { loading: false, success: true };
    case NewsUpdates_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const newsUpdatesDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case NewsUpdates_DELETE_REQUEST:
      return { loading: true };
    case NewsUpdates_DELETE_SUCCESS:
      return { loading: false, success: true };
    case NewsUpdates_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const newsUpdatesUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case NewsUpdates_UPDATE_REQUEST:
      return { loading: true };
    case NewsUpdates_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case NewsUpdates_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
