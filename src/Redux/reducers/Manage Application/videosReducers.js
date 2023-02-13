import {
  Videos_UPDATE_REQUEST,
  Videos_UPDATE_SUCCESS,
  Videos_UPDATE_FAIL,
  Videos_CREATE_FAIL,
  Videos_CREATE_REQUEST,
  Videos_CREATE_SUCCESS,
  Videos_DELETE_FAIL,
  Videos_DELETE_REQUEST,
  Videos_DELETE_SUCCESS,
  Videos_LIST_FAIL,
  Videos_LIST_REQUEST,
  Videos_LIST_SUCCESS,
} from "../../constants/Manage Application/videosConstants";

export const videoListReducer = (state = { videos: [] }, action) => {
  switch (action.type) {
    case Videos_LIST_REQUEST:
      return { loading: true };
    case Videos_LIST_SUCCESS:
      return { loading: false, videos: action.payload };
    case Videos_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const videoCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case Videos_CREATE_REQUEST:
      return { loading: true };
    case Videos_CREATE_SUCCESS:
      return { loading: false, success: true };
    case Videos_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const videoDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case Videos_DELETE_REQUEST:
      return { loading: true };
    case Videos_DELETE_SUCCESS:
      return { loading: false, success: true };
    case Videos_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const videoUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case Videos_UPDATE_REQUEST:
      return { loading: true };
    case Videos_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case Videos_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
