import React, { useState } from "react";

function Buttons({ onButtonClick }) {
  return (
    <div className="flex items-end gap-5">
      <button
        className="bg-green-700 border rounded-[50%] w-7 h-7"
        onClick={() => onButtonClick(0)}
      ></button>
      <button
        className="bg-pink-700 border rounded-[50%] w-7 h-7"
        onClick={() => onButtonClick(1)}
      ></button>
      <button
        className="bg-blue-700 border rounded-[50%] w-7 h-7"
        onClick={() => onButtonClick(2)}
      ></button>
    </div>
  );
}

export default Buttons;
