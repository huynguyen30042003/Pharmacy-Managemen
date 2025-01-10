"use client"
import React,{useState} from "react";
import style from "./Sidebar.module.scss";
import Image from "next/image";
import { SidebarItem, sidebarData } from './data';
import Link from "next/link";

function Sidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={style.sidebar}>
      <div className={style.container}>
        <Image
          src="/icon-logo2.svg"
          alt="colorfilter icon"
          width={37}
          height={37}
          priority
          className={style.imageLogo}
        />
        {sidebarData.map((item: SidebarItem, index: number) => (
          <div key={index}>
            <div className={style.select} onClick={() => item.details && toggleDetails(index)}>
              <div className={style.title}>
                <Image
                  src={item.icon}
                  alt="colorfilter icon"
                  width={18}
                  height={18}
                  priority
                  className={style.image}
                />
                <span>{item.title}</span>
              </div>
              {item.details && (
              <Image
                src="/drop-down-gray.svg"
                alt="colorfilter icon"
                width={16}
                height={16}
                priority
                className={`${openIndex === index ? style.up : style.down} ${style.image}`}
              />)}
            </div>
             {item.details && openIndex === index && (
              <ul className={style.details}>
                {item.details.map((detail, idx) => (
                  <Link href={`/${detail.link}`}>
                    <li key={idx} className={style.detailItem} >
                      {detail.title}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
