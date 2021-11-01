import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ActionCreators from "../../ActionCreator";
import FlowPage from "./FlowPage";
import * as R from "ramda";
import {
  reduxStatusSelector,
  reduxErrorSelector,
  tagListSelector,
} from "../../selector";

const FlowPageContainer = ({ reduxStatus, reduxError, actions, data }) => {
  const { getTagFlowRequest } = actions;
  const flowData = R.pathOr([] , ['tags' , 'data'] , data)

  useEffect(() => {
    getTagFlowRequest();
  }, [getTagFlowRequest]);

  return (
    <FlowPage reduxStatus={reduxStatus} reduxError={reduxError} data={flowData} />
  );
};

FlowPageContainer.propTypes = {
  reduxStatus: PropTypes.string,
  reduxError: PropTypes.string,
  actions: PropTypes.shape({}).isRequired,
};

FlowPageContainer.defaultProps = {
  reduxStatus: null,
  reduxError: null,
};

const mapStateToProps = (state) => ({
  reduxStatus: reduxStatusSelector(state),
  reduxError: reduxErrorSelector(state),
  data: tagListSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      ...ActionCreators,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlowPageContainer);
