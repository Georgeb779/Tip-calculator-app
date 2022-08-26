import React from "react";
import "./style.scss";

export function TipValue({
  text,
  value
}: {
  text: number | string;
  value: number;
}) {
  return (
    <div className='tip-value__container'>
      <div>
        <h1>{text}</h1>
        <p>/ person</p>
      </div>
      <div>
        <h2>${value}</h2>
      </div>
    </div>
  );
}
