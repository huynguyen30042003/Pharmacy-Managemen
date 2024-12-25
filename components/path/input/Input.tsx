"use client"
import React,{useState} from 'react'
import style from './Input.module.scss'
interface InputProps {
  type?: string; // Kiểu input (text, password, email, ...)
  valueLabel?: string; // Tùy chỉnh CSS
}
const Input: React.FC<InputProps> = ({ type, valueLabel }) => {
  const [value, setValue] = useState('');
  return (
    <>
    <div className={style.input_container}>
      <input
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
