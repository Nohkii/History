import React from "react";
import "../History.scss";

const History = () => {
  return (
    <div className="history">
      <div className="history-title">회사연혁</div>
      <div className="history-mainBox">
        <div className="history-leftBox">
          <div className="history-line"></div>

          <input
            className="history-but1"
            type="radio"
            value="2022"
            id="history-inputId"
            name="tory"
          ></input>

          <br />

          <input
            className="history-but2"
            type="radio"
            value="2021"
            id="history-inputId"
            name="tory"
          ></input>

          <br />

          <input
            className="history-but3"
            type="radio"
            value="2020"
            id="history-inputId"
            name="tory"
          ></input>

          <br />

          <input
            className="history-but4"
            type="radio"
            value="2019"
            id="history-inputId"
            name="tory"
          ></input>

          <br />
          <input
            className="history-but5"
            type="radio"
            value="2018"
            id="history-inputId"
            name="tory"
          ></input>
          <br />
          <input
            className="history-but6"
            type="radio"
            value="2017"
            id="history-inputId"
            name="tory"
          ></input>
        </div>
        <ul className="history-textBox">
          <li>연도 누르면 나오는 설명~~</li>
          <li>연도 누르면 나오는 설명~~</li>
        </ul>
      </div>
    </div>
  );
};

export default History;
