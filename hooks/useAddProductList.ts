import React, { useState } from "react";

export const useAddProductList = () => {
  const [drugName, setDrugName] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [dataMatrix, setDateMatrix] = useState<string>("");
  const [barCode, setBarCode] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [batch, setBatch] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [buyPrice, setBuyPrice] = useState<string>("$");
  const [salePrice, setSalePrice] = useState<string>("$");
  const [drugQuantity, setDrugQuantity] = useState<string>("");
  const [unitTotal, setUnitTotal] = useState<string>("");

  const option = ["product", "add"];
  const headerPopup = "Add Product List";
  const handleSave = () => {
    alert("handleSave")
    // save product list data
  };
  return {
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
  };
};
