import React from "react";
import "./style.css";

const Tabs = ({ tabDetails, selectedTab, isActive }) => {
  const { strCategory } = tabDetails;

  const onTab = () => {
    selectedTab(strCategory);
  };

  const activeBtn = isActive ? "active-btn" : null;
  return (
    <li className="tabs">
      <button onClick={onTab} className={`tabs ${activeBtn}`}>
        {strCategory}
      </button>
    </li>
  );
};

export default Tabs;
