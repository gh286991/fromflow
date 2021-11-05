
import * as R from "ramda";

 const flowChartDataInterFace = (flowData) => {
    const yStart = 200;
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

  export default flowChartDataInterFace