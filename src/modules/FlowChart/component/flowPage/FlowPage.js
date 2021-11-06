import React, { useEffect, useState } from "react";
import { FlowChartWithState, FlowChart } from "@mrblenny/react-flow-chart";
import * as actions from "@mrblenny/react-flow-chart/src/container/actions";
import styled from "styled-components";
import * as data from '../../../../targetFormChart.json'
import autoLayout from '../../../../utils/autoLayout'

const styles = {
  mainContainer: {
    padding: 30,
    border: "2px red solid",
  },
  title: {
    margin: "20px 0px",
    fontSize: "26px",
    fontWeight: 600,
  },
  statusText: {
    margin: "10px 0px",
  },
  noteContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: '13px 0px',
   
  },
  noteContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    border: '1px grey solid',
    padding: '5px'
  },
  colorBlack: {
    backgroundColor: "red",
    width: "20px",
    height: "20px",
    margin: "0px 5px",
  },
  noteBlack: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0px 5px",
  },
};

const Outer = styled.div`
  padding: 30px;
  text-align: center;
`;

const OuterFinish = styled.div`
  padding: 30px;
  text-align: center;
  background-color: #adadad;
`;

const OuterOnGoing = styled.div`
  padding: 30px;
  text-align: center;
  background-color: #00d600;
`;

const CanvasOuterCustom = styled.div`
  position: relative;
  background-size: 10px 10px;
  background-color: #F5F5F5;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  cursor: not-allowed;
  border: 1px grey solid;
`;

const NodeInnerCustom = ({ node, config }) => {
  if (node.status === "節點已完成") {
    return (
      <OuterFinish>
        <div
          onClick={() => {
            alert("hi");
          }}
        >
          {" "}
          {node.text} <br /> {node.status}
        </div>
      </OuterFinish>
    );
  }

  if (node.status === "節點執行中") {
    return (
      <OuterOnGoing>
        <div>
          {" "}
          {node.text} <br /> {node.status}
        </div>
      </OuterOnGoing>
    );
  }
  return (
    <Outer>
      <div>
        {node.text} <br /> {node.status}
      </div>
    </Outer>
  );
};

const FlowPage = ({ chartData, formFlowName, formStatus }) => {

  console.log('chartData' , chartData)
  autoLayout(chartData)
  return (
    <div style={styles.mainContainer} key="baseContainer">
      <div style={styles.title}>{formFlowName}</div>
      <div style={styles.statusText}>流程狀態: {formStatus}</div>
      <FlowChartWithState
        initialValue={chartData}
        Components={{
          NodeInner: NodeInnerCustom,
          CanvasOuter: CanvasOuterCustom,
        }}
        config={{

          zoom: { wheel: { disabled: true } },
        }}
      />
      <div style={styles.noteContainer}>
        <div style={styles.noteContent}>
          <div style={styles.noteBlack}>
            <div style={styles.colorBlack}></div>
            已完成
          </div>
          <div style={styles.noteBlack}>
            <div style={styles.colorBlack}></div>執行中
          </div>
          <div style={styles.noteBlack}>
            <div style={styles.colorBlack}></div>已逾期
          </div>
        </div>
      </div>
    </div>
  );
};

FlowPage.propTypes = {};

FlowPage.defaultProps = {};

export default FlowPage;
