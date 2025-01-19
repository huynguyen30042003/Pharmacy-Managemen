"use client";

import React, { useState } from "react";
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
  const headerPopup = "Add Menufacturer";
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
        width="424px"
        header={headerPopup}
      >
        <Section>
          <InputForm
            minWidth="280px"
            title="Menufacturer Name"
            type="text"
          ></InputForm>
        </Section>
        <Section>
          <InputForm
            minWidth="280px"
            title="Email Address"
            type="email"
          ></InputForm>
        </Section>
        <Section>
          <InputForm minWidth="280px" title="Phone" type="text"></InputForm>
        </Section>
        <Section>
          <InputForm
            minWidth="280px"
            title="Address line"
            type="text"
          ></InputForm>
        </Section>
        <Section>
          <InputForm
            minWidth="280px"
            title="Previous Balance"
            type="text"
          ></InputForm>
        </Section>
      </Popup>
    </div>
  );
};

export default page;
