import dagre from "dagre";

const autoLayout = (chart) => {
  const g = new dagre.graphlib.Graph({});
  g.setGraph({
    marginx: 0,
    marginy: 30,
    rankdir: "LR",
  });
  g.setDefaultEdgeLabel(function () {
    return {};
  });

  for (let nodeId in chart.nodes) {
    // you need to know dimension of every node
    g.setNode(nodeId, { width: 350, height: 120 });
  }

  for (let k in chart.links) {
    g.setEdge(chart.links[k].from.nodeId, chart.links[k].to.nodeId);
  }

  dagre.layout(g);

  for (let nodeId in chart.nodes) {
    chart.nodes[nodeId].position = {
      x: g.node(nodeId).x  - 350 / 2,
      y: g.node(nodeId).y - 120 / 2,
    };
  }
};

export default autoLayout;
