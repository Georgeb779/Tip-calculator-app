export interface calculateAmountsProps {
  bill: number;
  tip: number;
  people: number;
  setTipAmount: (amount: number) => void;
  setTotalAmount: (amount: number) => void;
}
