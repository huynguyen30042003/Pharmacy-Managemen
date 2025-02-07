import React, { useState } from "react";
import Popup from "../path/popup/Popup";
import Input from "../path/input/Input";
import DataList from "../path/datalist/DataList";
import { useAddNewBrand } from "@/hooks/useAddNewBrand";

interface props {
  isOpen: boolean;
  handleOpenPopup: () => void;
}
const AddNewBrand: React.FC<props> = ({ isOpen, handleOpenPopup }) => {
  const {
    setProductName,
    productName,
    option,
    headerPopup,
    handleAddNewBrand,
  } = useAddNewBrand();

  return (
    <Popup
      isOpen={isOpen}
      handleOpenPopup={handleOpenPopup}
      width="390px"
      header={headerPopup}
      handleSave={handleAddNewBrand}
    >
      <div style={{paddingBottom:"26px"}}>

      <DataList
        value={productName}
        label="Brand Name"
        options={option}
        setValue={setProductName}
        ></DataList>
        </div>
    </Popup>
  );
};

export default AddNewBrand;
