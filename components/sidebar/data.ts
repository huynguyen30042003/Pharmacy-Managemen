export interface Detail {
  title: string; // Tiêu đề của mục con
  link?: string;
}

export interface SidebarItem {
  title: string; // Tiêu đề của mục chính
  icon: string; // Tên hoặc đường dẫn icon
  details?: Detail[]; // Danh sách mục con (tùy chọn)
}

export const sidebarData: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: "/speedometer.svg",
  },
  {
    title: "Purchase",
    icon: "/shopping-cart.svg",
    details: [{ title: "Purchase List",link: "purchaseList" }, { title: "Payment" }, { title: "Purchase Return" },{ title: "Return Receive" }],
  },
  {
    title: "Dispenser",
    icon: "/Pills.svg",
    details: [{ title: "Point Of Sale" }, { title: "Sales List" }, { title: "Collection" },{ title: "Sales Return" }],
  },
  {
    title: "Product",
    icon: "/box.svg",
    details: [
      { title: "Product List" },
      { title: "Product Package" },
      { title: "Product Damages" },
    ],
  },
  {
    title: "Reports",
    icon: "/clipboard-text.svg",
    details: [
      { title: "Sales Report",
        link: "salesReport" 
       },
      { title: "Sales Return Report" },
      { title: "Purchase Report" },
    ],
  },
  {
    title: "Stock",
    icon: "/chart.svg",
    details: [
      { title: "Stock Report" },
      { title: "Stock Report ( Batch )" },
    ],
  },
  {
    title: "Coustomer",
    icon: "/siderbar_user.svg",
  },
  {
    title: "Menufacturer",
    icon: "/sidebar_menufacture.svg",
    details: [
      { title: "Manufacturer List" },
      { title: "Manufacturer Ledger" },
    ],
  },
  {
    title: "Employee",
    icon: "/sidebar_personalcard.svg",
    details: [
      { title: "Employee" },
      { title: "Attendance" },
      { title: "Payroll" },
      { title: "Expense" },
    ],
  },{
    title: "Settings",
    icon: "/sidebar_setting.svg",
  }
];
