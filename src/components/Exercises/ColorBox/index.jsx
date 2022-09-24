import React, { useState } from "react";
import "./styles.scss";

ColorBox.propTypes = {};

// getRandomColor
const getRandomColor = () => {
  const colorList = ["green", "yellow", "orange", "pink", "purple", "brown"];
  const randomIndex = Math.trunc(Math.random() * 6);
  return colorList[randomIndex];
};

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("color-box");
    console.log(initColor);
    return initColor;
  });

  const handleBoxClick = () => {
    // setColor
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("color-box", newColor);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
