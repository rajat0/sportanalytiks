
import './App.css';
import FormToExcel from './components/formtoexcel';
import { useState } from 'react';
import * as XLSX from 'xlsx'

function App() {
  const [formDataList, setFormDataList] = useState([]);

  const addFormData = (newData) => {
    setFormDataList((prevData) => [...prevData, newData]);
  };


  const exportAllData = () => {
    // Convert all form data to a worksheet
    const ws = XLSX.utils.json_to_sheet(formDataList);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet2');

    // Generate Excel file and trigger download
    XLSX.writeFile(wb, 'all-form-data.xlsx');
  };
  return (
    <div className="App">
      <FormToExcel onSubmit={addFormData} />
      <button onClick={exportAllData} className='bg-violet-500 mb-6 shadow-xl hover:shadow-none duration-300 w-1/2 py-2 rounded-md text-white  text-xl cursor-pointer  active:bg-violet-600' >Export to Excel</button>
    </div>
  );
}

export default App;
