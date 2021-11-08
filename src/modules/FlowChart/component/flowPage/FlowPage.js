import React, { useState } from "react";
import { FlowChartWithState } from "@mrblenny/react-flow-chart";
import styled from "styled-components";
import autoLayout from "../../../../utils/autoLayout";
import moment from "moment";

const colors = {
  finish: "#adadad",
  going: "#00d600",
};

const styles = {
  mainContainer: {
    padding: 30,
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
    margin: "13px 0px",
  },
  noteContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    border: "1px grey solid",
    padding: "5px",
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
  timeContainer: {
    padding: "7px",
    width: "fit-content",
    height: "30ox",
    border: "1px grey dashed",
    backgroundColor: "white",
    opacity: 1,
  },
};

const Outer = styled.div`
  padding: 30px;
  text-align: center;
  background-color: white;
  border-radius: 15px;
`;

const OuterFinish = styled.div`
  padding: 30px;
  text-align: center;
  background-color: ${colors.finish};
  border-radius: 15px;
`;

const OuterOnGoing = styled.div`
  padding: 30px;
  text-align: center;
  background-color: ${colors.going};
  border-radius: 15px;
`;

const CanvasOuterCustom = styled.div`
  background-size: 10px 10px;
  background-color: #f5f5f5;
  width: 100%;
  height: 60vh;
  overflow: hidden;
  border: 1px grey solid;
`;

const Node = styled.div`
  position: absolute;
  border: 1px black solid;
  border-radius: 15px;
`;

const NodeInnerCustom = ({ node, config }) => {
  if (node.status === "節點已完成") {
    return (
      <>
        <OuterFinish>
          <div>
            {node.text} <br /> {node.status}
          </div>
        </OuterFinish>
      </>
    );
  }

  if (node.status === "節點執行中") {
    return (
      <>
        <OuterOnGoing>
          <div>
            {node.text} <br /> {node.status}
          </div>
        </OuterOnGoing>
      </>
    );
  }
  return (
    <>
      <Outer>
        <div>
          {node.text} <br /> {node.status}
        </div>
      </Outer>
    </>
  );
};

const NodeCustom = React.forwardRef(
  ({ node, children, ...otherProps }, ref) => {
    const [isShowTimeInfo, setIsShowTimeInfo] = useState(false);
    const renderTimeInfo = () => {
      return (
        <div style={{ position: "absolute", zIndex: 2 , top: '-83%' }}>
          {isShowTimeInfo ? (
            <div style={styles.timeContainer}>
              <div>{`開始時間: ${moment(node.date.startDate).format(
                "YYYY/MM/DD"
              )}`}</div>
              <div>{`到期時間: ${moment(node.date.dueDate).format(
                "YYYY/MM/DD"
              )}`}</div>
              <div>{`完成時間: ${moment(node.date.actualFinishTime).format(
                "YYYY/MM/DD"
              )}`}</div>
            </div>
          ) : null}
        </div>
      );
    };

    return (
      <Node
        ref={ref}
        {...otherProps}
        onMouseEnter={() => setIsShowTimeInfo(true)}
        onMouseLeave={() => setIsShowTimeInfo(false)}
      >
        {children}
        {renderTimeInfo()}
      </Node>
    );
  }
);

const FlowPage = ({ chartData, formFlowName, formStatus }) => {
  autoLayout(chartData);
  return (
    <div style={styles.mainContainer} key="baseContainer">
      <div style={styles.title}>{formFlowName}</div>
      <div style={styles.statusText}>流程狀態: {formStatus}</div>
      <FlowChartWithState
        style={{ zIndex: -1 }}
        initialValue={chartData}
        Components={{
          Node: NodeCustom,
          NodeInner: NodeInnerCustom,
          CanvasOuter: CanvasOuterCustom,
        }}
        config={{
          readonly: true,
          zoom: { wheel: { disabled: true } },
        }}
      >
      </FlowChartWithState>
      <div style={styles.noteContainer}>
        <div style={styles.noteContent}>
          <div style={styles.noteBlack}>
            <div
              style={{
                ...styles.colorBlack,
                ...{ backgroundColor: colors.finish },
              }}
            ></div>
            已完成
          </div>
          <div style={styles.noteBlack}>
            <div
              style={{
                ...styles.colorBlack,
                ...{ backgroundColor: colors.going },
              }}
            ></div>
            執行中
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
