
import React, { useState } from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <ButtonPanel 
        handleButtonClick={handleButtonClick}
        handleClear={handleClear}
        handleBackspace={handleBackspace}
        handleCalculate={handleCalculate}
      />
    </div>
  );
}

export default App;
