import React from "react";
import { AutoWriteText } from "./AutoWriteText";


export const MainText: React.FC = () => {
  const zIndex: number = 10;
  return (
    <div className="absolute text-center ">
      <div
        className="mt-32 absolute ml-10"
        style={{ 
          zIndex: zIndex,
          width: 600
        }}
      >
        <img src="./logo2.svg" alt="" className="mb-10 hover:scale-105 transition duration-300"/>
        <AutoWriteText />
      </div>
    </div>
  );
};
