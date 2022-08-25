import React from "react";
import { Input } from "../Input";
import "./style.scss";

export function Calculator() {
  return (
    <div className='calculator__container'>
      <span>
        <p>Bill</p>
        <Input placeholder='0.00' />
      </span>
    </div>
  );
}
