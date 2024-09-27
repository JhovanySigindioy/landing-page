import React from "react";
import { Fondos } from "./components/Fondos";
import { MainText } from "./components/MainText";
import { Card3 } from "./components/Card3";

export const App: React.FC = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-gray-800">
        <div className="relative flex-grow h-full animate__animated animate__fadeInLeft">
          <Fondos
            bgColor="#111827"
            wid="100vw"
            hig="190vh"
            posx="-50vw"
            posy="-35vh"
            zIndex={0}
          />
          <MainText />
        </div>
        <div className="flex-shrink-0 pt-16 pr-20">
          <Card3 />
        </div>
      </div>
    </>
  );
};
