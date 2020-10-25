import axios from "axios";

export const getNamesAPI = () =>
  axios
    .get("https://api.spaceXdata.com/v3/launches?limit=100")
    .then((response) => {
      return response.data;
    });

export const getlaunchAPI = (payload) =>
  axios
    .get(
      `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${payload}`
    )
    .then((response) => {
      return response.data;
    });

export const getlaunchLandAPI = (payload) =>
  axios
    .get(
      `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${payload.launch}&land_success=${payload.land}`
    )
    .then((response) => {
      return response.data;
    });

export const getAllLaunchAPI = (payload) =>
  axios
    .get(
      `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${payload.launch}&land_success=${payload.land}&launch_year=${payload.parsedYear}`
    )
    .then((response) => {
      return response.data;
    });
