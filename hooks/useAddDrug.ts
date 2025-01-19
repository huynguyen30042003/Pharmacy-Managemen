import { useState } from "react";

export const useAddDrug = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(true);
  const [reference, setReference] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [available, setAvailable] = useState<number>(0);
  const [type, setType] = useState<string>("");
  const [damegeQuantity, setDamegeQuantity] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const optionProductName = ["product1", "product2", "product3", "product4"]
  const optionType = ["Type 1", "Type 2", "Type 3", "Type 4"];
  const optionDamegeQuantity = ["optionDamegeQuantity 1", "optionDamegeQuantity 2", "optionDamegeQuantity 3", "optionDamegeQuantity 4"];
  const headerPopup = "Add New Drug";

  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleSave = () => {
    console.log({
      reference,
      date,
      productName,
      available,
      type,
      damegeQuantity,
      description,
    });
    setIsPopupOpen(false);
  };

  return {
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
  };
};
