"use client";

import React, { useState } from "react";
import style from "./style.module.scss";
import Popup from "@/components/path/popup/Popup";
import Button from "@/components/path/button/Button";
import DataList from "@/components/path/datalist/DataList";
import Section from "@/components/section/Section";

const option = ["option1", "option2", "option3", "option4"];
const page: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const headerPopup = "Add Expense Item";
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
        width="420px"
        header={headerPopup}
      >
        <Section>
          <DataList
            minWidth="280px"
            label="Expense Item Name"
            options={option}
          ></DataList>
        </Section>
      </Popup>
    </div>
  );
};

export default page;
