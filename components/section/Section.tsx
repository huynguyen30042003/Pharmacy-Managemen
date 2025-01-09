import React, { ReactNode } from 'react'
interface Props{
  children: ReactNode
}
const Section = ({children}:Props) => {
  return (
    <div className='section'>{children}</div>
  )
}

export default Section