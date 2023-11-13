import React, { useState } from "react";

const Comp2 = () => {
  let [displayedLetter, setDisplayedLetter] = useState("A");
  const changeDisplayedLetter = () => {
    setDisplayedLetter("B");
  };

  return (
    <div>
      <h1 data-testid="disp_item">{displayedLetter}</h1>
      <h6 data-testid="click_me" onClick={changeDisplayedLetter}>Click Me</h6>
    </div>
  );
};

export default Comp2;
