import { all } from "redux-saga/effects";
import {
  getAllLaunchProgramsSaga,
  getContentOnLaunchSaga,
  getContentOnLaunchAndLandSaga,
  getAllLaunchesDataSaga,
} from "./contentStore/saga";

export default function* () {
  yield all([
    getAllLaunchProgramsSaga(),
    getContentOnLaunchSaga(),
    getContentOnLaunchAndLandSaga(),
    getAllLaunchesDataSaga(),
  ]);
}
