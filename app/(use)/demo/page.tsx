"use client"

import React, { useState } from 'react';
import { Button, Flex, Space, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
const columns: TableColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name', },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Address', dataIndex: 'address' },
];

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));

const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const tblRef: Parameters<typeof Table>[0]['ref'] = React.useRef(null);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
 
  return (
    <div className="container">

      <Table<DataType>  pagination={{ pageSize: 50}} scroll={{ x: '100%', y: "calc(100vh - 115px)" }} rowSelection={rowSelection} columns={columns} ref={tblRef} dataSource={dataSource} />
    </div>
  );
};

export default App;