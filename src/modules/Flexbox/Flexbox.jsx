import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import CarDisplay from "../CarDisplay/CarDisplay";
// import "./Flexbox.css";

function Flexbox() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const shopContext = useContext(ShopContext);

  useEffect(() => {
    // Fetch years from backend when component mounts
    console.log("first");
    shopContext.fetchCompanies(selectedYear);
  }, [selectedYear]);

  useEffect(() => {
    // Fetch models from backend when selected year and company change
    if (selectedYear && selectedCompany) {
      shopContext.fetchModels(selectedYear, selectedCompany);
    }
  }, [selectedYear, selectedCompany]);

  return (
    <div>
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="">Select Year</option>
        {shopContext.years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <select
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
      >
        <option value="">Select Company</option>
        {shopContext.companies.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>
      <select
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        <option value="">Select Model</option>
        {[...new Set(shopContext.models.map((model) => model.model))].map(
          (model, index) => (
            <option key={index} value={model}>
              {model}
            </option>
          )
        )}
      </select>

      <Link
        to={`/CarDisplay?year=${selectedYear}&company=${selectedCompany}&model=${selectedModel}`}
      >
        <button>Go</button>
      </Link>
    </div>
  );
}

export default Flexbox;
