import React from 'react';

function NumInput({numInputValue, onChangeNumInput, numInputText, numInputName}) {

  return (
    <label>
        {numInputText}:
        <input type="number" name={numInputName} value={numInputValue} onChange={onChangeNumInput} />
    </label>
  );
}

export default NumInput;