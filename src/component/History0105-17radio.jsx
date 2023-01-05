import React from "react";
import "../History.scss";

const History = () => {
  return (
    <div className="history">
      <div className="history-title">회사연혁</div>
      <div className="history-mainBox">
        <div className="history-leftBox">
          <div className="history-line"></div>
          <span className="history-year">2022</span>
          <input type='radio' value="2022" name="his" ></input>
          <br />
          <span className="history-year">2021</span>
          <input type='radio' value="2021" name="his"></input>
          <br />
          <span className="history-year">2020</span>
          <input type='radio' value="2020" name="his"></input>
          <br />
          <span className="history-year">2019</span>
          <input type='radio' value="2019" name="his"></input>
          <br />
          <span className="history-year">2018</span>
          <input type='radio' value="2018" name="his"></input>
          <br />
          <span className="history-year">2017</span>
          <input type='radio' value="2017" name="his"></input>
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