import { ValidateAsNumberProps } from "../interfaces/validate-number_interface";

export const validateAsNumber = ({
  value,
  setBill,
  setPeople,
  setTip,
  setError
}: ValidateAsNumberProps) => {
  if (
    typeof parseFloat(value) === "number" &&
    !isNaN(parseFloat(value)) &&
    setPeople
  ) {
    setError(false);
    setPeople(parseFloat(value));
  } else if (
    typeof parseFloat(value) === "number" &&
    !isNaN(parseFloat(value)) &&
    setBill
  ) {
    setError(false);
    setBill(parseFloat(value));
  } else if (
    typeof parseFloat(value) === "number" &&
    !isNaN(parseFloat(value)) &&
    setTip
  ) {
    setError(false);
    setTip(parseFloat(value));
  } else {
    setError(true);
  }
};
