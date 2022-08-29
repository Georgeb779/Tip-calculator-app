import { inputValidatorProps } from "../interfaces/input-validator_interface";

export const inputValidator = ({
  value,
  setTip,
  setBill,
  setPeople,
  setCustomTip
}: inputValidatorProps) => {
  if (
    typeof parseFloat(value) === "number" &&
    !isNaN(parseFloat(value)) &&
    setCustomTip
  ) {
    setCustomTip(value);
  } else {
    setCustomTip && setCustomTip("");
  }

  if (
    typeof parseFloat(value) === "number" &&
    !isNaN(parseFloat(value)) &&
    setTip
  ) {
    setTip(value);
  } else {
    setTip && setTip("");
  }

  if (
    typeof parseFloat(value) === "number" &&
    !isNaN(parseFloat(value)) &&
    setBill
  ) {
    setBill(parseFloat(value));
  } else {
    setBill ? setBill("") : null;
  }

  if (
    typeof parseFloat(value) === "number" &&
    !isNaN(parseFloat(value)) &&
    setPeople
  ) {
    setPeople(parseFloat(value));
  } else {
    setPeople ? setPeople("") : null;
  }
};
