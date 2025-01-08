import React from 'react'
import style from './DataList.module.scss'
import Input from '../input/Input';
interface dataListProps{
  label?:string
  options: string[];
  minWidth?: string; 
}
const DataList:React.FC<dataListProps> = ({options,label,minWidth})=> {
  return (
    <div className={style.datalist}>
      <label htmlFor="datalist" className={style.label}>{label}</label>
      <Input minWidth={minWidth} list="options" id="datalist"></Input>
      <datalist id="options">
        {options.map((option)=>(
          <option key={option}>{option}</option>
        ))}
      </datalist>
    </div>
  )
}

export default DataList
