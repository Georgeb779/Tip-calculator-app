import React from "react";
import { Input } from "../Input";
import DollarIcon from "../../assets/icon-dollar.svg";
import PeopleIcon from "../../assets/icon-person.svg";

import "./style.scss";
import { Button } from "../Button";
import { tipsData } from "../../data/tips";

export function Calculator() {
  return (
    <div className='calculator__container'>
      <span className='calculator_input-container'>
        <p>Bill</p>
        <Input placeholder='0.00' icon={DollarIcon} />
      </span>
      <span>
        <p>Select Tip %</p>
        <div className='calculator__tip-container'>
          {tipsData &&
            tipsData.map((tip, index) => (
              <Button
                key={index}
                text={tip.text}
                onClick={() => {
                  console.log(5);
                }}
                type={tip.type as "primary"}
              />
            ))}

          <Input placeholder='Custom' />
        </div>
      </span>

      <span className='calculator_input-container'>
        <p>Number of People</p>
        <Input placeholder='0' icon={PeopleIcon} />
      </span>
    </div>
  );
}
