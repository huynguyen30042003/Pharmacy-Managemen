import React from 'react'
import style from './style.module.scss'
import Navbar from '@/components/navbar/Navbar'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.style_layout}>
      <Navbar/>
      <main>{children}</main>
    </div>
  )
}
export default layout
