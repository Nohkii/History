import React, { useEffect, useState } from "react";

const History = () => {
  const years = [
    { value: "1", text: "11 건강보험공단 복지용구등록진행" },
    { value: "2", text: "11 카톨릭대학 성빈센트병원 MOU체결" },
    { value: "3", text: "11 홍콩 Gerontechnology Platform Test Bed 품목 선정" },
  ];

  const [but, setBut] = useState("");

  const buttonOnclick = (e) => {
    setBut(e.target.value);
  };
  console.log(years.text);

  useEffect(() => {
    if (years.map((y) => y.value == but)) {
      console.log(years.text);
    }
  }, [but]);

  return (
    <>
      <button value="1" onClick={buttonOnclick}>
        2022
      </button>
      <button value="2" onClick={buttonOnclick}>
        2021
      </button>
      <button value="3" onClick={buttonOnclick}>
        2020
      </button>
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
