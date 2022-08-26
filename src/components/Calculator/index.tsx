import { Input } from "../Input";
import DollarIcon from "../../assets/icon-dollar.svg";
import PeopleIcon from "../../assets/icon-person.svg";

import "./style.scss";
import { Button } from "../Button";
import { tipsData } from "../../data/tips";
import { CalculatorProps } from "../../interfaces";
import { inputValidator, validateAsNumber } from "../../utils";
import { useState } from "react";

export function Calculator({
  setBill,
  setTip,
  setPeople,
  setError,
  error
}: CalculatorProps) {
  const [activeTip, setActiveTip] = useState(0);

  const [customTipValue, setCustomTipValue] = useState<string | number>("");
  const [billValue, setBillValue] = useState<string | number>("");
  const [peopleValue, setPeopleValue] = useState<string | number>("");

  return (
    <div className='calculator__container'>
      <span className='calculator_input-container'>
        <p>Bill</p>
        <Input
          placeholder='0.00'
          icon={DollarIcon}
          value={billValue as unknown as string}
          onChange={(value) => {
            validateAsNumber({ value, setBill, setError });
            inputValidator({ value, setBill, setBillValue });
          }}
        />
      </span>
      <span>
        <p>Select Tip %</p>
        <div className='calculator__tip-container'>
          {tipsData &&
            tipsData.map((tip, index) => (
              <Button
                active={activeTip === parseFloat(tip.text)}
                key={index}
                text={tip.text}
                onClick={() => {
                  setTip(parseFloat(tip.text));
                  setActiveTip(parseFloat(tip.text));
                  setCustomTipValue("");
                }}
                type={tip.type as "primary"}
              />
            ))}
          <Input
            value={customTipValue as unknown as string}
            placeholder='Custom'
            onChange={(value) => {
              validateAsNumber({ value, setTip, setError });
              setActiveTip(parseFloat(value));
              inputValidator({ value, setCustomTipValue, setTip });
            }}
          />
        </div>
      </span>
      <span className='calculator_input-container'>
        <p>Number of People</p>
        <Input
          placeholder='0'
          icon={PeopleIcon}
          value={peopleValue as unknown as string}
          onChange={(value) => {
            validateAsNumber({ value, setPeople, setError });
            inputValidator({ value, setPeople, setPeopleValue });
          }}
        />
      </span>
    </div>
  );
}
