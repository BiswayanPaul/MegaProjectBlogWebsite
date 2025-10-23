import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div
      className="text-2xl font-bold text-blue-600 tracking-wide select-none"
      style={{ width }}
    >
      BloG.AI
    </div>
  );
}

export default Logo;
