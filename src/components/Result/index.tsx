import React from "react";
import { Button, TipValue } from "../";
import "./style.scss";

export function Result() {
  return (
    <div className='result__container'>
      <TipValue text={"Tip Amount"} value={4.27} />
      <TipValue text={"Total"} value={32.79} />
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
