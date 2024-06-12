
import React from 'react';
import Button from './Button';

const ButtonPanel = ({ handleButtonClick, handleClear, handleBackspace, handleCalculate }) => (
  <div className="buttons">
    <Button value="C" onClick={handleClear} />
    <Button value="←" onClick={handleBackspace} />
    <Button value="/" onClick={handleButtonClick} />
    <Button value="*" onClick={handleButtonClick} />
    <Button value="7" onClick={handleButtonClick} />
    <Button value="8" onClick={handleButtonClick} />
    <Button value="9" onClick={handleButtonClick} />
    <Button value="-" onClick={handleButtonClick} />
    <Button value="4" onClick={handleButtonClick} />
    <Button value="5" onClick={handleButtonClick} />
    <Button value="6" onClick={handleButtonClick} />
    <Button value="+" onClick={handleButtonClick} />
    <Button value="1" onClick={handleButtonClick} />
    <Button value="2" onClick={handleButtonClick} />
    <Button value="3" onClick={handleButtonClick} />
    <Button value="=" onClick={handleCalculate} />
    <Button value="0" onClick={handleButtonClick} />
    <Button value="." onClick={handleButtonClick} />
  </div>
);

export default ButtonPanel;
