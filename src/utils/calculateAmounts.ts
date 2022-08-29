import { calculateAmountsProps } from "../interfaces/calculate-amounts_interface";

export const calculateAmounts = ({
  inputProps,
  setTipAmount,
  setTotalAmount
}: calculateAmountsProps) => {
  const { bill, tip, people, customTip } = inputProps;

  const finalTips =
    customTip && Number(customTip) > 0 ? Number(customTip) : tip;

  console.log(finalTips);

  if (
    Number(bill) &&
    Number(people) &&
    people > 0 &&
    bill > 0 &&
    finalTips > 0
  ) {
    const tipAmount = Number(bill) * (Number(finalTips) / 100);
    const totalAmount = Number(bill) + Number(tipAmount);
    const amountPerPerson = totalAmount / Number(people);

    setTipAmount(totalAmount);
    setTotalAmount(amountPerPerson);
  } else {
    setTipAmount(0);
    setTotalAmount(0);
  }
};
