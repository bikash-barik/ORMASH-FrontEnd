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

  contentCreateReducer,
  contentDeleteReducer,
  contentListReducer,
  contentUpdateReducer,
} from "./reducers/Content Management/contentsReducers";
import {
  achievementCreateReducer,
  achievementDeleteReducer,
  achievementListReducer,
  achievementUpdateReducer,
} from "./reducers/Manage Application/achievementsReducers";
import {
  bannerCreateReducer,
  bannerDeleteReducer,
  bannerListReducer,
  bannerUpdateReducer,
} from "./reducers/Manage Application/bannersReducers";
import {
  logoCreateReducer,
  logoDeleteReducer,
  logoListReducer,
  logoUpdateReducer,
} from "./reducers/Manage Application/LogosReducers";
// } from "./reducers/Manage Application/logosReducers";
import {
  videoCreateReducer,
  videoDeleteReducer,
  videoListReducer,
  videoUpdateReducer,
} from "./reducers/Manage Application/videosReducers";

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

import {
  subuserLoginReducer,
  subuserRegisterReducer,
  subuserUpdateReducer,
} from "./reducers/subuserReducers";

import{
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




const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,

  // subuser Profile
  subuserLogin:    subuserLoginReducer,
  subuserRegister: subuserRegisterReducer,
  subuserUpdate:   subuserUpdateReducer,

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

  // content
  contentList: contentListReducer,
  contentCreate: contentCreateReducer,
  contentDelete: contentDeleteReducer,
  contentUpdate: contentUpdateReducer,

  // achievement
  achievementList: achievementListReducer,
  achievementCreate: achievementCreateReducer,
  achievementDelete: achievementDeleteReducer,
  achievementUpdate: achievementUpdateReducer,

  // banner
  bannerList: bannerListReducer,
  bannerCreate: bannerCreateReducer,
  bannerDelete: bannerDeleteReducer,
  bannerUpdate: bannerUpdateReducer,

  // logo
  logoList: logoListReducer,
  logoCreate: logoCreateReducer,
  logoDelete: logoDeleteReducer,
  logoUpdate: logoUpdateReducer,

  // video
  videoList: videoListReducer,
  videoCreate: videoCreateReducer,
  videoDelete: videoDeleteReducer,
  videoUpdate: videoUpdateReducer,
  
 
  // newsUpdates
  newsUpdatesList: newsUpdatesListReducer,
  newsUpdatesCreate: newsUpdatesCreateReducer,
  newsUpdatesDelete: newsUpdatesDeleteReducer,
  newsUpdatesUpdate: newsUpdatesUpdateReducer,


    
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
