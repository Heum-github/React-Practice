import Header from './components/Header';
import Calculator from './components/Calculator';
import Chart from './components/Chart'; 
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState({
    'initialInvestment' : '',
    'annualInvestment' : '',
    'expectedReturn' : '',
    'duration' : ''
  })

  function handleChange(inputValues) {
    setInputValue(inputValues);
  }

  return (
    <>
      <Header />
      <main>
        <Calculator inputValue={inputValue} handleChange={handleChange} />
        <Chart inputValue={inputValue} />
      </main>
    </>
  )
}

export default App;
