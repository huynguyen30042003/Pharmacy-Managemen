"use client";

import React, { useState } from "react";
import style from "./styles.module.scss";
import Popup from "@/components/path/popup/Popup";
import Button from "@/components/path/button/Button";
import Input from "@/components/path/input/Input";
import InputForm from "@/components/path/inputFrom/InputForm";
import DataList from "@/components/path/datalist/DataList";

const option = ["option1", "option2", "option3", "option4"];
const page: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [date,setDate] = useState<string>("")
  const [input,setInput] = useState<string>("")
  const [datalist,setDatalist] = useState<string>("")


  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const headerPopup = "Add New Product Type";
  const hanledSaved = () => {
    console.log("Saved");
    console.log(date);
    console.log(input);
    console.log(datalist);
    
  };
  return (
    <div className={style.homepage}>
      <Button width="300px" text="Open Popup" onClick={handleOpenPopup} ></Button>
      <Popup
        isOpen={isPopupOpen}
        handleOpenPopup={handleOpenPopup}
        width="430px"
        header={headerPopup}
        onClick={hanledSaved}
      >
        <Input value={date} setValue={setDate} type="date" mindate="2018-01-01" ></Input>
        <InputForm value={input} setValue={setInput} title="input form" type="text"></InputForm>
        <DataList value={datalist} setValue={setDatalist} label="form" minWidth="200px"  options={option} ></DataList>
      </Popup>
    </div>
  );
};

export default page;
