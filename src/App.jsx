import { useState } from "react";
import "./App.css";
import ColorPalette from "./components/ColorPalette";
import WardRobe from "./components/WardRobe";

function App() {
  const [colorTop, setColorTop] = useState("#ffffff");
  const [colorBottom, setColorBottom] = useState("#ffffff");

  return (
    <>
      <div className="flex flex-col bg-gray-600 h-screen p-8">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold text-fuchsia-100">
            Dynamic Wardrobe
          </h1>
        </div>
        <div className="flex flex-row justify-between gap-4 mt-4">
          <div className="w-1/3 p-12 bg-amber-50 rounded-lg">
            <h1 className="pt-5 pb-5 text-2xl text-blue-500 font-bold">
              Color Palette
            </h1>
            <ColorPalette
              colorTop={colorTop}
              setColorTop={setColorTop}
              colorBottom={colorBottom}
              setColorBottom={setColorBottom}
            />
          </div>
          <div className="w-2/3 p-12 bg-white rounded-lg">
            <h1 className="pt-5 pb-5 text-2xl text-red-500 font-bold text-center">
              Outfit Preview
            </h1>
            <WardRobe
              colorTop={colorTop}
              setColorTop={setColorTop}
              colorBottom={colorBottom}
              setColorBottom={setColorBottom}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
