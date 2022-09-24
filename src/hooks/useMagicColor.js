import { useEffect, useRef, useState } from "react";

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  function randomColor(currentColor) {
    const COLOR_LIST = [
      "red",
      "green",
      "blue",
      "yellow",
      "orange",
      "pink",
      "gray",
      "purple",
    ];

    // random 0 => 2
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;

    while (currentIndex === newIndex) {
      newIndex = Math.trunc(Math.random() * 8);
    }

    console.log(COLOR_LIST[newIndex]);
    return COLOR_LIST[newIndex];
  }

  //   Change color every 1 second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}

export default useMagicColor;
