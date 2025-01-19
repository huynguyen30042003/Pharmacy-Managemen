import { Table, TableColumnsType, TableProps } from "antd";
import React from "react";
import { useState } from "react";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

export interface DataTypeTableProduct {
  key: React.Key;
  supplier: string;
  name: string;
  brand: string;
  productCode: string;
  expireDate: string;
  productType: string;
  price: number;
  action: string;
}

const columns: TableColumnsType<DataTypeTableProduct> = [
  { title: "Supplier", dataIndex: "supplier" },
  { title: "Name", dataIndex: "name" },
  { title: "Brand", dataIndex: "brand" },
  { title: "Product Code", dataIndex: "productCode" },
  { title: "Expire Date", dataIndex: "expireDate" },
  { title: "Product Type", dataIndex: "productType" },
  { title: "Price", dataIndex: "price" },
];

const dataSource =[
  { key: '1', supplier: 'A', name: 'B', brand: 'C', productCode: 'D', expireDate: 'E', productType: 'F', price: 100, action: 'View/Edit' },
  { key: '2', supplier: 'G', name: 'H', brand: 'I', productCode: 'J', expireDate: 'K', productType: 'L', price: 200, action: 'View/Edit' },
]

export const useProductList = () => {
  const [product, setProduct] = useState<string>("");
  const [productCode, setProductCode] = useState<string>("");
  const [dateTime, setDateTime] = useState<string>("");
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const tblRef: Parameters<typeof Table>[0]["ref"] = React.useRef(null);
  const [isPopupProductListOpen, setIsPopupProductListOpen] =
    useState<boolean>(false);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataTypeTableProduct> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hanldeAdd = () => {
    console.log("handleAdd");
    setIsPopupProductListOpen(false);
  };

  const handleSearch = () => {
    console.log("handleSearch");
  };

  const handleOpenPopup = () => {
    setIsPopupProductListOpen(!isPopupProductListOpen);
  };

  const headerPopupProductList = "Add Product List";
  return {
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
    handleSearch,
  };
};
