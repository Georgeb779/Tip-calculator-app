import { useEffect, useState } from "react";
import { Header, Footer, Calculator, Result } from "./components";
import { calculateAmounts } from "./utils/calculateAmounts";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const [error, setError] = useState(false);

  useEffect(() => {
    calculateAmounts({ bill, tip, people, setTipAmount, setTotalAmount });
  }, [tip, bill, people]);

  return (
    <div className='tip-app'>
      <Header />
      <div className='tip-app__container'>
        <Calculator
          setBill={setBill}
          setTip={setTip}
          setPeople={setPeople}
          setError={setError}
          error={error}
        />
        <Result tipAmount={tipAmount} totalAmount={totalAmount} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
