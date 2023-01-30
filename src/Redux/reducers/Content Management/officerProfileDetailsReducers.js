import {
  OfficerProfileDetails_UPDATE_REQUEST,
  OfficerProfileDetails_UPDATE_SUCCESS,
  OfficerProfileDetails_UPDATE_FAIL,
  OfficerProfileDetails_CREATE_FAIL,
  OfficerProfileDetails_CREATE_REQUEST,
  OfficerProfileDetails_CREATE_SUCCESS,
  OfficerProfileDetails_DELETE_FAIL,
  OfficerProfileDetails_DELETE_REQUEST,
  OfficerProfileDetails_DELETE_SUCCESS,
  OfficerProfileDetails_LIST_FAIL,
  OfficerProfileDetails_LIST_REQUEST,
  OfficerProfileDetails_LIST_SUCCESS,
} from "../../constants/Content Management/officerProfileDetailsConstants";

export const officerProfileDetailListReducer = (state = { officerProfileDetails: [] }, action) => {
  switch (action.type) {
    case OfficerProfileDetails_LIST_REQUEST:
      return { loading: true };
    case OfficerProfileDetails_LIST_SUCCESS:
      return { loading: false, officerProfileDetails: action.payload };
    case OfficerProfileDetails_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const officerProfileDetailCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case OfficerProfileDetails_CREATE_REQUEST:
      return { loading: true };
    case OfficerProfileDetails_CREATE_SUCCESS:
      return { loading: false, success: true };
    case OfficerProfileDetails_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const officerProfileDetailDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case OfficerProfileDetails_DELETE_REQUEST:
      return { loading: true };
    case OfficerProfileDetails_DELETE_SUCCESS:
      return { loading: false, success: true };
    case OfficerProfileDetails_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const officerProfileDetailUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case OfficerProfileDetails_UPDATE_REQUEST:
      return { loading: true };
    case OfficerProfileDetails_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case OfficerProfileDetails_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
