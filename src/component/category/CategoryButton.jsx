import React from "react";
import "./category.css";

const CategoryButton = ({ categories, setCategory }) => {
  console.log(categories);

  const handleClick = (e, category) => {
    console.log(category);
    const index = categories.indexOf(category);
    categories.splice(index, 1);
    setCategory([...categories]);
  };
  return (
    <div className="choseBox">
      {categories.map((category, key) => {
        return (
          <button
            className="chooseValue"
            key={key}
            onClick={(e) => handleClick(e, category)}
          >
            <span>{category}</span> <span className="crossIcon">X</span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryButton;
