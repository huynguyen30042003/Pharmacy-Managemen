import React from "react";
import style from "./Popup.module.scss";
import styleButton from "../button/Button.module.scss"
import Button from "../button/Button";
interface PopupProps {
  isOpen: boolean;
  width: string;
  // height: string;
  children: React.ReactNode;
  handleOpenPopup: () => void;
  header: string;
  // title?: string,
  // closeButton?: boolean,
}
const Popup: React.FC<PopupProps> = ({
  width,
  header,
  isOpen,
  children,
  handleOpenPopup,
}) => {

  const onSave = (e:any) => {
    // save logic here
    console.log("Save clicked",e);
  }


  if (!isOpen) return null;
  return (
    <div className={style.popup} onClick={handleOpenPopup}>
      <div
        className={style.popupInner}
        style={{ width }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.popupHeader}>
          <h2>{header}</h2>
        </div>
        <div className={style.popupContent}>{children}</div>
        <div className={style.popupFooter}>
          <Button styles={`${styleButton.gray}`} text='Close' onClick={handleOpenPopup}></Button>
          <Button   text='Save' onClick={(e:any)=> onSave(e)}></Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;