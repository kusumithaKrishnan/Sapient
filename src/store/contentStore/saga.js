import {
  GET_ALL_CONTENT,
  GET_ALL_CONTENT_SUCCESS,
  GET_CONTENT_ON_LAUNCH,
  GET_CONTENT_ON_LAUNCH_SUCCESS,
  GET_LAUNCH_LAND_CONTENT,
  GET_LAUNCH_LAND_CONTENT_SUCCESS,
  GET_LAUNCH_LAND_CONTENT_ERROR,
  GET_ALL_LAUNCHES,
  GET_ALL_LAUNCHES_SUCCESS,
} from "./constant";

import {
  getNamesAPI,
  getlaunchAPI,
  getlaunchLandAPI,
  getAllLaunchAPI,
} from "./api";
import { takeLatest, put, call } from "redux-saga/effects";

function* getAllLaunchPrograms(action) {
  try {
    const data = yield call(getNamesAPI, action.payload);
    yield put({ type: GET_ALL_CONTENT_SUCCESS, data });
  } catch (error) {
    console.log("error", error);
  }
}

export function* getAllLaunchProgramsSaga() {
  yield takeLatest(GET_ALL_CONTENT, getAllLaunchPrograms);
}

function* getContentOnLaunch(action) {
  try {
    const data = yield call(getlaunchAPI, action.payload);
    yield put({ type: GET_CONTENT_ON_LAUNCH_SUCCESS, data });
  } catch (error) {
    console.log("error", error);
  }
}

export function* getContentOnLaunchSaga() {
  yield takeLatest(GET_CONTENT_ON_LAUNCH, getContentOnLaunch);
}

function* getContentOnLaunchAndLand(action) {
  try {
    const { land, launch } = action.payload;
    if (launch === null) {
      alert("Please select launch (True or False)");
    } else {
      const data = yield call(getlaunchLandAPI, action.payload);
      yield put({ type: GET_LAUNCH_LAND_CONTENT_SUCCESS, data });
    }
  } catch (error) {
    console.log("error", error);
  }
}

export function* getContentOnLaunchAndLandSaga() {
  yield takeLatest(GET_LAUNCH_LAND_CONTENT, getContentOnLaunchAndLand);
}

function* getAllLaunchesData(action) {
  try {
    const { land, launch } = action.payload;
    if (land || launch === null) {
      alert("Land and Launch details to be entered");
    } else {
      const data = yield call(getAllLaunchAPI, action.payload);
      yield put({ type: GET_ALL_LAUNCHES_SUCCESS, data });
    }
  } catch (error) {
    console.log("error", error);
  }
}

export function* getAllLaunchesDataSaga() {
  yield takeLatest(GET_ALL_LAUNCHES, getAllLaunchesData);
}
