import React from "react";
import style from "./Button.module.scss";
import Image from "next/image";

interface ButtonProps {
  height?:string;
  width?: string;
  styles?: string;
  text: string;
  onClick: (e: any) => void;
  iconAdd?: boolean | string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  styles,
  width,
  iconAdd,
  height
}) => {
  return (
    <div style={{ width,height }} className={`${style.button} ${styles || ""}`} onClick={(e) => onClick(e)}>
      {iconAdd ? (
        <Image src="/add.svg" alt="add icon" width={20} height={20} priority />
      ) : (
        <></>
      )}
      <button style={{ width,height }} >
        {text}
      </button>
    </div>
  );
};

export default Button;
