import React, { useState } from 'react';
import History from './component/History';
import HistoryHeader from './component/HistoryHeader';


const filters=['2022','2021','2020']
const App = () => {
  const [filter, setFilter]=useState(filters[0])
  return (
    <div>
      <HistoryHeader filters={filters} filter={filter} onFilterChange={setFilter}/>
      <History filter={filter}/>
    </div>
  );
};

export default App;