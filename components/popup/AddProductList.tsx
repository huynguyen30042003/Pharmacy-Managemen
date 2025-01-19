import React, { useState } from 'react'
import Popup from '../path/popup/Popup'
interface props {
  isOpen: boolean,
  handleOpenPopup: () => void,
  headerPopup: string,
  onClick: () => void,
}

const AddProductList:React.FC<props> = ({isOpen,handleOpenPopup,headerPopup,onClick}) => {
  
  return (
    <Popup
        isOpen={isOpen}
        handleOpenPopup={handleOpenPopup}
        width="390px"
        header={headerPopup}
        onClick={onClick}
      >
        <p>daidaudvai</p>
      </Popup>

  )
}

export default AddProductList