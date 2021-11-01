import React, { useState } from "react";
import { Nav, NavItem, NavLink, FormGroup, Input, Button } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import paginationFactory from "react-bootstrap-table2-paginator";
import FlowStatus from "../../../../constants/FlowStatus";

const styles = {
  mainContainer: {
    padding: 30,
  },
  newFlowButton: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "20px 0px",
  },
  formContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  dateContainer: {
    width: "40%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  blank: {
    width: "10%",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0px",
  },
  inputSelect: {
    margin: "0px 10px",
  },
  operationButton: {
    margin: "0px 2px",
  },
  tdStyle: {
    height: "100%",
    verticalAlign: "middle",
  },
};

const FlowPage = ({ data }) => {
  const [selectTag, setSelectTag] = useState("flow");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const flowColumns = [
    {
      dataField: "",
      text: "到期日",
      sort: true,
      headerStyle: (column, colIndex) => {
        return { width: "100px" };
      },
    },
    {
      dataField: "objectFormFlowCaseName",
      text: "個案",
      sort: true,
    },
    {
      dataField: "objectFormFlowCase",
      text: "名稱",
      sort: true,
    },
    {
      dataField: "",
      text: "類別",
      sort: true,
      headerStyle: (column, colIndex) => {
        return { width: "120px" };
      },
    },
    {
      dataField: "startDate",
      text: "啟動時間",
      sort: true,
      headerStyle: (column, colIndex) => {
        return { width: "160px" };
      },
      formatter: (cell) => {
        return moment(cell).format("YYYY-MM-DD HH:mm");
      },
    },
    {
      dataField: "statusProcessing",
      text: "狀態",
      sort: true,
      headerStyle: () => {
        return { width: "120px" };
      },
      formatter: (cell) => {
        return FlowStatus[cell];
      },
    },
    {
      isDummyField: true,
      text: "操作",
      formatter: (cellContent, row) => {
        return (
          <>
            <Button color="primary" style={styles.operationButton}>
              撤回
            </Button>
            <Button color="primary" style={styles.operationButton}>
              停止
            </Button>
            <Button color="primary" style={styles.operationButton}>
              歷程
            </Button>
          </>
        );
      },
    },
  ];

  const waitAcceptColumns = [
    {
      dataField: "",
      text: "到期日",
      sort: true,
      headerStyle: (column, colIndex) => {
        return { width: "100px" };
      },
      style: () => styles.tdStyle,
    },
    {
      dataField: "objectFormFlowCaseName",
      text: "個案",
      sort: true,
      style: () => styles.tdStyle,
    },
    {
      dataField: "objectFormFlowCase",
      text: "名稱",
      sort: true,
      style: () => styles.tdStyle,
    },
    {
      dataField: "type",
      text: "類別",
      sort: true,
      headerStyle: () => {
        return { width: "120px" };
      },
      style: () => styles.tdStyle,
    },
    {
      dataField: "",
      text: "負責人",
      sort: true,
      headerStyle: () => {
        return { width: "120px" };
      },
      style: () => styles.tdStyle,
    },
    {
      dataField: "startDate",
      text: "送出時間",
      sort: true,
      headerStyle: () => {
        return { width: "160px" };
      },
      formatter: (cell) => {
        return moment(cell).format("YYYY-MM-DD HH:mm");
      },
      style: () => styles.tdStyle,
    },
    {
      dataField: "statusProcessing",
      text: "狀態",
      sort: true,
      headerStyle: () => {
        return { width: "120px" };
      },
      formatter: (cell) => {
        return FlowStatus[cell];
      },
      style: () => styles.tdStyle,
    },
    {
      isDummyField: true,
      text: "操作",
      style: () => styles.tdStyle,
      formatter: () => {
        return (
          <>
            <div style={{ margin: "2px 0px" }}>
              <Button color="primary" style={styles.operationButton}>
                修改
              </Button>
              <Button color="primary" style={styles.operationButton}>
                指派
              </Button>
            </div>
            <div style={{ margin: "2px 0px" }}>
              <Button color="primary" style={styles.operationButton}>
                核准
              </Button>
              <Button color="primary" style={styles.operationButton}>
                駁回
              </Button>
            </div>
          </>
        );
      },
    },
  ];

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];

  const flowMangerContent = () => {
    return (
      <>
        <div style={styles.newFlowButton}>
          <Button color="primary">啟動表單新流程</Button>
        </div>
        <div style={styles.searchContainer}>
          <FormGroup style={styles.formContainer}>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
              style={styles.inputSelect}
            >
              <option>個案名稱</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>

            <Input
              id="exampleSelect"
              name="select"
              type="select"
              style={styles.inputSelect}
            >
              <option>流程名稱</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>

            <Input
              id="exampleSelect"
              name="select"
              type="select"
              style={styles.inputSelect}
            >
              <option>流程類別</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>

            <Input
              id="exampleSelect"
              name="select"
              type="select"
              style={styles.inputSelect}
            >
              <option>流程狀態</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <div style={styles.blank}></div>
          <div style={styles.dateContainer}>
            <div style={{ width: "200px" }}>到期日:</div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            ~
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
            <Button color="primary" style={{ width: "120px" }}>
              查詢
            </Button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div style={styles.mainContainer} key="baseContainer">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={selectTag === "flow" ? "active" : ""}
            onClick={() => {
              setSelectTag("flow");
            }}
          >
            表單流程管理
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={selectTag === "waitAccess" ? "active" : ""}
            onClick={() => {
              setSelectTag("waitAccess");
            }}
          >
            待核准表單
          </NavLink>
        </NavItem>
      </Nav>

      {flowMangerContent()}
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={data}
        columns={selectTag === "flow" ? flowColumns : waitAcceptColumns}
        defaultSorted={defaultSorted}
        pagination={paginationFactory()}
      />
    </div>
  );
};

FlowPage.propTypes = {};

FlowPage.defaultProps = {};

export default FlowPage;
