import dagre from "dagre";

const autoLayout = (chart) => {
  const g = new dagre.graphlib.Graph({});
  g.setGraph({
    marginx: 0,
    marginy: 100,
    rankdir: "LR",
  });
  g.setDefaultEdgeLabel(function () {
    return {};
  });

  for (let nodeId in chart.nodes) {
    // you need to know dimension of every node
    g.setNode(nodeId, { width: 300, height: 100 });
  }

  for (let k in chart.links) {
    g.setEdge(chart.links[k].from.nodeId, chart.links[k].to.nodeId);
  }

  dagre.layout(g);

  for (let nodeId in chart.nodes) {
    chart.nodes[nodeId].position = {
      x: g.node(nodeId).x  - 200 / 2,
      y: g.node(nodeId).y - 100 / 2,
    };
  }
};

export default autoLayout;
