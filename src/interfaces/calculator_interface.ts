import { InputValueProps, SetInputValueProps } from "./";
export interface CalculatorProps {
  inputProps: InputValueProps;
  SetInputValueProps: SetInputValueProps;
  setError: (error: boolean) => void;
  error: boolean;
}
