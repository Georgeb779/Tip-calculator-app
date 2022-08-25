import React from "react";
import "./style.scss";

export function Input({
  icon,
  placeholder
}: {
  icon?: string;
  placeholder?: string;
}) {
  return (
    <div className='input__container'>
      {icon && <img src={icon} alt='input-icon' />}
      <input type='text' placeholder={placeholder} />
    </div>
  );
}
