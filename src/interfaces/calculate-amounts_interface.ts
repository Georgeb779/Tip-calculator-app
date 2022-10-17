import { InputValueProps } from "./input-value_interface";

export interface calculateAmountsProps {
  inputProps: InputValueProps;
  setTipAmount: (amount: number) => void;
  setTotalAmount: (amount: number) => void;
  setCustomTip: (customTip: number | string) => void;
}
