import React from "react";
import { ButtonProps } from "../../interfaces";
import "./style.scss";

export function Button({ text, onClick, type }: ButtonProps) {
  return (
    <div className='button__container'>
      <button className={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
