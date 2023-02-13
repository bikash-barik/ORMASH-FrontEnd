import {
  Logos_UPDATE_REQUEST,
  Logos_UPDATE_SUCCESS,
  Logos_UPDATE_FAIL,
  Logos_CREATE_FAIL,
  Logos_CREATE_REQUEST,
  Logos_CREATE_SUCCESS,
  Logos_DELETE_FAIL,
  Logos_DELETE_REQUEST,
  Logos_DELETE_SUCCESS,
  Logos_LIST_FAIL,
  Logos_LIST_REQUEST,
  Logos_LIST_SUCCESS,
} from "../../constants/Manage Application/logosConstants";

export const logoListReducer = (state = { logos: [] }, action) => {
  switch (action.type) {
    case Logos_LIST_REQUEST:
      return { loading: true };
    case Logos_LIST_SUCCESS:
      return { loading: false, logos: action.payload };
    case Logos_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const logoCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case Logos_CREATE_REQUEST:
      return { loading: true };
    case Logos_CREATE_SUCCESS:
      return { loading: false, success: true };
    case Logos_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const logoDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case Logos_DELETE_REQUEST:
      return { loading: true };
    case Logos_DELETE_SUCCESS:
      return { loading: false, success: true };
    case Logos_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const logoUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case Logos_UPDATE_REQUEST:
      return { loading: true };
    case Logos_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case Logos_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
