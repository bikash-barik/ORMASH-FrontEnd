import {
  Contents_UPDATE_REQUEST,
  Contents_UPDATE_SUCCESS,
  Contents_UPDATE_FAIL,
  Contents_CREATE_FAIL,
  Contents_CREATE_REQUEST,
  Contents_CREATE_SUCCESS,
  Contents_DELETE_FAIL,
  Contents_DELETE_REQUEST,
  Contents_DELETE_SUCCESS,
  Contents_LIST_FAIL,
  Contents_LIST_REQUEST,
  Contents_LIST_SUCCESS,
} from "../../constants/Content Management/contentsConstants";

export const contentListReducer = (state = { contents: [] }, action) => {
  switch (action.type) {
    case Contents_LIST_REQUEST:
      return { loading: true };
    case Contents_LIST_SUCCESS:
      return { loading: false, contents: action.payload };
    case Contents_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const contentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case Contents_CREATE_REQUEST:
      return { loading: true };
    case Contents_CREATE_SUCCESS:
      return { loading: false, success: true };
    case Contents_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const contentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case Contents_DELETE_REQUEST:
      return { loading: true };
    case Contents_DELETE_SUCCESS:
      return { loading: false, success: true };
    case Contents_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const contentUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case Contents_UPDATE_REQUEST:
      return { loading: true };
    case Contents_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case Contents_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
