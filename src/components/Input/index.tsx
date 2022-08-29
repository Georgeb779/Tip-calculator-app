import React from "react";
import { InputProps } from "../../interfaces";
import "./style.scss";

export function Input({ icon, placeholder, onChange, value }: InputProps) {
  

  return (
    <div className='input__container'>
      <input
        value={value}
        onChange={
          onChange ? (e) => onChange(e.target.value as string) : undefined
        }
        type='text'
        placeholder={placeholder}
        style={{ backgroundImage: `url(${icon})` }}
      />
    </div>
  );
}
