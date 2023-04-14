import React from "react";
import "./SlideButton.scss";

interface ButtonProps {
  onClick: () => void;
}

const SlideButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <span className="chevron"></span>
    </button>
  );
};

export default SlideButton;
