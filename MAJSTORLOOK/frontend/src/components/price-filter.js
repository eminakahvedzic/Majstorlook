import React from "react";
import "../styles/PriceFilter.css"; // Import the CSS

const PriceFilter = ({ stopPropagation }) => {
  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div onClick={stopPropagation}>
      <div className="price-filter">
        <div className="from">
          <label className="price-label">Od</label>
          <input
            type="number"
            className="price-input" // Add the CSS class name here
            name="priceFrom"
            onClick={handleInputClick}
          />
        </div>
        <div className="to">
          <label className="price-label">Do</label>
          <input
            type="number"
            className="price-input" // Add the CSS class name here
            name="priceTo"
            onClick={handleInputClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
