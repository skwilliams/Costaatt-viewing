// pages/StatisticsPage.js

import React from "react";

const StatisticsPage = () => {
  // Define your statistics data
  const statisticsData = [
    { name: "Statistic 1", value: "Value 1" },
    { name: "Statistic 2", value: "Value 2" },
    { name: "Statistic 3", value: "Value 3" },
  ];

  return (
    <div>
      <h1>Statistics</h1>
      <ul>
        {statisticsData.map((statistic, index) => (
          <li key={index}>
            <strong>{statistic.name}:</strong> {statistic.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatisticsPage;
