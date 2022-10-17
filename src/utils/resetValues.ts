import { resetValuesProps } from "../interfaces";

export const resetValues = ({ SetInputValueProps }: resetValuesProps) => {
  const { setTip, setBill, setPeople, setCustomTip } = SetInputValueProps;
  setBill("");
  setTip("");
  setPeople("");
  setCustomTip("");
};
