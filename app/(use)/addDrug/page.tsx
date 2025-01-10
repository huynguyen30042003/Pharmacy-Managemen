"use client";
import Button from "@/components/path/button/Button";
import DataList from "@/components/path/datalist/DataList";
import InputForm from "@/components/path/inputFrom/InputForm";
import Popup from "@/components/path/popup/Popup";
import React, { useState } from "react";
import style from "./style.module.scss";
import Section from "@/components/section/Section";

const page: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const headerPopup = "Add New Drug";
  const option = ["option1", "on2", "op3", "option4"];

  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
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
        width="630  px"
        header={headerPopup}
      >
        <Section>
          <DataList
            label="Reference No"
            minWidth="280px"
            options={option}
          ></DataList>
          <InputForm title="Date" type="date" minWidth="280px"></InputForm>
        </Section>
        <Section>
          <DataList
            label="Product Name"
            options={option}
            minWidth="280px"
          ></DataList>
          <InputForm title="Available" type="text" minWidth="280px"></InputForm>
        </Section>
        <Section>
          <DataList label="Type" options={option} minWidth="280px"></DataList>
          <DataList
            label="Damage Quantity"
            options={option}
            minWidth="280px"
          ></DataList>
        </Section>
        <Section>
          <InputForm
            title="Description"
            type="text"
            minWidth="280px"
          ></InputForm>
        </Section>
      </Popup>
    </div>
  );
};
export default page;
