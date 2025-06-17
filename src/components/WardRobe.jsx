import React from "react";

const WardRobe = ({ colorTop, setColorTop, setColorBottom, colorBottom }) => {

const allowDrop = (e) => {
        e.preventDefault();
    } 
  const onDragTopColor = (e) => {
    e.preventDefault();
      const color = e.dataTransfer.getData("color");
      console.log("color", e.dataTransfer.getData("color"));

    setColorTop(color);
  };

  const onDragBottomColor = (e) => {
    e.preventDefault();
    const color = e.dataTransfer.getData("color");
    setColorBottom(color);
  };
    

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex" onDrop={onDragTopColor} onDragOver={allowDrop}>
        <svg viewBox="0 0 24 24" width="180" height="140">
          <path
            d="M16 2H8L6 6v3h2v13h8V9h2V6l-2-4z"
            fill={colorTop}
            stroke="#333"
            strokeWidth="0.2"
          />
        </svg>
      </div>
      <div className="-mt-8" onDrop={onDragBottomColor} onDragOver={allowDrop}>
        <svg viewBox="0 0 200 200" width="120" height="140">
          {/* Pants */}
          <path
            d="M60,20 L140,20 L150,180 L110,180 L100,100 L90,180 L50,180 L60,20 Z"
            fill={colorBottom}
            stroke="#333"
            strokeWidth="2"
          />
          {/* Waistband */}
          <rect x="60" y="18" width="80" height="5" fill="#444" />
          {/* Center seam */}
          <path d="M100,20 L100,100" stroke="#000" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
};

export default WardRobe;
