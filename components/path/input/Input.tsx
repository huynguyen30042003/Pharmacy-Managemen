"use client"
import React,{useState} from 'react'
import style from './Input.module.scss'
interface InputProps {
  type?: string; 
  valueLabel?: string;
  list?: string;
  id?: string;
  minWidth?:string;
  mindate?:string;
}
const Input: React.FC<InputProps> = ({ type, valueLabel, list,id,minWidth,mindate }) => {
  const [value, setValue] = useState('');
  return (
    <>
    <div style={{minWidth}} className={style.input_container}>
      <input
          min={mindate}
          id={id}
          list={list}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
		 <label className={value ? style.filled : ''}>{valueLabel}</label>		
	</div>
      </>
  );
};

export default Input
