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
        // position: {
        //   x: index * xSpace,
        //   y: yStart,
        // },
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

  const linkData = [];
  nodes.forEach((node, index) => {
    const trailNode = R.pathOr(null, ["trailDependence", "dependNodeID"], node);
    if (trailNode.length === 0) return {};

    trailNode.forEach((trail) => {
      const linkKey = `${node.nodeID}to${trail} `;

      linkData.push({
        [linkKey]: {
          id: linkKey,
          from: {
            nodeId: node.nodeID,
            portId: "port2",
          },
          to: {
            nodeId: trail,
            portId: "port1",
          },
        },
      });
    });
  });

  const noLocationData =  {
    offset: {
      x: 0,
      y: 0,
    },
    scale: 0.7,
    nodes: Object.assign({}, ...nodesData),
    links: Object.assign({}, ...linkData),
    selected: {},
    hovered: {},
  };

return noLocationData

};



export default flowChartDataInterFace;
