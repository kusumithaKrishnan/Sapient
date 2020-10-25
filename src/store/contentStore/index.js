import {
  GET_ALL_CONTENT,
  GET_ALL_CONTENT_SUCCESS,
  GET_ALL_CONTENT_ERROR,
  GET_CONTENT_ON_LAUNCH,
  GET_CONTENT_ON_LAUNCH_SUCCESS,
  GET_CONTENT_ON_LAUNCH_ERROR,
  GET_LAUNCH_LAND_CONTENT,
  GET_LAUNCH_LAND_CONTENT_SUCCESS,
  GET_LAUNCH_LAND_CONTENT_ERROR,
  GET_ALL_LAUNCHES,
  GET_ALL_LAUNCHES_SUCCESS,
} from "./constant";

const initialState = {
  phase: "Loading",
  names: null,
};

export function DataStore(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CONTENT:
    case GET_CONTENT_ON_LAUNCH:
    case GET_LAUNCH_LAND_CONTENT:
    case GET_ALL_LAUNCHES:
      return {
        ...state,
        phase: "loading",
      };

    case GET_ALL_CONTENT_SUCCESS:
    case GET_CONTENT_ON_LAUNCH_SUCCESS:
    case GET_LAUNCH_LAND_CONTENT_SUCCESS:
    case GET_ALL_LAUNCHES_SUCCESS:
      return {
        ...state,
        phase: "success",
        names: action.data,
      };

    case GET_ALL_CONTENT_ERROR:
    case GET_CONTENT_ON_LAUNCH_ERROR:
      return {
        ...state,
        phase: "error",
      };

    default:
      return state;
  }
}

export const getAllLaunchPrograms = (payload) => ({
  type: GET_ALL_CONTENT,
  payload,
});

export const getContentOnLaunch = (payload) => ({
  type: GET_CONTENT_ON_LAUNCH,
  payload,
});

export const getContentOnLaunchAndLand = (payload) => ({
  type: GET_LAUNCH_LAND_CONTENT,
  payload,
});

export const getAllLaunchesData = (payload) => ({
  type: GET_ALL_LAUNCHES,
  payload,
});
