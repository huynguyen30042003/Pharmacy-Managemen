import React, { useState } from "react";

export const useManageBrands = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSearch = () => {
    console.log("handleSearch");
    // add search logic here
  };
  const handleOpenPopup = () => {
    console.log("handleOpenPopup");
    setIsOpen(!isOpen);
  };

  return {
    searchValue,
    setSearchValue,
    handleSearch,
    isOpen,
    handleOpenPopup,
  };
};
