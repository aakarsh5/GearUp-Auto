import React, { useState } from 'react';
import './Flexbox.css';

function App() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const carData = {
    "2020": {
      "Toyota": ["Camry", "Corolla"],
      "Honda": ["Civic", "Accord"]
    },
    "2021": {
      "Toyota": ["RAV4", "Highlander"],
      "Honda": ["CR-V", "Pilot"]
    }
  };

  const companies = selectedYear ? Object.keys(carData[selectedYear]) : [];
  const models = selectedCompany ? carData[selectedYear][selectedCompany] : [];

  return (
    <div className="parent">
    <div className='container'>
    <h1>Select The vehicle</h1>
      <div className="first">
      <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
        <option value=""className='first'>Select Year</option>
        {Object.keys(carData).map(year => <option key={year} value={year}>{year}</option>)}
      </select>
      </div>
      <div className="second">
      <select value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
        <option value="" className='second'>Select Company</option>
        {companies.map(company => <option key={company} value={company}>{company}</option>)}
      </select>
      </div>
      <div className="third">
        <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
          <option value="" className='third'>Select Model</option>
          {models.map(model => <option key={model} value={model}>{model}</option>)}
        </select>
      </div>
    </div>
    </div>
  );
}

export default App;
