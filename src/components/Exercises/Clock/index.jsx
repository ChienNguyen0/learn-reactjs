import React from "react";
import useClock from "../../../hooks/useClock";

Clock.propTypes = {};

function Clock() {
  const { timeString } = useClock();

  //   return jsx
  return (
    <div>
      <p style={{ fontSize: "40px" }}>{timeString}</p>
      <p style={{ fontSize: "60px", border: "2px solid", width: "300px" }}>
        {timeString}
      </p>
    </div>
  );
}

export default Clock;
