import {
  Achievements_UPDATE_REQUEST,
  Achievements_UPDATE_SUCCESS,
  Achievements_UPDATE_FAIL,
  Achievements_CREATE_FAIL,
  Achievements_CREATE_REQUEST,
  Achievements_CREATE_SUCCESS,
  Achievements_DELETE_FAIL,
  Achievements_DELETE_REQUEST,
  Achievements_DELETE_SUCCESS,
  Achievements_LIST_FAIL,
  Achievements_LIST_REQUEST,
  Achievements_LIST_SUCCESS,
} from "../../constants/Manage Application/achievementsConstants";

export const achievementListReducer = (state = { achievements: [] }, action) => {
  switch (action.type) {
    case Achievements_LIST_REQUEST:
      return { loading: true };
    case Achievements_LIST_SUCCESS:
      return { loading: false, achievements: action.payload };
    case Achievements_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const achievementCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case Achievements_CREATE_REQUEST:
      return { loading: true };
    case Achievements_CREATE_SUCCESS:
      return { loading: false, success: true };
    case Achievements_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const achievementDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case Achievements_DELETE_REQUEST:
      return { loading: true };
    case Achievements_DELETE_SUCCESS:
      return { loading: false, success: true };
    case Achievements_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const achievementUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case Achievements_UPDATE_REQUEST:
      return { loading: true };
    case Achievements_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case Achievements_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
