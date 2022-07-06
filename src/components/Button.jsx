import React from "react";
import { useStateContext } from '../contexts/ContextProvider';

function Button({ icon, bgColor, color, size, text, bgHoverColor, borderRadius,width }) {
  const { setIsClicked, initialState } = useStateContext();
  return (
    <button
    onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
     {icon} {text}
    </button>
  );
}

export default Button;
