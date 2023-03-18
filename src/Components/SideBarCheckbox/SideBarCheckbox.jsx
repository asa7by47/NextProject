import React from "react";

const SideBarCheckbox = ({ title, sideBarFontSize , addingMarginNegative}) => {
  return (
    <>
      <li className={`d-flex flex-row m-0 p-0  ${addingMarginNegative}`}>
        <label htmlFor={title}>
          <input type="checkbox" id={title} />
          <span className={`ms-2 ${sideBarFontSize}`}> {title} </span>
        </label>
      </li>
      
    </>
  );
};

export default SideBarCheckbox;
