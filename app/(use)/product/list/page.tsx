"use client";

import InputForm from "@/components/path/inputFrom/InputForm";
import { DataTypeTableProduct, useProductList } from "@/hooks/useProductList";
import React from "react";
import style from "./style.module.scss";
import { Table } from "antd";
import Image from "next/image";
import Button from "@/components/path/button/Button";
import AddProductList from "@/components/popup/AddProductList";

const page = () => {
  const {
    product,
    setProduct,
    productCode,
    setProductCode,
    dateTime,
    setDateTime,
    rowSelection,
    columns,
    tblRef,
    dataSource,
    hanldeAdd,
    handleOpenPopup,
    headerPopupProductList,
    isPopupProductListOpen,
    handleSearch
  } = useProductList();

  return (
    <div className={style.product_list}>
      <div className={style.row}>
        <div className={style.searchForm}>
          <InputForm
            title="Select Product"
            type="text"
            width="194px"
            value={product}
            setValue={setProduct}
          ></InputForm>
          <InputForm
            title="Product code"
            type="text"
            width="194px"
            value={productCode}
            setValue={setProductCode}
          ></InputForm>
          <InputForm
            title="Date & Time"
            type="date"
            width="194px"
            value={dateTime}
            setValue={setDateTime}
          ></InputForm>

          <div className={style.search} onClick={handleSearch}>
            <Image
              src="/search.svg"
              alt="colorfilter icon"
              width={20}
              height={20}
              priority
              className={style.iconSearch}
            />
          </div>
        </div>
        <Button
          iconAdd={true}
          width="126px"
          height="40px"
          text="Add Product"
          onClick={handleOpenPopup}
        />
        <AddProductList
          handleOpenPopup={handleOpenPopup}
          headerPopup={headerPopupProductList}
          isOpen={isPopupProductListOpen}
          onClick={hanldeAdd}
        />
      </div>
      <Table<DataTypeTableProduct>
        scroll={{ x: "100%", y: "calc(100vh - 305px)" }}
        rowSelection={rowSelection}
        columns={columns}
        ref={tblRef}
        dataSource={dataSource}
      />
    </div>
  );
};

export default page;
