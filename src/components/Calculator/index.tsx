import { Input } from "../Input";
import DollarIcon from "../../assets/icon-dollar.svg";
import PeopleIcon from "../../assets/icon-person.svg";

import "./style.scss";
import { Button } from "../Button";
import { tipsData } from "../../data/tips";
import { CalculatorProps } from "../../interfaces";
import { inputValidator } from "../../utils";
import { useState } from "react";

export function Calculator({
  inputProps,
  SetInputValueProps,
  setError,
  error
}: CalculatorProps) {

  const { bill, people, customTip } = inputProps;
  const { setBill, setTip, setCustomTip, setPeople } = SetInputValueProps;
  const [activeTip, setActiveTip] = useState(0);

  if (people === 0) {
    setError(true);
  } else {
    setError(false);
  }

  return (
    <div className='calculator__container'>
      <span className='calculator_input-container'>
        <p>Bill</p>
        <Input
          placeholder='0.00'
          icon={DollarIcon}
          value={bill as unknown as string}
          onChange={(value) => {
            inputValidator({ value, setBill });
          }}
        />
      </span>
      <span>
        <p>Select Tip %</p>
        <div className='calculator__tip-container'>
          {tipsData &&
            tipsData.map((tip, index) => (
              <Button
                active={activeTip === tip.value}
                key={index}
                text={`${tip.value}%`}
                onClick={() => {
                  setTip(tip.value);
                  setActiveTip(tip.value);
                  setCustomTip("");
                }}
                type={tip.type as "primary"}
              />
            ))}
          <Input
            value={customTip as unknown as string}
            placeholder='Custom'
            onChange={(value) => {
              inputValidator({ value, setCustomTip });
              setActiveTip(parseFloat(value));
              setTip(0);
            }}
          />
        </div>
      </span>
      <span className='calculator_input-container'>
        <div>
          <p>Number of People</p>
          {people === 0 && <p className='text-error'>Can’t be zero</p>}
        </div>

        <Input
          placeholder='0'
          icon={PeopleIcon}
          value={people as unknown as string}
          error={error}
          onChange={(value) => {
            inputValidator({ value, setPeople });
          }}
        />
      </span>
    </div>
  );
}
