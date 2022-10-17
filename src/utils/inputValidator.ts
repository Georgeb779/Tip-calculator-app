import { inputValidatorProps } from "../interfaces/input-validator_interface";

export const inputValidator = ({
  value,
  setBill,
  setTip,
  setPeople,
  setCustomTip
}: inputValidatorProps) => {
  if (setBill && Number(value) && Number(value) > 0) {
    setBill(value);
  } else {
    setBill && setBill("");
  }
  if (setTip && Number(value) && Number(value) > 0) {
    setTip(value);
  } else {
    setTip && setTip("");
  }
  if (setPeople && parseFloat(value) >= 0) {
    setPeople(parseInt(value));
  } else {
    setPeople && setPeople("");
  }
  if (setCustomTip && Number(value) && Number(value) > 0) {
    setCustomTip(value);
  } else {
    setCustomTip && setCustomTip("");
  }
};
