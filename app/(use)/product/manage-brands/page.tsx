"use client";

import React from "react";
import styles from "./style.module.scss";
import Button from "@/components/path/button/Button";
import { useManageBrands } from "@/hooks/useManageBrands";
import Image from "next/image";
import InputForm from "@/components/path/inputFrom/InputForm";
import AddNewBrand from "@/components/popup/AddNewBrand";

const page = () => {
  const {
    searchValue,
    setSearchValue,
    handleSearch,
    isOpen,
    handleOpenPopup,
  } = useManageBrands();

  return (
    <div className={styles.pageManagebrands}>
      <div className={styles.row}>
        <div className={styles.searchForm}>
          <InputForm
            title="Search Brand"
            type="text"
            width="415px"
            value={searchValue}
            setValue={setSearchValue}
            placeholder="search anythings"
          ></InputForm>
          <div className={styles.search} onClick={handleSearch}>
            <Image
              src="/search.svg"
              alt="colorfilter icon"
              width={20}
              height={20}
              priority
              className={styles.iconSearch}
            />
          </div>
        </div>
        <Button
          iconAdd={true}
          width="112px"
          height="40px"
          text="Add Brand"
          onClick={handleOpenPopup}
        />
        <AddNewBrand isOpen={isOpen} handleOpenPopup={handleOpenPopup} />
      </div>
    </div>
  );
};

export default page;
