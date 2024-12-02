import './App.css';
import { useState } from 'react';
import { InputForm, WithdrawalSummary } from "./ui"

function App() {
  const [amount, setAmount] = useState(0)
  return (
    <div className="App">
      {amount === 0 ?
        <InputForm setAmount={setAmount} /> :
        <WithdrawalSummary setAmount={setAmount} amount={amount} />}
    </div>
  );
}

export default App;
