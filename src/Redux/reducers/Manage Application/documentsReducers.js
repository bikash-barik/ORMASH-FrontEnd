import {
  Documents_UPDATE_REQUEST,
  Documents_UPDATE_SUCCESS,
  Documents_UPDATE_FAIL,
  Documents_CREATE_FAIL,
  Documents_CREATE_REQUEST,
  Documents_CREATE_SUCCESS,
  Documents_DELETE_FAIL,
  Documents_DELETE_REQUEST,
  Documents_DELETE_SUCCESS,
  Documents_LIST_FAIL,
  Documents_LIST_REQUEST,
  Documents_LIST_SUCCESS,
} from "../../constants/Manage Application/documentsConstants";

export const documentListReducer = (state = { documents: [] }, action) => {
  switch (action.type) {
    case Documents_LIST_REQUEST:
      return { loading: true };
    case Documents_LIST_SUCCESS:
      return { loading: false, documents: action.payload };
    case Documents_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const documentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case Documents_CREATE_REQUEST:
      return { loading: true };
    case Documents_CREATE_SUCCESS:
      return { loading: false, success: true };
    case Documents_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const documentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case Documents_DELETE_REQUEST:
      return { loading: true };
    case Documents_DELETE_SUCCESS:
      return { loading: false, success: true };
    case Documents_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const documentUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case Documents_UPDATE_REQUEST:
      return { loading: true };
    case Documents_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case Documents_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
