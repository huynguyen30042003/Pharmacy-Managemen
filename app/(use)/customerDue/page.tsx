"use client";

import React, { useState } from "react";
import style from "./style.module.scss";
import Popup from "@/components/path/popup/Popup";
import Button from "@/components/path/button/Button";
import Input from "@/components/path/input/Input";
import InputForm from "@/components/path/inputFrom/InputForm";
import DataList from "@/components/path/datalist/DataList";
import Section from "@/components/section/Section";

const option = ["option1", "option2", "option3", "option4"];
const page: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const headerPopup = "Customer Due Collection";
  return (
    <div>
      <Button
        width="300px"
        text="Open Popup"
        onClick={handleOpenPopup}
      ></Button>
      <Popup
        isOpen={isPopupOpen}
        handleOpenPopup={handleOpenPopup}
        width="630px"
        header={headerPopup}
      >
        <Section>
          <InputForm
            minWidth="280px"
            title="Customer Name"
            type="text"
          ></InputForm>
          <InputForm minWidth="280px" title="Date" type="date"></InputForm>
        </Section>
        <Section>
          <InputForm
            minWidth="280px"
            title="Customer Code"
            type="text"
          ></InputForm>
          <InputForm minWidth="280px" title="Amount" type="text"></InputForm>
        </Section>
        <Section>
          <InputForm
            minWidth="280px"
            title="Mobile Number"
            type="text"
          ></InputForm>
          <InputForm
            minWidth="280px"
            title="Receivable Amount"
            type="money"
          ></InputForm>
        </Section>
        <Section>
          <InputForm minWidth="280px" title="Advanced" type="text"></InputForm>
          <DataList
            minWidth="280px"
            label="Payment Method"
            options={option}
          ></DataList>
        </Section>
      </Popup>
    </div>
  );
};

export default page;