import { useEffect, useState } from "react";
import { Header, Footer, Calculator, Result } from "./components";
import { calculateAmounts } from "./utils/calculateAmounts";

function App() {
  const [bill, setBill] = useState<number | string>("");
  const [tip, setTip] = useState<number | string>("");
  const [customTip, setCustomTip] = useState<number | string>("");
  const [people, setPeople] = useState<number | string>("");

  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const [error, setError] = useState(false);

  useEffect(() => {
    calculateAmounts({
      inputProps: { bill, tip, customTip, people },
      setTipAmount,
      setTotalAmount,
      setCustomTip
    });
  }, [tip, bill, people, customTip]);

  return (
    <div className='tip-app'>
      <Header />
      <div className='tip-app__container'>
        <Calculator
          inputProps={{
            bill,
            tip,
            people,
            customTip
          }}
          SetInputValueProps={{
            setBill,
            setTip,
            setCustomTip,
            setPeople
          }}
          setError={setError}
          error={error}
        />
        <Result
          tipAmount={tipAmount}
          totalAmount={totalAmount}
          SetInputValueProps={{
            setBill,
            setTip,
            setCustomTip,
            setPeople
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
