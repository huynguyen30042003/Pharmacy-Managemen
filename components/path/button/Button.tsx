import React from "react";
import style from "./Button.module.scss";
import Image from "next/image";

interface ButtonProps {
  height?: string;
  width?: string;
  styles?: string;
  text: string;
  onClick: (e: any) => void;
  iconAdd?: boolean | string;
  backgroundColor?: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  styles,
  width,
  iconAdd,
  height,
  backgroundColor,
  color,
}) => {
  return (
    <div
      className={style.button}
      style={{ width, height, backgroundColor, color }}
      onClick={(e) => onClick(e)}
    >
      {iconAdd ? (
        <Image src="/add.svg" alt="add icon" width={20} height={20} priority />
      ) : (
        <></>
      )}
      <button
        style={{  height, backgroundColor, color }}
        className={style.buttonText}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
