import React, { useState } from 'react';
import { NumInput, TimeInput } from '../index';

function EXPTracker() {

  const [initialEXP, setInitialEXP] = useState(0);
  const [currentEXP, setCurrentEXP] = useState(0);
  const [initialTime, setInitialTime] = useState("");
  const [initialTimeInMin, setInitialTimeInMin] = useState(0);
  const [currentTimeInMin, setCurrentTimeInMin] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const [EXPperMin, setEXPperMin] = useState("");
  const [EXPdiff, setEXPDiff] = useState(0);
  const [timeDiff, setTimeDiff] = useState(0);

  //handle functions
  const handleInitialEXP = event => setInitialEXP(event.target.value);
  const handleCurrentEXP = event => setCurrentEXP(event.target.value);
  const handleInitialTime = event => 
  {
    setInitialTime(event.target.value);
    setInitialTimeInMin(hmToMinutes(event.target.value))
  }
  const handleCurrentTime = event => 
  {
    setCurrentTime(event.target.value);
    setCurrentTimeInMin(hmToMinutes(event.target.value))
  }

  function hmToMinutes(time) {
    var timeArray = time.split(':');

    var hour = parseInt(timeArray[0]);
    var minute = parseInt(timeArray[1]);
    
    return (hour*60) + minute;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const expDiffVar = currentEXP - initialEXP;
    const timeMinDiffVar = currentTimeInMin - initialTimeInMin;

    setEXPDiff(expDiffVar);
    setTimeDiff(timeMinDiffVar);

    const expPerMinVar = Math.round(expDiffVar/timeMinDiffVar);

    setEXPperMin(expPerMinVar);

    //console.log("Calculate EXP/Min based on time diff and EXP diff, and also EXP/Hour, and EXP/24h")
  }
  //end

  return (
    <div>
        <h1>EXP/MIN TRACKER</h1>
        <form className="ob-calculator-form" onSubmit={handleSubmit}>
            <NumInput numInputValue={initialEXP} onChangeNumInput={handleInitialEXP} 
                      numInputText="Initial EXP" numInputName="initialEXP"/>
            <NumInput numInputValue={currentEXP} onChangeNumInput={handleCurrentEXP} 
                    numInputText="Current EXP" numInputName="currentEXP"/>
            <TimeInput timeInputValue={initialTime} onChangeTimeInput={handleInitialTime} 
                      timeInputText="Initial Time" timeInputName="initialTime"/>
            <TimeInput timeInputValue={currentTime} onChangeTimeInput={handleCurrentTime} 
                    timeInputText="Current Time" timeInputName="currentTime"/>
            <input type="submit" value="Submit" />
        </form>
        <p>In <b>{timeDiff}</b> minutes</p>
        <p>You gained a total of <b>{EXPdiff}</b> EXP</p>
        <p>Which means you're getting <b>{EXPperMin}</b>/Minute</p>
        <p>Which means you're getting <b>{EXPperMin*60}</b>/Hour</p>
    </div>
  );
}

//Test branch

export default EXPTracker;