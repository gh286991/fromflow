import React, { useEffect, useState } from "react";
import { FlowChartWithState, FlowChart } from "@mrblenny/react-flow-chart";
import * as actions from "@mrblenny/react-flow-chart/src/container/actions";
import styled from "styled-components";

const styles = {
  mainContainer: {
    padding: 30,
  },
};

const Outer = styled.div`
  padding: 30px;
  text-align: center;
`;

const OuterFinish = styled.div`
  padding: 30px;
  text-align: center;
  background-color: #ADADAD;
`;

const OuterOnGoing = styled.div`
  padding: 30px;
  text-align: center;
  background-color: #00D600;
`;

const CanvasOuterCustom = styled.div`
  position: relative;
  background-size: 10px 10px;
  background-color: #4f6791;
  width: 100vw;
  height: 50vh;
  overflow: hidden;
  cursor: not-allowed;
`;

const NodeInnerCustom = ({ node, config }) => {
  if(node.status === '節點已完成'){
    return (
      <OuterFinish>
        <div onClick={()=>{alert('hi')}}> {node.text} <br/> {node.status}</div>
      </OuterFinish>
    );
  }

  if(node.status === '節點執行中'){
    return (
      <OuterOnGoing>
        <div> {node.text} <br/> {node.status}</div>
      </OuterOnGoing>
    );
  }
  return (
    <Outer>
      <div> {node.text} <br/> {node.status}</div>
    </Outer>
  );
};

const FlowPage = ({ data }) => {
  const [chart, setChart] = useState(data);

  let stateActionCallbacks = Object.keys(actions).reduce((obj, key, idx) => {
    obj[key] = (...args) => {
      let action = actions[key];
      let newChartTransformer = action(...args);
      let newChart = newChartTransformer(chart);
      setChart({ ...chart, ...newChart });
      return newChart;
    };
    return obj;
  }, {});

  console.log("data", data);
  return (
    <div style={styles.mainContainer} key="baseContainer">
      <FlowChart
        chart={chart}
        callbacks={stateActionCallbacks}
        Components={{
          NodeInner: NodeInnerCustom,
          CanvasOuter: CanvasOuterCustom,
        }}
        config={{
          readonly: true,
          zoom: { wheel: { disabled: true } 
         }, 
        }}
      />
    </div>
  );
};

FlowPage.propTypes = {};

FlowPage.defaultProps = {};

export default FlowPage;
