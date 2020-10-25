import React from "react";
import { LOADING } from "../../utils/constant";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";

function Loader(props) {
  if (props.DataStore.phase === LOADING) {
    return <Spinner type="grow" color="danger" />;
  }
  return null;
}

const mapStateToProps = (DataStore) => DataStore;
export default connect(mapStateToProps)(Loader);
