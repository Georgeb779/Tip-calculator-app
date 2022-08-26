import React from "react";
import { Button, TipValue } from "../";
import { ResultProps } from "../../interfaces";
import "./style.scss";

export function Result({ tipAmount, totalAmount }: ResultProps) {
  return (
    <div className='result__container'>
      <div className='result__container-text'>
        <TipValue text={"Tip Amount"} value={tipAmount} />
        <TipValue text={"Total"} value={totalAmount} />
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
