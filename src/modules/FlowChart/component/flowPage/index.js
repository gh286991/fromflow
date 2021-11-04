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



const FlowPageContainer = ({ reduxStatus, reduxError, actions, data }) => {
  const { getTagFlowRequest } = actions;
  console.log('data' , data)
  const flowData = R.pathOr([], ["tags", "data", "data", 0], data);

  useEffect(() => {
    getTagFlowRequest();
  }, [getTagFlowRequest]);

  const flowChartDataInterFace = () => {
    const yStart = 100;
    const xSpace = 300;

    const nodes = R.pathOr([], ["nodes"], flowData);
    if (nodes.length === 0) return null;

    const nodesData = nodes.map((node, index) => {
      return {
        [node.nodeID]: {
          id: node.nodeID,
          text: node.nodeName,
          status: node.nodeStatus,
          position: {
            x: index * xSpace,
            y: yStart,
          },
          ports: {
            port1: {
              id: "port1",
              type: "left",
            },
            port2: {
              id: "port2",
              type: "right",
            },
          },
        },
      };
    });

    const links = nodes.map((node, index) => {
  

      const trailNode = R.pathOr(null, ["trailDependence", "dependNodeID" , 0], node);
      if(!trailNode) return {}; 
      const linkKey = `${node.nodeID}to${trailNode} `;

      return {
        [linkKey]: {
          id: linkKey,
          from: {
            nodeId: node.nodeID,
            portId: "port2",
          },
          to: {
            nodeId: trailNode,
            portId: "port1",
          },
        },
      };
    });

    return {
      offset: {
        x: 0,
        y: 0,
      },
      scale: 0.7,
      nodes: Object.assign({}, ...nodesData),
      links: Object.assign({}, ...links),
      selected: {},
      hovered: {},
    };
  };

  return (
    <>
    <div >
      {flowChartDataInterFace() ? (
        <FlowPage
          reduxStatus={reduxStatus}
          reduxError={reduxError}
          data={flowChartDataInterFace()}
          height= {'50vh'}
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
