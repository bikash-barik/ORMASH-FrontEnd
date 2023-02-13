import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  officerProfileDetailCreateReducer,
  officerProfileDetailDeleteReducer,
  officerProfileDetailListReducer,
  officerProfileDetailUpdateReducer,
} from "./reducers/Content Management/officerProfileDetailsReducers";
import {
  documentCreateReducer,
  documentDeleteReducer,
  documentListReducer,
  documentUpdateReducer,
} from "./reducers/Manage Application/documentsReducers";
import {
  galleryCreateReducer,
  galleryDeleteReducer,
  galleryListReducer,
  galleryUpdateReducer,
} from "./reducers/Manage Application/gallerysReducers";
import {
  tenderCreateReducer,
  tenderDeleteReducer,
  tenderListReducer,
  tenderUpdateReducer,
} from "./reducers/Manage Application/tendersReducers";
import {
  newsUpdatesCreateReducer,
  newsUpdatesDeleteReducer,
  newsUpdatesListReducer,
  newsUpdatesUpdateReducer,
} from "./reducers/Manage Application/newsUpdateReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  // officerProfileDetail
  officerProfileDetailList: officerProfileDetailListReducer,
  officerProfileDetailCreate: officerProfileDetailCreateReducer,
  officerProfileDetailDelete: officerProfileDetailDeleteReducer,
  officerProfileDetailUpdate: officerProfileDetailUpdateReducer,

  // document
  documentList: documentListReducer,
  documentCreate: documentCreateReducer,
  documentDelete: documentDeleteReducer,
  documentUpdate: documentUpdateReducer, 
  
  // Gallerys
  galleryList: galleryListReducer,
  galleryCreate: galleryCreateReducer,
  galleryDelete: galleryDeleteReducer,
  galleryUpdate: galleryUpdateReducer, 
  
  //  Tenders
  tenderList: tenderListReducer,
  tenderCreate: tenderCreateReducer,
  tenderDelete: tenderDeleteReducer,
  tenderUpdate: tenderUpdateReducer,
  // newsUpdates
  newsUpdatesList: newsUpdatesListReducer,
  newsUpdatesCreate: newsUpdatesCreateReducer,
  newsUpdatesDelete: newsUpdatesDeleteReducer,
  newsUpdatesUpdate: newsUpdatesUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
