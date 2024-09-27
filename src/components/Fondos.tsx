import React from "react";

interface ICyrcles {
  bgColor: string;
  wid: string;
  hig: string;
  posx: string;
  posy: string;
  zIndex: number;
}

export const Fondos: React.FC<ICyrcles> = ({
  bgColor,
  wid,
  hig,
  posx,
  posy,
  zIndex,
}) => {
  return (
    <div className="absolute">
      <div
        className="rounded-full"
        style={{
          backgroundColor: bgColor,
          width: wid,
          height: hig,
          left: posx,
          top: posy,
          zIndex: zIndex,
          position: "absolute",
        }}
      ></div>
    </div>
  );
};
