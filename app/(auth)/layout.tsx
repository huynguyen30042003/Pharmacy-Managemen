import React from 'react'
import style from './styles.module.scss'

export const metadata = {
  title: 'Login | My App',
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.style_layout}>
      {children}
    </div>
  )
}

export default layout
