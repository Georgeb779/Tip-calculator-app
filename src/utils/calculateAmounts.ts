import { calculateAmountsProps } from "../interfaces/calculate-amounts_interface";

export const calculateAmounts = ({
  bill,
  tip,
  people,
  setTipAmount,
  setTotalAmount
}: calculateAmountsProps) => {
  if (people > 0 && bill > 0 && tip > 0) {
    const tipAmount = bill * (tip / 100);
    const totalAmount = bill + tipAmount;
    const perPerson = totalAmount / people;
    setTipAmount(totalAmount);
    setTotalAmount(perPerson);
  }
};
