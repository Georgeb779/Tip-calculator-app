import { resetValuesProps } from "../interfaces";

export const resetValues = ({ SetInputValueProps }: resetValuesProps) => {
  const { setTip, setBill, setPeople } = SetInputValueProps;
  setBill("");
  setTip("");
  setPeople("");
};
