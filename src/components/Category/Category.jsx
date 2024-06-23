import React, { useEffect, useState } from "react";
import "./style.css";
import Tabs from "../Tabs/Tabs";
import Card from "../Card/Card";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [activeTab, setActiveTab] = useState("Beef");

  useEffect(() => {
    const getTabItem = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      let data = await response.json();
      data = data.meals;
      // console.log(data);
      setCategoryData(data.slice(0, 6));
    };
    getTabItem();
  }, []);

  useEffect(() => {
    const getCardItem = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      let jsonData = await response.json();
      jsonData = jsonData.categories;
      setCardData(jsonData);
    };
    getCardItem();
  }, []);

  const selectedTab = (strCategory) => {
    setActiveTab(strCategory);
  };

  const getFilterCard = () => {
    const filterCard = cardData.filter(
      (eachItem) => eachItem.strCategory === activeTab
    );
    return filterCard;
  };

  const filterCard = getFilterCard();
  return (
    <div className="container">
      <div className="category-section">
        <p>Shop By Category</p>
        <h2>Top Category Of Organic Food</h2>
        <ul className="tab-list">
          {categoryData.map((eachItem, index) => (
            <Tabs
              tabDetails={eachItem}
              key={index}
              selectedTab={selectedTab}
              isActive={activeTab === eachItem.strCategory}
            />
          ))}
        </ul>
        <ul className="card-list">
          {filterCard.map((eachItem, index) => (
            <Card cardDetails={eachItem} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
