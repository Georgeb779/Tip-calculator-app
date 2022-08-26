export interface ValidateAsNumberProps {
  value: any;
  setBill?: (bill: number) => void;
  setPeople?: (people: number) => void;
  setTip?: (tip: number) => void;
  setError: (error: boolean) => void;
}
