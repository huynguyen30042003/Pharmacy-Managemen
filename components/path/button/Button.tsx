import React from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  width?: string;
  styles?: string;
  text: string;
  onClick: (e: any) => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, styles, width }) => {
  return (
    <button
      style={{ width }}
      className={`${style.button} ${styles || ""}`}
      onClick={(e) => onClick(e)}
    >
      {text}
    </button>
  );
};

export default Button;
