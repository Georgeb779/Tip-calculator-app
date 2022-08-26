import React from "react";
import { Button, TipValue } from "../";
import "./style.scss";

export function Result() {
  return (
    <div className='result__container'>
      <div className='result__container-text'>
        <TipValue text={"Tip Amount"} value={100000} />
        <TipValue text={"Total"} value={1000000} />
      </div>

      <Button
        type='secondary'
        text={"RESET"}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
