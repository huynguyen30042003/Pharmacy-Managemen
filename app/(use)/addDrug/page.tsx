"use client";

import Button from "@/components/path/button/Button";
import DataList from "@/components/path/datalist/DataList";
import InputForm from "@/components/path/inputFrom/InputForm";
import Popup from "@/components/path/popup/Popup";
import React from "react";
import Section from "@/components/section/Section";
import { useAddDrug } from "@/hooks/useAddDrug";

const page: React.FC = () => {
  const {
    headerPopup,
    isPopupOpen,
    reference,
    setReference,
    handleOpenPopup,
    handleSave,
    date,
    setDate,
    productName,
    setProductName,
    available,
    setAvailable,
    type,
    setType,
    damegeQuantity,
    setDamegeQuantity,
    description,
    setDescription,
    optionProductName,
    optionType,
    optionDamegeQuantity,
  } = useAddDrug();

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
        onClick={handleSave}
      >
        <Section>
          <InputForm
            value={reference}
            setValue={setReference}
            title="Reference No"
            type="number"
            minWidth="280px"
          ></InputForm>
          <InputForm
            value={date}
            setValue={setDate}
            title="Date"
            type="date"
            minWidth="280px"
          ></InputForm>
        </Section>
        <Section>
          <DataList
            value={productName}
            setValue={setProductName}
            label="Product Name"
            options={optionProductName}
            minWidth="280px"
          ></DataList>
          <InputForm
            value={available}
            setValue={setAvailable}
            title="Available"
            type="text"
            minWidth="280px"
          ></InputForm>
        </Section>
        <Section>
          <DataList
            value={type}
            setValue={setType}
            label="Type"
            options={optionType}
            minWidth="280px"
          ></DataList>
          <DataList
            value={damegeQuantity}
            setValue={setDamegeQuantity}
            label="Damage Quantity"
            options={optionDamegeQuantity}
            minWidth="280px"
          ></DataList>
        </Section>
        <Section>
          <InputForm
            value={description}
            setValue={setDescription}
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
