import Header from './components/Header';
import Calculator from './components/Calculator';
import Chart from './components/Chart'; 
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState({
    'initialInvestment' : 10000,
    'annualInvestment' : 1200,
    'expectedReturn' : 6,
    'duration' : 10
  })

  const inputIsValid = inputValue.duration >= 0;

  function handleChange(inputValues) {
    setInputValue(inputValues);
  }

  return (
    <>
      <Header />
      <main>
        <Calculator inputValue={inputValue} handleChange={handleChange} />
        {!inputIsValid && <p id="user-input">Please enter valid input values.</p>}
        {inputIsValid && <Chart inputValue={inputValue} />}
      </main>
    </>
  )
}

export default App;
