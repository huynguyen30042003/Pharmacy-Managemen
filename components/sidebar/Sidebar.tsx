"use client";
import React, { useState } from "react";
import style from "./Sidebar.module.scss";
import Image from "next/image";

function Sidebar() {
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);
  const [isDispenserOpen, setDispenserOpen] = useState(false);
  const [isProductOpen, setProductOpen] = useState(false);
  const [isReportsOpen, setReportsOpen] = useState(false);
  const [isStockOpen, setStockOpen] = useState(false);
  const [isMenufacturerOpen, setMenufacturerOpen] = useState(false);
  const [isEmployeeOpen, setEmployeeOpen] = useState(false);
  const [selectedIterm, setSelectedIterm] = useState("Dashboard");
  const togglePurchase = () => {
    setIsPurchaseOpen(!isPurchaseOpen);
  };
  const toggleDispenser = () => {
    setDispenserOpen(!isDispenserOpen);
  };
  const toggleProduct = () => {
    setProductOpen(!isProductOpen);
  };
  const toggleReport = () => {
    setReportsOpen(!isReportsOpen);
  };
  const toggleStock = () => {
    setStockOpen(!isStockOpen);
  };
  const toggleMenufacturer = () => {
    setMenufacturerOpen(!isMenufacturerOpen);
  };
  const toggleEmployee = () => {
    setEmployeeOpen(!isEmployeeOpen);
  };

  return (
    <aside className={style.sidebar}>
      <Image
        className={style.Logo_dashboard}
        src="/Logo_dashboard.svg"
        alt="Vercel Logo"
        width={36}
        height={36}
        priority
      />
      <ul className={style.sideBarList}>
        <li
          className={`${style.navItem} ${
            selectedIterm === "Dashboard" ? style.active : ""
          }`}
          onClick={() => setSelectedIterm("Dashboard")}
        >
          <a className={style.navLink}>
            <Image
              src="/icon_dashboard.svg"
              alt="Vercel Logo"
              width={18}
              height={18}
              priority
            />
            <span>Dashboard</span>
          </a>
        </li>
        <li
          className={`${style.navItem} ${
            selectedIterm === "Purchase" ? style.active : ""
          }`}
          onClick={() => setSelectedIterm("Purchase")}
        >
          <div className={style.navLink} onClick={togglePurchase}>
            <Image
              src="/icon_purchase.svg"
              alt="Vercel Logo"
              width={18}
              height={18}
              priority
            />
            <span>Purchase</span>
            <Image
              src="/down_arrow.svg"
              alt="Vercel Logo"
              width={16}
              height={16}
              priority
            />
          </div>
          <ul
            className={`${style.subList} ${isPurchaseOpen ? style.show : ""}`}
          >
            <li>
              <a href="#">Purchase List</a>
            </li>
            <li>
              <a href="#">Payment</a>
            </li>
            <li>
              <a href="#">Purchase Return</a>
            </li>
            <li>
              <a href="#">Purchase Receive</a>
            </li>
          </ul>
        </li>
        <li
          className={`${style.navItem} ${
            selectedIterm === "Dispenser" ? style.active : ""
          }`}
          onClick={() => setSelectedIterm("Dispenser")}
        >
          <div className={style.navLink} onClick={toggleDispenser}>
            <Image
              src="/icon_dispenser.svg"
              alt="Vercel Logo"
              width={18}
              height={18}
              priority
            />
            <span>Dispenser</span>
            <Image
              src="/down_arrow.svg"
              alt="Vercel Logo"
              width={16}
              height={16}
              priority
            />
          </div>
          <ul
            className={`${style.subList} ${isDispenserOpen ? style.show : ""}`}
          >
            <li>
              <a href="#">Point Of Sale</a>
            </li>
            <li>
              <a href="#">Sales List</a>
            </li>
            <li>
              <a href="#">Collection</a>
            </li>
            <li>
              <a href="#">Sales Return</a>
            </li>
          </ul>
        </li>
        <li
          className={`${style.navItem} ${
            selectedIterm === "Product" ? style.active : ""
          }`}
          onClick={() => setSelectedIterm("Product")}
        >
          <div className={style.navLink} onClick={toggleProduct}>
            <Image
              src="/icon_box.svg"
              alt="Vercel Logo"
              width={18}
              height={18}
              priority
            />
            <span>Product</span>
            <Image
              src="/down_arrow.svg"
              alt="Vercel Logo"
              width={16}
              height={16}
              priority
            />
          </div>
          <ul className={`${style.subList} ${isProductOpen ? style.show : ""}`}>
            <li>
              <a href="#">Product List</a>
            </li>
            <li>
              <a href="#">Product Package</a>
            </li>
            <li>
              <a href="#">Product Damages</a>
            </li>
          </ul>
        </li>
        <li
          className={`${style.navItem} ${
            selectedIterm === "Reports" ? style.active : ""
          }`}
          onClick={() => setSelectedIterm("Reports")}
        >
          <div className={style.navLink} onClick={toggleReport}>
            <Image
              src="/icon_report.svg"
              alt="Vercel Logo"
              width={18}
              height={18}
              priority
            />
            <span>Reports</span>
            <Image
              src="/down_arrow.svg"
              alt="Vercel Logo"
              width={16}
              height={16}
              priority
            />
          </div>
          <ul className={`${style.subList} ${isReportsOpen ? style.show : ""}`}>
            <li>
              <a href="#">Sales Report</a>
            </li>
            <li>
              <a href="#">Sales Return Report</a>
            </li>
            <li>
              <a href="#">Purchase Report</a>
            </li>
          </ul>
        </li>
        <li
          className={`${style.navItem} ${
            selectedIterm === "Stock" ? style.active : ""
          }`}
          onClick={() => setSelectedIterm("Stock")}
        >
          <div className={style.navLink} onClick={toggleStock}>
            <Image
              src="/icon_stock.svg"
              alt="Vercel Logo"
              width={18}
              height={18}
              priority
            />
            <span>Stock</span>
            <Image
              src="/down_arrow.svg"
              alt="Vercel Logo"
              width={16}
              height={16}
              priority
            />
          </div>
          <ul className={`${style.subList} ${isStockOpen ? style.show : ""}`}>
            <li>
              <a href="#">Stock Report</a>
            </li>
            <li>
              <a href="#">Stock Report(batch)</a>
            </li>
          </ul>
        </li>
        <li
          className={`${style.navItem} ${
            selectedIterm === "Coustomer" ? style.active : ""
          }`}
          onClick={() => setSelectedIterm("Coustomer")}
        >
          <a className={style.navLink}>
            <Image
              src="/icon_customer.svg"
              alt="Vercel Logo"
              width={18}
              height={18}
              priority
            />
            <span>Coustomer</span>
          </a>
        </li>
        <li
          className={`${style.navItem} ${
            selectedIterm === "Menufacturer" ? style.active : ""
          }`}
          onClick={() => setSelectedIterm("Menufacturer")}
        >
          <div className={style.navLink} onClick={toggleMenufacturer}>
            <Image
              src="/icon_menufacturer.svg"
              alt="Vercel Logo"
              width={18}
              height={18}
              priority
            />
            <span>Menufacturer</span>
            <Image
              src="/down_arrow.svg"
              alt="Vercel Logo"
              width={16}
              height={16}
              priority
            />
          </div>
          <ul
            className={`${style.subList} ${
              isMenufacturerOpen ? style.show : ""
            }`}
          >
            <li>
              <a href="#">Menufacturer List</a>
            </li>
            <li>
              <a href="#">Menufacturer Ledger</a>
            </li>
          </ul>
        </li>
        <li
          className={`${style.navItem} ${
            selectedIterm === "Employee" ? style.active : ""
          }`}
          onClick={() => setSelectedIterm("Employee")}
        >
          <div className={style.navLink} onClick={toggleEmployee}>
            <Image
              src="/icon_employee.svg"
              alt="Vercel Logo"
              width={18}
              height={18}
              priority
            />
            <span>Employee</span>
            <Image
              src="/down_arrow.svg"
              alt="Vercel Logo"
              width={16}
              height={16}
              priority
            />
          </div>
          <ul
            className={`${style.subList} ${isEmployeeOpen ? style.show : ""}`}
          >
            <li>
              <a href="#">Employee</a>
            </li>
            <li>
              <a href="#">Attendance</a>
            </li>
            <li>
              <a href="#">Payroll</a>
            </li>
            <li>
              <a href="#">Expense</a>
            </li>
          </ul>
        </li>
        <li
          className={`${style.navItem} ${
            selectedIterm === "Settings" ? style.active : ""
          }`}
          onClick={() => setSelectedIterm("Settings")}
        >
          <a className={style.navLink}>
            <Image
              src="/icon_setting.svg"
              alt="Vercel Logo"
              width={18}
              height={18}
              priority
            />
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
