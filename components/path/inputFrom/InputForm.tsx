import React from "react";
import style from "./InputForm.module.scss";
import Input from "../input/Input";
interface InputFormprops {
  title: string;
  type: string;
  minWidth?: string;
}
const InputForm: React.FC<InputFormprops> = ({ title, type, minWidth }) => {
  return (
    <div className={style.inputForm}>
      <label className={style.title} htmlFor="search">
        {title}
      </label>
      <Input minWidth={minWidth} type={type}></Input>
    </div>
  );
};

export default InputForm;
