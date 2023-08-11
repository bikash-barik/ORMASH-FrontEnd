import {
  SUBUSER_LOGIN_FAIL,
  SUBUSER_LOGIN_REQUEST,
  SUBUSER_LOGIN_SUCCESS,
  SUBUSER_LOGOUT,
  SUBUSER_REGISTER_FAIL,
  SUBUSER_REGISTER_REQUEST,
  SUBUSER_REGISTER_SUCCESS,
  SUBUSER_UPDATE_FAIL,
  SUBUSER_UPDATE_REQUEST,
  SUBUSER_UPDATE_SUCCESS,
} from "../constants/subuserConstants";

export const subuserLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBUSER_LOGIN_REQUEST:
      return { loading: true };
    case SUBUSER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case SUBUSER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case SUBUSER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const subuserRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBUSER_REGISTER_REQUEST:
      return { loading: true };
    case SUBUSER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case SUBUSER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const subuserUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBUSER_UPDATE_REQUEST:
      return { loading: true };
    case SUBUSER_UPDATE_SUCCESS:
      return { loading: false, userInfo: action.payload, success: true };
    case SUBUSER_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
