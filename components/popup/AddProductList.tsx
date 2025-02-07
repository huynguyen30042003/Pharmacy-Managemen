import React, { useState } from "react";
import Popup from "../path/popup/Popup";
import DataList from "../path/datalist/DataList";
import { useAddProductList } from "@/hooks/useAddProductList";
import Section from "../section/Section";
import InputForm from "../path/inputFrom/InputForm";
interface props {
  isOpen: boolean;
  handleOpenPopup: () => void;
}

const AddProductList: React.FC<props> = ({ isOpen, handleOpenPopup }) => {
  const {
    headerPopup,
    handleSave,
    drugName,
    setDrugName,
    option,
    brand,
    setBrand,
    dataMatrix,
    setDateMatrix,
    barCode,
    setBarCode,
    category,
    setCategory,
    batch,
    setBatch,
    expiryDate,
    setExpiryDate,
    buyPrice,
    setBuyPrice,
    salePrice,
    setSalePrice,
    drugQuantity,
    setDrugQuantity,
    unitTotal,
    setUnitTotal,
  } = useAddProductList();
  return (
    <Popup
      isOpen={isOpen}
      handleOpenPopup={handleOpenPopup}
      width="726px"
      header={headerPopup}
      handleSave={handleSave}
    >
      <Section>
        <DataList
          value={drugName}
          label="Drug Name*"
          options={option}
          setValue={setDrugName}
          placeholder=""
          minWidth="328px"
        ></DataList>
        <DataList
          value={brand}
          label="Brand"
          options={option}
          setValue={setBrand}
          minWidth="328px"
        ></DataList>
      </Section>
      <Section>
        <InputForm
          title="Data Matrix"
          type="text"
          value={dataMatrix}
          setValue={setDateMatrix}
          minWidth="328px"
        ></InputForm>
        <InputForm
          title="BarCode"
          type="text"
          value={barCode}
          setValue={setBarCode}
          minWidth="328px"
        ></InputForm>
      </Section>
      <Section>
        <DataList
          value={category}
          label="Category"
          options={option}
          setValue={setCategory}
          minWidth="328px"
        ></DataList>
        <InputForm
          title="BarCode"
          type="text"
          value={barCode}
          setValue={setBarCode}
          minWidth="328px"
        ></InputForm>
      </Section>
      <Section>
        <InputForm
          title="Batch No"
          type="text"
          value={batch}
          setValue={setBatch}
          minWidth="328px"
        ></InputForm>
        <InputForm
          title="Expiry Date"
          type="date"
          value={expiryDate}
          setValue={setExpiryDate}
          minWidth="328px"
        ></InputForm>
      </Section>
      <Section>
        <InputForm
          title="Buy Price"
          type="text"
          value={buyPrice}
          setValue={setBuyPrice}
          minWidth="328px"
        ></InputForm>
        <InputForm
          title="Sale Price"
          type="text"
          value={salePrice}
          setValue={setSalePrice}
          minWidth="328px"
        ></InputForm>
      </Section>
      <Section>
        <InputForm
          title="Drug Quantity"
          type="text"
          value={drugQuantity}
          setValue={setDrugQuantity}
          minWidth="328px"
        ></InputForm>
        <InputForm
          title="Unit Total"
          type="text"
          value={unitTotal}
          setValue={setUnitTotal}
          minWidth="328px"
        ></InputForm>
      </Section>
    </Popup>
  );
};

export default AddProductList;
