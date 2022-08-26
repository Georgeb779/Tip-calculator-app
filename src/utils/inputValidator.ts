import { inputValidatorProps } from "../interfaces/input-validator_interface";

export const inputValidator = ({
  value,
  setCustomTipValue,
  setBillValue,
  setTip,
  setBill,
  setPeople,
  setPeopleValue
}: inputValidatorProps) => {
  if (
    typeof parseFloat(value) === "number" &&
    !isNaN(parseFloat(value)) &&
    setCustomTipValue &&
    setTip
  ) {
    setCustomTipValue(value);
  } else {
    setCustomTipValue && setCustomTipValue("");
    setTip && setTip(0);
  }

  if (
    typeof parseFloat(value) === "number" &&
    !isNaN(parseFloat(value)) &&
    setBill
  ) {
    setBill(parseFloat(value));
    setBillValue && setBillValue(value);
  } else {
    setBill ? setBill(0) : null;
    setBillValue && setBillValue("");
  }

  if (
    typeof parseFloat(value) === "number" &&
    !isNaN(parseFloat(value)) &&
    setPeople
  ) {
    setPeople(parseFloat(value));
    setPeopleValue && setPeopleValue(parseFloat(value));
  } else {
    setPeople ? setPeople(0) : null;
    setPeopleValue && setPeopleValue("");
  }
};
