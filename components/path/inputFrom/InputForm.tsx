import React from "react";
import style from "./InputForm.module.scss";
import Input from "../input/Input";
interface InputFormprops {
  title: string;
  type: string;
  minWidth?: string;
  maxWidth?: string;
  width?: string;
  placeholder?: string;
  value: any;
  setValue(value: any): void;
}
const InputForm: React.FC<InputFormprops> = ({
  title,
  type,
  minWidth,
  maxWidth,
  width,
  placeholder,
  value,
  setValue,
}) => {
  return (
    <div style={{ minWidth, maxWidth, width }} className={style.inputForm} >
      <label className={style.title} htmlFor="search">
        {title}
      </label>
      <Input value={value} setValue={setValue} minWidth={minWidth} maxWidth={maxWidth} width={width} type={type} placeholder={placeholder}></Input>
    </div>
  );
};

export default InputForm;
