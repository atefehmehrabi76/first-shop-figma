function Buttons({ onButtonClick, selectedIndex }) {
  return (
    <div className="flex items-end gap-5">
      <button
        className={`bg-green-700 border rounded-[50%] w-7 h-7 ${
          selectedIndex === 0 ? "w-9 h-9 border-4 border-yellow-500 " : ""
        }`}
        onClick={() => onButtonClick(0)}
      ></button>
      <button
        className={`bg-pink-700 border rounded-[50%] w-7 h-7 ${
          selectedIndex === 1 ? " w-9 h-9 border-4 border-yellow-500" : ""
        }`}
        onClick={() => onButtonClick(1)}
      ></button>
      <button
        className={`bg-blue-700 border rounded-[50%] w-7 h-7 ${
          selectedIndex === 2 ? "w-9 h-9 border-4 border-yellow-500" : ""
        }`}
        onClick={() => onButtonClick(2)}
      ></button>
    </div>
  );
}

export default Buttons;
