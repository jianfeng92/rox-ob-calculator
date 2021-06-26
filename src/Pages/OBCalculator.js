import React, { useState } from 'react';
import { NumInput } from '../index';

function OBCalculator() {

  const [baseExpPerMob, setBaseExpPerMob] = useState(0);
  const [jobExpPerMob, setJobExpPerMob] = useState(0);
  const [totalBaseEXP, setTotalBaseEXP] = useState(0);
  const [totalJobEXP, setTotalJobEXP] = useState(0);
  const [numOfOB, setNumOfOB] = useState(0);
  const [mobSize, setMobSize] = useState(1);

  //handle functions
  const handleBaseExpPerMob = event => setBaseExpPerMob(event.target.value);
  const handleJobExpPerMob = event => setJobExpPerMob(event.target.value);
  const handleNumOfOB = event => setNumOfOB(event.target.value);
  const handleMobSize = event => setMobSize(event.target.value);

  function handleSubmit(e) {
    e.preventDefault();

    const odinBlessingMultiplier = 5;
    
    const baseExpPerOB = baseExpPerMob / mobSize;
    const jobExpPerOB = jobExpPerMob / mobSize;

    // on Submit calculation
    setTotalBaseEXP((baseExpPerOB * odinBlessingMultiplier) * numOfOB)
    setTotalJobEXP((jobExpPerOB * odinBlessingMultiplier) * numOfOB)
  }
  //end

  return (
    <div>
        <h1>OB EXP CALCULATOR</h1>
        <form className="ob-calculator-form" onSubmit={handleSubmit}>
            <NumInput numInputValue={baseExpPerMob} onChangeNumInput={handleBaseExpPerMob} 
                      numInputText="Base EXP Per Mob" numInputName="baseEXP"/>
            <NumInput numInputValue={jobExpPerMob} onChangeNumInput={handleJobExpPerMob} 
                    numInputText="Job EXP Per Mob" numInputName="jobEXP"/>
            <NumInput numInputValue={numOfOB} onChangeNumInput={handleNumOfOB} 
                        numInputText="Number of Odin Blessing" numInputName="numOfOB"/>
            
            <label>
                Mob Size:
                <select value={mobSize} onChange={handleMobSize}>
                    <option value="1">Small</option>
                    <option value="2">Medium</option>
                    <option value="3">Large</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
        <p>After <b>{numOfOB}</b> Odin Blessing used</p>
        <p>You gained a total of <b>{totalBaseEXP}</b> BASE EXP</p>
        <p>You gained a total of <b>{totalJobEXP}</b> JOB EXP</p>
    </div>
  );
}

export default OBCalculator;