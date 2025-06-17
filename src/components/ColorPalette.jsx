import React from "react";
import { Colors } from "../utils/colors";

const ColorPalette = () => {
  const onDragableStart = (e, item) => {
    e.dataTransfer.setData("color", item);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {Colors.map((item, index) => (
        <div
          key={index}
          style={{ backgroundColor: item }}
          className="h-10 w-10 rounded shadow-md cursor-pointer"
          title={item}
          draggable
          onDragStart={(e) => onDragableStart(e, item)}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
