import Content from "./content";
import { connect } from "react-redux";
import {
  getAllLaunchPrograms,
  getContentOnLaunch,
  getContentOnLaunchAndLand,
  getAllLaunchesData,
} from "../../store/contentStore";

const mapStateToProps = (state) => {
  return {
    launchData: prepareLaunchData(state.DataStore),
    phase: state.DataStore.phase,
  };
};

const prepareLaunchData = (data) => {
  let result = [];
  if (Object.keys(data).length > 0) {
    try {
      result = data.names;
    } catch {}
  }
  return result;
};

const mapDispatchToProps = {
  getAllLaunchPrograms: (payload) => getAllLaunchPrograms(payload),
  getContentOnLaunch: (payload) => getContentOnLaunch(payload),
  getContentOnLaunchAndLand: (payload) => getContentOnLaunchAndLand(payload),
  getAllLaunchesData: (payload) => getAllLaunchesData(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
