import React, { useEffect } from "react";
import PropTypes, { node } from "prop-types";
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
import flowChartDataInterFace from '../../../../utils/formDataToFlowChartHelper'



const FlowPageContainer = ({ reduxStatus, reduxError, actions, data }) => {
  const { getTagFlowRequest } = actions;
  const flowData = R.pathOr([], ["tags", "data", "data"], data);
  const formFlowName = R.pathOr("", [ 'objectFormFlowName'], flowData);
  const formStatus = R.pathOr("" , ["statusProcessing"] , flowData)

  useEffect(() => {
    getTagFlowRequest();
  }, []);

 

  return (
    <>
    <div>
      {flowChartDataInterFace(flowData) ? (
        <FlowPage
          reduxStatus={reduxStatus}
          reduxError={reduxError}
          chartData={flowChartDataInterFace(flowData)}
          height= {'50vh'}
          formFlowName={formFlowName}
          formStatus={formStatus}
        />
      ) : (
        <div>Loading</div>
      )}
      </div>
    </>
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
