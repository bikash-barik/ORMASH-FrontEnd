import {
  Tenders_UPDATE_REQUEST,
  Tenders_UPDATE_SUCCESS,
  Tenders_UPDATE_FAIL,
  Tenders_CREATE_FAIL,
  Tenders_CREATE_REQUEST,
  Tenders_CREATE_SUCCESS,
  Tenders_DELETE_FAIL,
  Tenders_DELETE_REQUEST,
  Tenders_DELETE_SUCCESS,
  Tenders_LIST_FAIL,
  Tenders_LIST_REQUEST,
  Tenders_LIST_SUCCESS,
} from "../../constants/Manage Application/tendersConstants";

export const tenderListReducer = (state = { tenders: [] }, action) => {
  switch (action.type) {
    case Tenders_LIST_REQUEST:
      return { loading: true };
    case Tenders_LIST_SUCCESS:
      return { loading: false, tenders: action.payload };
    case Tenders_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const tenderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case Tenders_CREATE_REQUEST:
      return { loading: true };
    case Tenders_CREATE_SUCCESS:
      return { loading: false, success: true };
    case Tenders_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const tenderDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case Tenders_DELETE_REQUEST:
      return { loading: true };
    case Tenders_DELETE_SUCCESS:
      return { loading: false, success: true };
    case Tenders_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const tenderUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case Tenders_UPDATE_REQUEST:
      return { loading: true };
    case Tenders_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case Tenders_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
