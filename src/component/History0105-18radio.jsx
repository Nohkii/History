import React from "react";
import "../History.scss";

const History = () => {
  return (
    <div className="history">
      <div className="history-title">회사연혁</div>
      <div className="history-mainBox">
        <div className="history-leftBox">
          <div className="history-line"></div>
          {/* <span className="history-year">2022</span> */}
          <label for="1">
            2022
            <input type="radio" value="2022" id="1" name="tory"></input>
          </label>
          <br />
          <label for="2">
            2021
            <input type="radio" value="2021" id="2" name="tory"></input>
          </label>
          <br />
          <label for="3">
            2020
            <input type="radio" value="2020" id="3" name="tory"></input>
          </label>
          <br />
          <label for="4">
            2019
            <input type="radio" value="2019" id="4" name="tory"></input>
          </label>
          <br />
          <label for="5">
            2018
            <input type="radio" value="2018" id="5" name="tory"></input>
          </label>
          <br />
          <label for="6">
            2017
            <input type="radio" value="2017" id="6" name="tory"></input>
          </label>
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
