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
  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const headerPopup = "Add New Product Type";
  return (
    <div className={style.homepage}>
      <Button width="300px" text="Open Popup" onClick={handleOpenPopup} ></Button>
      <Popup
        isOpen={isPopupOpen}
        handleOpenPopup={handleOpenPopup}
        width="430px"
        header={headerPopup}
      >
        <Input type="text" valueLabel="dauid"></Input>
        <InputForm title="input form" type="text"></InputForm>
        <DataList width="200px" label="form" options={option} ></DataList>
      </Popup>
    </div>
  );
};

export default page;
