import React from "react";
import { InputProps } from "../../interfaces";
import "./style.scss";

export function Input({
  icon,
  placeholder,
  onChange,
  value,
  error
}: InputProps) {
  return (
    <div className='input__container'>
      <input
        value={value}
        className={`${error ? "error" : ""}`}
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
