import {
  Banners_UPDATE_REQUEST,
  Banners_UPDATE_SUCCESS,
  Banners_UPDATE_FAIL,
  Banners_CREATE_FAIL,
  Banners_CREATE_REQUEST,
  Banners_CREATE_SUCCESS,
  Banners_DELETE_FAIL,
  Banners_DELETE_REQUEST,
  Banners_DELETE_SUCCESS,
  Banners_LIST_FAIL,
  Banners_LIST_REQUEST,
  Banners_LIST_SUCCESS,
} from "../../constants/Manage Application/bannersConstants";

export const bannerListReducer = (state = { banners: [] }, action) => {
  switch (action.type) {
    case Banners_LIST_REQUEST:
      return { loading: true };
    case Banners_LIST_SUCCESS:
      return { loading: false, banners: action.payload };
    case Banners_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const bannerCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case Banners_CREATE_REQUEST:
      return { loading: true };
    case Banners_CREATE_SUCCESS:
      return { loading: false, success: true };
    case Banners_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const bannerDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case Banners_DELETE_REQUEST:
      return { loading: true };
    case Banners_DELETE_SUCCESS:
      return { loading: false, success: true };
    case Banners_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const bannerUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case Banners_UPDATE_REQUEST:
      return { loading: true };
    case Banners_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case Banners_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
