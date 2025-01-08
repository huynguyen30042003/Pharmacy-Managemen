"use client";
import Button from "@/components/path/button/Button";
import DataList from "@/components/path/datalist/DataList";
import Popup from "@/components/path/popup/Popup";
import React, { useState } from "react";

const page: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const headerPopup = "Add New Product Rack";
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
        width="430px"
        header={headerPopup}
      >
        <DataList label="Product Rack Name" options={option}></DataList>
      </Popup>
    </div>
  );
};

export default page;
