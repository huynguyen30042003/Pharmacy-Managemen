import React from "react";
import style from "./Sidebar.module.scss";
import Image from "next/image";

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={20}
        height={20}
        priority
      />
    </div>
  );
}

export default Sidebar;
