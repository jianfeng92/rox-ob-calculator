import React from 'react';

function TimeInput({timeInputValue, onChangeTimeInput, timeInputText, timeInputName}) {

  return (
    <label>
        {timeInputText}:
        <input type="time" step="3600" name={timeInputName} value={timeInputValue} onChange={onChangeTimeInput} />
    </label>
  );
}

export default TimeInput;