// VisuallyHidden.tsx
import React from "react";

const VisuallyHidden = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      position: "absolute",
      width: "1px",
      height: "1px",
      margin: "-1px",
      padding: "0",
      border: "0",
      clip: "rect(0, 0, 0, 0)",
      clipPath: "inset(100%)",
      overflow: "hidden",
    }}
  >
    {children}
  </span>
);

export default VisuallyHidden;
