import React from "react";
import style from "./Popup.module.scss";
import styleButton from "../button/Button.module.scss";
import Button from "../button/Button";
interface PopupProps {
  isOpen: boolean;
  width: string;
  height: string;
  children: React.ReactNode;
  handleOpenPopup: () => void;
  header: string;
  // title?: string,
  // closeButton?: boolean,
  handleSave: () => void;
}
const Popup: React.FC<PopupProps> = ({
  width,
  height,
  header,
  isOpen,
  children,
  handleOpenPopup,
  handleSave,
}) => {
  if (!isOpen) return null;
  return (
    <div>

    <div className={style.popup} onClick={handleOpenPopup}>
      <div
        className={style.popupInner}
        style={{ width }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.popupHeader}>
          <h2>{header}</h2>
        </div>
        <div className={style.popupContent} style={{ maxHeight:height }}>{children}</div>
        <div className={style.popupFooter}>
          <Button
            width="100%"
            styles={`${styleButton.gray}`}
            text="Close"
            onClick={handleOpenPopup}
            backgroundColor="#F5F5F5"
            color="#323343"
          ></Button>
          <Button width="100%" text="Save" onClick={handleSave}></Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Popup;
