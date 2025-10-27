import { useState } from "react";
function ColorPicker() {
  const [color, setColor] = useState("#0096FF");
  function handleColorChange(e) {
    setColor(e.target.value);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center shadow-blue-300">
        <h1 className="text-[3rem] font-bold bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent">Color Picker</h1>
        <div style={{ backgroundColor: color }} className="p-20 rounded-lg mb-5">
          <p className="text-25 font-bold text-gray-400">Selected Color: {color}</p>
        </div>
        <div className="flex items-center flex-col">
          <label className="font-bold">Select a Color:</label>
          <input type="color" value={color} onChange={handleColorChange} className=" shadow-blue-400 size-10 hover:cursor-pointer"   />
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
