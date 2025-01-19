"use client";
import React, { useState } from "react";
import style from "./Input.module.scss";
interface InputProps {
  type?: string;
  valueLabel?: string;
  list?: string;
  id?: string;
  minWidth?: string;
  maxWidth?: string;
  width?: string;
  mindate?: string;
  placeholder?: string;
  value?: string;
  setValue(value: any): void;
}
const Input: React.FC<InputProps> = ({
  type,
  valueLabel,
  list,
  id,
  minWidth,
  maxWidth,
  width,
  mindate,
  placeholder,
  value="",
  setValue,
}) => {
  return (
    <>
      <div style={{ minWidth, maxWidth, width }} className={style.input_container}>
        <input
          min={mindate}
          id={id}
          list={list}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e)=>setValue(e.target.value)}
          required
        />
        <label className={value ? style.filled : ""}>{valueLabel}</label>
      </div>
    </>
  );
};

export default Input;
