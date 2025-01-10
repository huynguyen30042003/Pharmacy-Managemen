"use client";
import Button from "@/components/path/button/Button";
import DataList from "@/components/path/datalist/DataList";
import InputForm from "@/components/path/inputFrom/InputForm";
import Popup from "@/components/path/popup/Popup";
import React, { useState } from "react";
import Section from "@/components/section/Section";

const page: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const headerPopup = "Add Customer";
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
        width="630px"
        header={headerPopup}
      >
        <Section>
          <InputForm
            title="Customer Name"
            type="text"
            placeholder="vd: Ho Ngoc Minh"
          ></InputForm>
          <InputForm
            title="Mobile No"
            type="text"
            placeholder="Phone Number"
          ></InputForm>
        </Section>
        <Section>
          <InputForm
            title="Email Address"
            type="text"
            placeholder="vd: DaNang@gmail.com"
          ></InputForm>
          <InputForm
            title="Fax"
            type="text"
            placeholder="efax@fax.com"
          ></InputForm>
        </Section>
        <Section>
          <InputForm
            title="Address Line 1"
            type="text"
            placeholder="Address Line 1"
          ></InputForm>
          <InputForm
            title="Address Line 2"
            type="text"
            placeholder="Address Line 2"
          ></InputForm>
        </Section>
        <Section>
          <DataList label="Country" options={option}></DataList>
          <DataList label="Previous Balnce" options={option}></DataList>
        </Section>
      </Popup>
    </div>
  );
};
export default page;
