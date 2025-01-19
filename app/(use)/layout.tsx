import React from "react";
import style from "./style.module.scss";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.style_layout}>
      <Sidebar />
      <div className={style.style_layout_main}>
        <Navbar />
        <main>
          <div className={style.container}>{children}</div>
        </main>
      </div>
    </div>
  );
}
export default layout;
