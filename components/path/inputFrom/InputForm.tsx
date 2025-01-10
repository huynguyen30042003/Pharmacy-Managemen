import React from "react";
import style from "./InputForm.module.scss";
import Input from "../input/Input";
interface InputFormprops {
  title: string;
  type: string;
  minWidth?: string;
  placeholder?: string;
}
const InputForm: React.FC<InputFormprops> = ({
  title,
  type,
  minWidth,
  placeholder,
}) => {
  return (
    <div className={style.inputForm}>
      <label className={style.title} htmlFor="search">
        {title}
      </label>
      <Input minWidth={minWidth} type={type} placeholder={placeholder}></Input>
    </div>
  );
};

export default InputForm;
