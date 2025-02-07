import react, { useState } from "react";

export const useAddNewBrand = () => {
  const [productName, setProductName] = useState<string>("");
  const option = ["option1", "on2", "op3", "option4"];
  const headerPopup = "Add New Brand";

  const handleAddNewBrand = () => {
    console.log("call Api here..");
    console.log("productName: " + productName);
    
  };
  return {
    setProductName,
    productName,
    option,
    headerPopup,
    handleAddNewBrand,
  };
};
