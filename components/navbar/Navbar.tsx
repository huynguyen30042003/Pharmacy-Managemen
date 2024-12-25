import React from "react";
import style from "./Navbar.module.scss";
import Image from "next/image";

function Navbar() {
  return (
    <div className={style.navbar}>
      <Image src="/icon-logo.svg" alt="Logo" width={40} height={40} priority />
      <div className={style.navLink}>
        <div className={style.navItem}>
          <Image src="/icon-home.svg" alt="Logo" width={18} height={18} priority />
          <a href="#">Home</a>
        </div>
        <div className={style.navItem}>
          <Image src="/icon-location.svg" alt="Logo" width={18} height={18} priority />
          <a href="#">Explore</a>
        </div>
        <div className={style.navItem}>
          <Image src="/icon-eccount.svg" alt="Logo" width={18} height={18} priority />
          <a href="#">My Eccounts</a>
        </div>
        <div className={style.navItem}>
          <Image src="/icon-eccountants.svg" alt="Logo" width={18} height={18} priority />
          <a href="#">Eccountants</a>
        </div>
        <div className={style.navItem}>
          <Image src="/icon-stakeholders.svg" alt="Logo" width={18} height={18} priority />
          <a href="#">Stakeholders</a>
        </div>
      </div>
      <div className={style.navInfo}>
        <Image src="/icon-user.svg" alt="Logo" width={24} height={24} priority />
        <Image src="/icon-help.svg" alt="Logo" width={24} height={24} priority />
      </div>
    </div>
  );
}

export default Navbar;
