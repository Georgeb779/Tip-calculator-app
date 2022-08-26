export interface CalculatorProps {
  setBill: (bill: number) => void;
  setTip: (tip: number) => void;
  setPeople: (people: number) => void;
  setError: (error: boolean) => void;
  error: boolean;
}
