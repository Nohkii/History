import React, { useEffect, useState } from "react";

const History = () => {
  const years = [
    {
      value: "2022",
      text:
        "11 건강보험공단 복지용구등록진" +
        "11 건강험공단 복지용구등록진행" +
        "11 카톨릭대학 성빈센트병원 MOU체결" +
        "11 건강보험공단 복지용구등록진행" +
        "11 건강험공단 복지용구등록진행" +
        "11 카톨릭대학 성빈센트병원 MOU체결",
    },
    {
      value: "2021",
      text: "11 건강보험공단 복지용구등록진행"+ 
      "11 건강험공단 복지용구등록진행 11 카톨릭대학 성빈센트병원 MOU체결 11 건강보험공단 복지용구등록진행 11 건강험공단 복지용구등록진행 11 카톨릭대학 성빈센트병원 MOU체결",
    },
    {
      value: "2020",
      text: "11 홍콩 Gerontechnology Platform Test Bed 품목 선정",
    },
  ];
  const [but, setBut] = useState("");

  const buttonOnclick = (e) => {
    setBut(e.target.value);
    console.log(e.target.value);
    // console.log(typeof e.target.value);
  };

  const [p, setP] = useState("");
  useEffect(() => {
    years.map((y) => {
      if (y.value == but) {
        setP(y.text);
      }
    });
  }, [but]);

  return (
    <>
      <button value="2022" onClick={buttonOnclick}>
        2022
      </button>
      <button value="2021" onClick={buttonOnclick}>
        2021
      </button>
      <button value="2020" onClick={buttonOnclick}>
        2020
      </button>
      <div>{p}</div>
    </>
  );
};

export default History;

// function getFilteredItems(years,filter){
//     if(filter ==='all'){
//         return years;
//     }
//     return years.filter((year)=>year.status ===filter)
// }
