import React from "react";
import { InputProps } from "../../interfaces";
import "./style.scss";

export function Input({ icon, placeholder }: InputProps) {
  return (
    <div className='input__container'>
      <input
        type='text'
        placeholder={placeholder}
        style={{ backgroundImage: `url(${icon})` }}
      />
    </div>
  );
}
