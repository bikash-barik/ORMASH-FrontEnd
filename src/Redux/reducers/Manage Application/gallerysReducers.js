import {
  Gallerys_UPDATE_REQUEST,
  Gallerys_UPDATE_SUCCESS,
  Gallerys_UPDATE_FAIL,
  Gallerys_CREATE_FAIL,
  Gallerys_CREATE_REQUEST,
  Gallerys_CREATE_SUCCESS,
  Gallerys_DELETE_FAIL,
  Gallerys_DELETE_REQUEST,
  Gallerys_DELETE_SUCCESS,
  Gallerys_LIST_FAIL,
  Gallerys_LIST_REQUEST,
  Gallerys_LIST_SUCCESS,
} from "../../constants/Manage Application//gallerysConstants";

export const galleryListReducer = (state = { gallerys: [] }, action) => {
  switch (action.type) {
    case Gallerys_LIST_REQUEST:
      return { loading: true };
    case Gallerys_LIST_SUCCESS:
      return { loading: false, gallerys: action.payload };
    case Gallerys_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const galleryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case Gallerys_CREATE_REQUEST:
      return { loading: true };
    case Gallerys_CREATE_SUCCESS:
      return { loading: false, success: true };
    case Gallerys_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const galleryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case Gallerys_DELETE_REQUEST:
      return { loading: true };
    case Gallerys_DELETE_SUCCESS:
      return { loading: false, success: true };
    case Gallerys_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const galleryUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case Gallerys_UPDATE_REQUEST:
      return { loading: true };
    case Gallerys_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case Gallerys_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
