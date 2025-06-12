import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './CarDisplay.css';

function CarDisplay() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Parse URL parameters to extract selected data
    const searchParams = new URLSearchParams(location.search);
    const year = searchParams.get("year");
    const company = searchParams.get("company");
    const model = searchParams.get("model");

    // Set selected data to state
    setSelectedYear(year);
    setSelectedCompany(company);
    setSelectedModel(model);
  }, [location.search]);

  return (
    <div>
      <h1>Car Display</h1>
      <p>Selected Year: {selectedYear}</p>
      <p>Selected Company: {selectedCompany}</p>
      <p>Selected Model: {selectedModel}</p>
      {/* You can use the selected data to display relevant car information */}
    </div>
  );
}

export default CarDisplay;
